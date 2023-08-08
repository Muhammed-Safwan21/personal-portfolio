import React, { createContext, useState } from "react";
import ContactPage from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import HeaderComponent from "./Components/Header/HeaderComponent";
import ScrollToTop from "./Components/Scroll/Scroll";
import "./App.css";

export const ContextValue = createContext();
function App() {
  const [theme, setTheme] = useState(false);
  const changeTheme = () => {
    setTheme(!theme);
  };
  return (
    <ContextValue.Provider value={{ theme, changeTheme }}>
      <div className={theme === false ? "app-dark" : "app-light"}>
        <HeaderComponent />
        <Home />
        <Skills />
        <Projects />
        <ContactPage />
        <ScrollToTop />
        <Footer />
      </div>
    </ContextValue.Provider>
  );
}

export default App;
