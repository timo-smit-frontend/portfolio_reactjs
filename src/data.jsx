import recruiteit from "./assets/recruiteit.jpg";
import accentInteractive from "./assets/accentinteractive.webp";
import smartHotel from "./assets/smarthotel.webp";
import wfp from "./assets/wfp_enhance.jpg";

import learningReact from "./assets/educational_projects/learning_react.webp";
import pokemonEevee from "./assets/educational_projects/interface_interaction.webp";
import twitchTv from "./assets/educational_projects/twitch.webp";
import accessibility from "./assets/educational_projects/accessibility.webp";

export const MAIN_LIST_ITEMS = [
  {
    image: wfp,
    title: "Project Enhance",
    description:
      "While working at Capgemini, I had the opportunity to collaborate with the United Nations World Food Programme on Project Enhance. This sophisticated initiative addresses dietary considerations, offering a versatile tool to calculate and model dietary patterns. The goal is to enhance nutrition, affordability, and sustainability based on individual needs and local preferences.",
    link: "https://enhancedietsanalytics.wfp.org/",
  },
  {
    image: recruiteit,
    title: "RecruiteIT",
    description:
      "RecruiteIT wanted a new webapplication in which they can track potential candidates, filter on them, save their resumes, etc. Within 5 small sprints, three front-end developers and I created a working solution.",
    link: "https://recruite-it.web.app",
  },
  {
    image: accentInteractive,
    title: "Accent Interactive",
    description:
      "At Accent Interactive I got to work together with a team of developers which I supported with my designer skills. Besides that they helped me learn more about being a developer and so I developed a fully coded frontend (in Laravel and SCSS) for a new version of an planning system they have.",
    link: "https://accentinteractive.nl",
  },
  {
    image: smartHotel,
    title: "SmartHOTEL",
    description:
      "SmartHOTEL gave me the opportunity to grow by allowing me to unleash all my knowledge on there current designs and ways of communicating. This allowed me to enhance the user experience, give the design a more modern feel and make everything more lively.",
    link: "https://www.smarthotel.nl/",
  },
];

export const EDUCATIONAL_PROJECTS = {
  portfolioReact: {
    title: "Learning React",
    description: (
      <>
        This portfolio was made in React. I made this while I started learning
        React. I learned to write in React by following a course on Udemy,
        named:
        <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/">
          &nbsp;React - The Complete Guide 2023, by Maximilian Schwarzmüller.
        </a>
      </>
    ),
    image: learningReact,
    link: "https://www.timosmit.dev",
    created: "created November 2023",
  },
  pokemonEevee: {
    title: "Interface interaction",
    description:
      'For the subject Interface interaction I got asked the question:"How do you evolve the pokemon Eevee?". To answer the question I created an interactive interface looking like a Nintendo DS. The user can learn how Eevee evolves by making decisions. The interface is made with HTML, CSS and JS. ',
    image: pokemonEevee,
    link: "https://timo500810897.github.io/interface-interaction/",
    created: "created May 2022",
  },
  accessibility: {
    title: "Accessibility",
    description:
      "Making visuals for a video to enhance it for a deaf audience. With only reading the subtitles you barely have a clue what the scene is about. This is why I accepted the challenge to create visualizations to help the user understand what is going on. This is a fragment of the movie Blade Runner 2049.",
    image: accessibility,
    link: "https://timo500810897.github.io/web-typography-21-22/closed-captions/index.html",
    created: "created April 2022",
  },
  twitchTv: {
    title: "Responsiveness",
    description:
      "This is my first try at making a website responsive. At the time I watched a lot of livestreams on Twitch.tv. This is why I decited to recreate the website on my own. This started my passion for Front-end by finding out how much I like this way of puzzling way of creating anything you want.",
    image: twitchTv,
    link: "https://timo500810897.github.io/blokweb/",
    created: "created October 2020",
  },
};
