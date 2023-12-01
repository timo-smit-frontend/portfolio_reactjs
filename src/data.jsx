import recruiteit from "./assets/recruiteit.png";
import accentInteractive from "./assets/accentinteractive.jpg";
import smartHotel from "./assets/smarthotel.png";

import learningReact from "./assets/educational_projects/learning_react.png";
import pokemonEevee from "./assets/educational_projects/interface_interaction.png";
import twitchTv from "./assets/educational_projects/twitch.png";
import accessibility from "./assets/educational_projects/accessibility.png";

export const MAIN_LIST_ITEMS = [
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
    link: "",
    created: "created November 2023",
  },
  pokemonEevee: {
    title: "Interface interaction",
    description: "How do you evolve the pokemon Eevee?",
    image: pokemonEevee,
    link: "https://timo500810897.github.io/interface-interaction/",
    created: "created May 2022",
  },
  accessibility: {
    title: "Accessibility",
    description:
      "Making visuals for a video to enhance it for a deaf audience.",
    image: accessibility,
    link: "https://timo500810897.github.io/web-typography-21-22/closed-captions/index.html",
    created: "created April 2022",
  },
  twitchTv: {
    title: "Responsiveness",
    description: "My first try at making a website responsive.",
    image: twitchTv,
    link: "https://timo500810897.github.io/blokweb/",
    created: "created October 2020",
  },
};
