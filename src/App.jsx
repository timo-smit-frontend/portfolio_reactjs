import { useRef } from "react";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import MainList from "./components/MainList/MainList.jsx";
import Educational from "./components/Educational/Educational.jsx";

function App() {
  const ref = useRef(null);

  function scrollClickMain() {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Header click={() => scrollClickMain()} />
      <main ref={ref}>
        <MainList />
        <Educational />
      </main>
      <Footer />
    </>
  );
}

export default App;
