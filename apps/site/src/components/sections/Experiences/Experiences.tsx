import { component$, useTask$, useVisibleTask$, useSignal, useStore, $} from "@qwik.dev/core";
import { marked } from "marked";

export interface ExperienceFrontmatter {
	title: string;
	company: string;
	website: string;
	position: string;
	startDate: string;
	endDate: string;
}

export interface Experience {
	meta: ExperienceFrontmatter;
	content: string;
}

interface DynamicObject {
  meta: ExperienceFrontmatter,
  content: string;
  active: boolean;
}

interface TabInfo {
  id: number;
  tab: string;
  resumeHTML: string;
}

const createTabList = (experiences: Experience[]) => {
	const tabs: DynamicObject[] = [];
  experiences.map((exp: Experience, idx: number) => {
    tabs[idx] = {
      meta: exp.meta,
      content: exp.content,
      active: idx === 0,
    }
  });
	return tabs;
};

const clickTab = (tabList: DynamicObject[], tabSelected: string) => {
  tabList.map((tab, idx) => {
    if (tabList[idx] == undefined) return;
    tabList[idx].active = tab.meta.company === tabSelected;
  });
};


export const Experiences = component$(({ experiences }: { experiences: Experience[] }) => {
	const tabList = useStore<DynamicObject[]>(createTabList(experiences));
  const tabInfo = useSignal<TabInfo>({ id: 0, tab: "", resumeHTML: "" });
  const scopedStyle = useSignal({ width: 0, left: 0, height: 0, top: 0});

  const clickOnTab = $((event) => {
    scopedStyle.value = {
      width: event.target.offsetWidth,
      left: event.target.offsetLeft,
      height: event.target.offsetHeight,
      top: event.target.offsetTop,
    };
  });

  const print = $((ev) => console.log('CLICKED!', ev));

  // ensure get marked.parse async
  useTask$(async ({ track }) => {
    track(() => tabInfo.value);
    if (tabList[tabInfo.value.id] != undefined) {
      const content = tabList[tabInfo.value.id].content;
      tabInfo.value.resumeHTML = await marked.parse(content);
    };
  });

  useVisibleTask$(({ track }) => {
    track(() => document.readyState);
    const btn = document.querySelector<HTMLElement>("#experience-tablist_button");
    if (btn) {
      scopedStyle.value = {
        width: btn.offsetWidth,
        left: btn.offsetLeft,
        height: btn.offsetHeight,
        top: btn.offsetTop,
      };
    }
  });

  console.log(scopedStyle.value);
 
  return (
    <section id="experience" class="autoShow">
      <div class="experience-wrap">
        <h2 class="section-header">Expeciences</h2>
        <div class="experience-jobs">
          <div class="experience-tablist">
            {tabList.map((tab: DynamicObject, idx: number) => {
              const { meta, content, active } = tab;
              return (
                <button
                  id="experience-tablist_button"
                  class={active ? "active-tab" : undefined}
                  onClick$={[print, clickOnTab,
                    $(() => {
                      clickTab(tabList, tab.meta.company);
                      tabInfo.value = {
                        id: idx,
                        tab: tab.meta.company,
                        resumeHTML: content
                      };
                    })
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
            {tabList.map((tab: DynamicObject) => {
              const { meta, active } = tab;
              return (
                <article style={{ display: active ? "block" : "none" }}>
                  <div class="experience-resume_title">
                    <h3>
                      {tab.meta.position}
                      <span>
                        &nbsp;@&nbsp;
                        <a class="link" href={meta.website}>{meta.company}</a>
                      </span>
                    </h3>
                    <p>
                      {meta.startDate} - {meta.endDate}
                    </p>
                  </div>
                  <div
                    class="experience-resume_text"
                    dangerouslySetInnerHTML={tabInfo.value.resumeHTML}
                  />
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
});
