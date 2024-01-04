import MainList from "./MainList/MainList";
import Educational from "./Educational/Educational";
import Bio from "./Bio/Bio";
import "./Main.css";

export default function Main() {
  return (
    <main id="main">
      <Bio />
      <MainList />
      <Educational />
    </main>
  );
}
