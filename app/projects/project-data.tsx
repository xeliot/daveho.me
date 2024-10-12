export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Project One",
    year: 2023,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
    url: "https://example.com/",
  },
  {
    title: "Thought Jar",
    year: 2018,
    description:
      "Distributed survey platform that allows users to quickly gather unbiased public opinions through distributed micropayments",
    url: "https://www.youtube.com/watch?v=gyM98R9CsZY&list=PLVbuYkBVwUeDpZjYvk6tmlmv6CEFwnZ1k",
  },
  {
    title: "Project Three",
    year: 2021,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
    url: "https://example.com/",
  },
];
