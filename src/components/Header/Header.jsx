import "./Header.css";
import logoTS from "../../assets/ts_logo.png";
import scrollToElementWithId from "../../functions/utils";
import TraitSwapper from "./TraitSwapper/TraitSwapper";

export default function Header() {
  return (
    <header id="header">
      <nav>
        <img src={logoTS} alt="Timo Smit"></img>
      </nav>
      <section>
        <h1>
          Timo Smit is a <TraitSwapper /> Front-end Developer!
        </h1>
      </section>
      <button
        onClick={() => scrollToElementWithId("#main")}
        className="arrow"
        aria-label="Skip to main content"
      ></button>
    </header>
  );
}
