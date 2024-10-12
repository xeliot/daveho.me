export interface Experience {
  title: string;
  duration: string;
  description: string;
  url: string;
}

export const experiences: Experience[] = [
  {
    title: "Software Engineer @ Anduril Industries",
    duration: "Aug 2023 - Oct 2024",
    description:
      "Implemented collaborative multi-agent systems for drone swarms in military defense operations using behavior trees.",
    url: "https://www.anduril.com/",
  },
  {
    title: "Software Engineer Intern @ Snorkel AI",
    duration: "Jun 2022 - Oct 2022",
    description:
      "Built version control system for grouth truth and application DAG of customer data on the SnorkelFlow platform.",
    url: "https://snorkel.ai/",
  },
  {
    title: "Software Engineer Intern @ Snorkel AI",
    duration: "Jun 2021 - Oct 2021",
    description:
      "Designed user-defined model classes, allowing registration of custom experimental models via Jupyter Notebook.",
    url: "https://snorkel.ai/",
  },
  {
    title: "Data Science MTS @ VMWare",
    duration: "Jul 2019 - Jun 2020",
    description:
      "Engineered several Supervised Machine Learning models and Reinforcement Learning agents to solve problems ranging from automatic security triaging, VM timeout prevention, and VM Anomaly Detection.",
    url: "https://www.vmware.com/",
  },
  {
    title: "Machine Learning Engineer @ Twyne",
    duration: "Oct 2019 - Jun 2020",
    description:
      "Developed an app which helps users interact with the world through simple and natural motions by bringing automated and customizable ML-based gesture recognition to the smartwatch.",
    url: "/experiences",
  },
];
