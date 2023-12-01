import logoTS from "../../assets/ts_logo.png";
import "./Header.css";

const characterTrades = [
  "creative",
  "proactive",
  "cool",
  "motivated",
  "social",
  "enthusiastic",
  "happy",
  "nerdy",
  "respectable",
  "weird",
  "funny",
  "cringe",
  "adventurous",
  "surprising",
  "badass",
  "fashionable",
];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header({ click }) {
  const randomTrade = characterTrades[genRandomInt(16)];
  return (
    <header>
      <nav>
        <img src={logoTS} alt=""></img>
      </nav>
      <section>
        <h1>
          Timo Smit is a <span id="trade-styling">{randomTrade}</span> Front-end
          Developer!
        </h1>
      </section>
      <button onClick={click} className="arrow"></button>
    </header>
  );
}
