import React from "react";
import Navigation from "./components/navigation/Navigation";
import Hero from "./components/hero/Hero";
import SelectedWork from "./components/work/SelectedWork";
import Capabilities from "./components/capabilities/Capabilities";
import Career from "./components/career/Career";
import EngineeringProfile from "./components/profile/EngineeringProfile";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => (
  <>
    <a className="skip-link" href="#main-content">
      Skip to content
    </a>
    <Navigation />
    <main id="main-content">
      <Hero />
      <SelectedWork />
      <Capabilities />
      <Career />
      <EngineeringProfile />
      <Contact />
    </main>
    <Footer />
  </>
);

export default App;
