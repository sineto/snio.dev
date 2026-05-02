export interface AboutCard {
  title: string;
  iconName: string;
  tldr: string;
}

export const aboutTags: string[] = [
  "Golang",
  "TypeScript",
  "Node.js",
  "React",
  "Next.js",
  "PostgreSQL",
  "Docker/Podman",
  "Amazon AWS",
];

export const aboutCards: AboutCard[] = [
  {
    title: "Back-end",
    iconName: "ph:plugs-bold",
    tldr: "I can develop APIs with REST and gRPC achitecture using Golang.",
  },
  {
    title: "Front-end",
    iconName: "ph:code-bold",
    tldr: "I can build web applications using React/Next.js stack.",
  },
  {
    title: "Infrastructure",
    iconName: "ph:rocket-launch-bold",
    tldr: "I can manage cloud services using Amazon AWS.",
  },
];
