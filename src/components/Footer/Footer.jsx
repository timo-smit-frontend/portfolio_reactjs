import Credits from "./Credits.jsx";
import Socials from "./Socials.jsx";
import logoTS_2 from "../../assets/ts_logo_2.png";
import scrollToElementWithId from "../../functions/utils";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <img
          onClick={() => scrollToElementWithId("#header")}
          src={logoTS_2}
          alt="Timo Smit"
        ></img>
        <ul className="contact">
          <li>
            <h3>Contact</h3>
          </li>
          <li>
            <a href="mailto:timo.smit@live.nl">timo.smit@live.nl</a>
          </li>
          <li>
            <a href="tel:+31610792320">+31 6 10 79 23 20</a>
          </li>
          <li>
            <a href="https://timo-smit.webflow.io/">My Design Portfolio</a>
          </li>
        </ul>
        <Socials />
        <Credits />
      </footer>
    </>
  );
}
