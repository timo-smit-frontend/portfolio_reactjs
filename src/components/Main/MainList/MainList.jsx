import { MAIN_LIST_ITEMS } from "../../../data.jsx";
import MainListItem from "./MainListItem/MainListItem.jsx";
import Section from "../../Section.jsx";

export default function MainList() {
  return (
    <Section
      id="main-list"
      title={
        <>
          My <span>professional</span> front-end experiences
        </>
      }
    >
      <ul>
        {MAIN_LIST_ITEMS.map((listItem, index) => (
          <MainListItem key={index} {...listItem} />
        ))}
      </ul>
    </Section>
  );
}
