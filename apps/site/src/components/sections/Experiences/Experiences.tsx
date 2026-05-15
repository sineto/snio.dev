import { $, component$, useSignal, useStore, useTask$, useVisibleTask$ } from "@qwik.dev/core";
import { marked } from "marked";

import type { Experience, ExperienceFrontmatter } from "@/data/experiences";
import { getLangFromUrl, useTranslations } from "@/i18n/utils";

interface DynamicObject {
  meta: ExperienceFrontmatter;
  content: string;
  active: boolean;
}

interface TabInfo {
  id: number;
  tab: string;
  resumeHTML: string;
}

export const Experiences = component$(({ experiences, astroUrl }: { experiences: Experience[]; astroUrl: URL }) => {
  const tabList = useStore<DynamicObject[]>(
    experiences.map((exp, idx) => ({
      meta: exp.meta,
      content: exp.content,
      active: idx === 0,
    })),
  );

  const lang = getLangFromUrl(astroUrl);
  const t = useTranslations(lang);

  const tabInfo = useSignal<TabInfo>({ id: 0, tab: "", resumeHTML: "" });
  const scopedStyle = useSignal({ width: 0, left: 0, height: 0, top: 0 });
  const activeTabRef = useSignal<Element>();

  const updateIndicator = $((_: unknown, element: HTMLElement) => {
    scopedStyle.value = {
      width: element.offsetWidth,
      left: element.offsetLeft,
      height: element.offsetHeight,
      top: element.offsetTop,
    };
  });

  const print = $((ev: PointerEvent) => console.log("CLICKED!", ev));

  // ensure get marked.parse async
  useTask$(async ({ track }) => {
    const id = track(() => tabInfo.value.id);
    if (tabList[id]) {
      tabInfo.value.resumeHTML = await marked.parse(tabList[id].content);
    }
  });

  useVisibleTask$(({ track }) => {
    const el = track(() => activeTabRef.value);
    if (el instanceof HTMLElement) updateIndicator(null, el);
  });

  return (
    <section id="experience" class="autoShow">
      <div class="experience-wrap">
        <h2 class="section-header">{t("experience.title")}</h2>
        <div class="experience-jobs">
          <div class="experience-tablist">
            {tabList.map((tab: DynamicObject, idx: number) => {
              const { meta, content, active } = tab;
              return (
                <button
                  key={`tabbutton-${meta.company}-${idx}`}
                  type="button"
                  id="experience-tablist_button"
                  ref={active ? activeTabRef : undefined}
                  class={active ? "active-tab" : undefined}
                  onClick$={[
                    print,
                    updateIndicator,
                    $(() => {
                      tabList.map((t, i) => (t.active = i === idx));
                      tabInfo.value = {
                        id: idx,
                        tab: tab.meta.company,
                        resumeHTML: content,
                      };
                    }),
                  ]}
                >
                  {meta.company}
                </button>
              );
            })}
            <div
              class="active-tab-block"
              style={{
                "--active-block-width": `${scopedStyle.value.width}px`,
                "--active-block-left": `${scopedStyle.value.left}px`,
                "--active-block-height": `${scopedStyle.value.height}px`,
                "--active-block-top": `${scopedStyle.value.top}px`,
              }}
            />
          </div>
          <div class="experience-resume">
            {tabList.map((tab: DynamicObject, idx: number) => {
              const { meta, active } = tab;
              return (
                <article key={`tabcontent-${meta.company}-${idx}`} style={{ display: active ? "block" : "none" }}>
                  <div class="experience-resume_title">
                    <h3>
                      {tab.meta.position}
                      <span>
                        &nbsp;@&nbsp;
                        <a class="link" href={meta.website}>
                          {meta.company}
                        </a>
                      </span>
                    </h3>
                    <p>
                      {meta.startDate} - {meta.endDate}
                    </p>
                  </div>
                  <div class="experience-resume_text" dangerouslySetInnerHTML={tabInfo.value.resumeHTML} />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
});
