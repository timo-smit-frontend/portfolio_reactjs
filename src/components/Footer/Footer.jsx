import Credits from "./Credits.jsx";
import logoTS_2 from "../../assets/ts_logo_2.png";
import scrollToElementWithId from "../../functions/utils";
import "./Footer.css";

export default function Footer({ click }) {
  return (
    <>
      <footer>
        <img
          onClick={() => scrollToElementWithId("#header")}
          src={logoTS_2}
          alt=""
        ></img>
        <ul className="contact">
          <li>
            <h3>Contact</h3>
          </li>
          <li>
            <a href="mailto:timo.smit@live.nl">timo.smit@live.nl</a>
          </li>
          <li>
            <a href="tel:+31610792320">+31 6 10792320</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/timo-smit-09983b14a/">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://timo-smit.webflow.io/">
              Communication and Mulimedia Design Portfolio
            </a>
          </li>
        </ul>
      </footer>
      <Credits />
    </>
  );
}
