import "./Bio.css";
import Socials from "../../Footer/Socials";
import Section from "../../Section";

export default function Bio() {
  return (
    <Section
      id="bio"
      title={
        <>
          <span>Who</span> is Timo Smit?
        </>
      }
    >
      <article>
        <p>
          Hey everyone, welcome to my portfolio. I am a Front-end Developer
          currently working for Capgemini Netherlands B.V. In june 2023 I
          finished my bachelor Communication and Multimedia Design at the
          University of Applied Sciences in Amsterdam. During my studies I
          became a UX/UI designer and a Front-end Developer in one. Making me a
          creative developer always having user experience and accessability in
          mind.
          <br />
          <br />
          To me, coding is like putting together a puzzle, a challenging task
          that's intriguing to solve. Adding creativity and aiming to make
          something that brings happiness makes the whole process special.
          Creating something I like and seeing how it affects others is really
          satisfying.
          <br />
          <br />
          Want to know more about me?
        </p>
        <Socials />
      </article>
    </Section>
  );
}
