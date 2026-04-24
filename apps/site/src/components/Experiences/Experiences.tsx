import { component$, useStore } from "@qwik.dev/core";
import { marked } from "marked";

interface DynamicObject {
  [key: string]: {
    frontmatter: ExperienceFrontmatter,
    content: string;
    hidden: boolean;
    active: boolean;
  };
}

interface Experiences {
	experiences: Experience[];
}

export interface ExperienceFrontmatter {
	title: string;
	company: string;
	website: string;
	position: string;
	startDate: string;
	endDate: string;
}

export interface Experience {
	content: string;
	experience: ExperienceFrontmatter;
}

const createTabs = (obj: Experience[], n: number) => {
	const tabs: DynamicObject = {};
	for (let i: number = 0; i < Math.min(n, obj.length); i++) {
		tabs[obj[i]!.experience.company] = {
			frontmatter: obj[i]!.experience,
			content: obj[i]!.content,
			hidden: i !== 0,
			active: i === 0,
		};
	}
	return tabs;
};

const clickTab = (store: DynamicObject, tab: string) => {
  Object.keys(store).forEach((key) => {
    store[key].active = key === tab;
    store[key].hidden = key !== tab;
  });
};

const ExperienceTab = component$((
  { store, tab }: { store: DynamicObject, tab: string }
) => {
  return (
    <li
      class={store[tab].active ? "active-tab" : undefined}
      onClick$={() => clickTab(store, tab)}
    >
      {tab}
    </li>
  );
})

const ExperienceResume = component$((
  { store, tab }: { store: DynamicObject, tab: string }
) => {
  return (
    <article style={{ display: store[tab].hidden ? "none" : "block" }}>
      <div class="experience-resume-title">
        <h3>
          {store[tab].frontmatter.position}
          <span> @ {store[tab].frontmatter.company}</span>
        </h3>
        <span>
          {store[tab].frontmatter.startDate} - {store[tab].frontmatter.endDate}
        </span>
      </div>
      <div
        class="experience-resume-text"
        dangerouslySetInnerHTML={marked.parse(store[tab].content)}
      />
    </article>
  );
});

export const ExperiencesSection = component$(({ experiences }: Experiences) => {
	const store = useStore<DynamicObject>(createTabs(experiences, experiences.length));

  return (
    <section class="experience">
      <div class="experience-wrap">
        <h2 class="section-title"><span>02.</span> Experiences</h2>
        <div class="experience-jobs">
          <div class="experience-sidebar">
            <ul class="experience-sidebar-list">
              {Object.keys(store).map((tab) => (
                <ExperienceTab store={store} tab={tab} />
              ))}
            </ul>
          </div>
          <div class="experience-resume">
            {Object.keys(store).map((tab) => (
              <ExperienceResume store={store} tab={tab} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
});
