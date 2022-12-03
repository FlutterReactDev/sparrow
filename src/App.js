import { useContext } from "react";
import { ThemeContext } from "./Theme";
import cn from "classnames";

import styles from "./App.module.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";

import SectionEvent from "./components/SectionEvent/SectionEvent";
import SectionCenter from "./components/SectionCenter/SectionCenter";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SectionInfrastructure from "./components/SectionInfrastructure/SectionInfrastructure";
import SectionContact from "./components/SectionContact/SectionContact";
import SectionVK from "./components/SectionVK/SectionVK";
import Footer from "./components/Footer/Footer";
function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={cn({
        [styles.DarkTheme]: theme === "dark-theme",
        [styles.LightTheme]: theme === "light-theme",
      })}
    >
      <Header />
      <Hero />
      <Main>
        <SectionEvent />
        {/* <SectionCenter /> */}
        {/* <SectionInfrastructure /> */}
        <SectionContact />
        <SectionVK />
        {/* <Footer /> */}
      </Main>
    </div>
  );
}

export default App;
