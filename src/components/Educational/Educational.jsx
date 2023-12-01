import { useState } from "react";
import { EDUCATIONAL_PROJECTS } from "../../data.jsx";
import TabButton from "./TabButton/TabButton.jsx";
import Section from "../Section.jsx";
import Tabs from "../Tabs.jsx";

export default function Educational() {
  const [clickedTopic, setClickedTopic] = useState("portfolioReact");

  let tabContent = "";

  if (clickedTopic) {
    tabContent = (
      <div id="tab-content">
        <div id="content-wrapper">
          <div id="content">
            <h3>
              {EDUCATIONAL_PROJECTS[clickedTopic].title}
              <span>{EDUCATIONAL_PROJECTS[clickedTopic].created}</span>
            </h3>
            <p>{EDUCATIONAL_PROJECTS[clickedTopic].description}</p>
          </div>
          <a
            type="button"
            target="_blank"
            href={EDUCATIONAL_PROJECTS[clickedTopic].link}
          >
            View {EDUCATIONAL_PROJECTS[clickedTopic].title}
          </a>
        </div>
        <img
          src={EDUCATIONAL_PROJECTS[clickedTopic].image}
          alt={EDUCATIONAL_PROJECTS[clickedTopic].title}
        />
      </div>
    );
  }

  function handleClick(clickedButton) {
    setClickedTopic(clickedButton);
  }

  return (
    <>
      <Section
        id="educational"
        title={
          <>
            <span>Educative</span> experiences
          </>
        }
      >
        <Tabs
          buttons={
            <>
              <TabButton
                isClicked={clickedTopic === "portfolioReact"}
                onClick={() => handleClick("portfolioReact")}
              >
                {EDUCATIONAL_PROJECTS["portfolioReact"].title}
              </TabButton>
              <TabButton
                isClicked={clickedTopic === "pokemonEevee"}
                onClick={() => handleClick("pokemonEevee")}
              >
                {EDUCATIONAL_PROJECTS["pokemonEevee"].title}
              </TabButton>
              <TabButton
                isClicked={clickedTopic === "accessibility"}
                onClick={() => handleClick("accessibility")}
              >
                {EDUCATIONAL_PROJECTS["accessibility"].title}
              </TabButton>
              <TabButton
                isClicked={clickedTopic === "twitchTv"}
                onClick={() => handleClick("twitchTv")}
              >
                {EDUCATIONAL_PROJECTS["twitchTv"].title}
              </TabButton>
            </>
          }
        >
          {tabContent}
        </Tabs>
      </Section>
    </>
  );
}
