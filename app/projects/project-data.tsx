export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Deep Reinforcement Learning TechTalk",
    year: 2019,
    description:
      "TechTalk demonstrating how to use PyTorch neural networks to implement a Reinforcement Learning Agent. TechTalk covered a basic DQN architecture to solve the Open AI Gym CartPole problem.",
    url: "https://github.com/xeliot/rl_gym",
  },
  {
    title: "Deep Neural Networks with PyTorch Workshop",
    year: 2019,
    description:
      "Hands-on Neural Network Workshop with several PyTorch Labs. Concepts discussed in detail include Neural Networks & Backpropagation, Vanishing Gradient & Overfitting, Convolutional Neural Networks, Recurrent Neural Networks, and LSTMs. 40+ Attendees.",
    url: "https://github.com/xeliot/pytorch_training",
  },
  {
    title: "Thought Jar",
    year: 2018,
    description:
      "Distributed survey platform that allows users to quickly gather unbiased public opinions through distributed micropayments",
    url: "https://www.youtube.com/watch?v=gyM98R9CsZY&list=PLVbuYkBVwUeDpZjYvk6tmlmv6CEFwnZ1k",
  },
  {
    title: "Perspective - HTC Vive",
    year: 2017,
    description:
      "Puzzle game built on the HTC Vive where the player, in virtual reality, has to move his or her perspective to line up a certain object to continue to the next level.",
    url: "https://www.youtube.com/watch?v=BQisTKyZS3o&feature=youtu.be",
  },
  {
    title: "918 Golf",
    year: 2017,
    description:
      "AppStore published app that provides fast, convenient service on the golf course. Automatically integrates with existing golf course maps and menus",
    url: "https://golf918.com/order-2/",
  },
  {
    title: "Chinese Chess Unity",
    year: 2017,
    description:
      "Online heads-up game that allows users on the same network to play Chinese Chess with one another. It is built with Unity 3D and C#.Net.",
    url: "https://github.com/xeliot/chinesechessol",
  },
  {
    title: "Beta Go",
    year: 2016,
    description:
      "Open-source augmented reality tourism app that allows users to keep track of their paths as they explore new regions of the earth. It is built for android and utilizes a flask server backend and sqlite3 for database management.",
    url: "https://github.com/zetaphase/betago",
  },
];
