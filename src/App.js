import logo from './logo.svg';
import React from "react";
import "./App.css";
import Introduction from "./components/Introduction/Introduction";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import AboutMe from "./components/AboutMe/AboutMe";

class App extends React.Component {
  state = {
    activeSection: "Introduction",
  };

  handleNavClick = (section) => {
    this.setState({
      activeSection: section,
    });
  };

  render() {
    const { activeSection } = this.state;
    return (
      <div className="App">
        <div className="nav-bar">
          <div
            className={
              activeSection === "Introduction" ? "active-nav-item" : ""
            }
            onClick={() => this.handleNavClick("Introduction")}
          >
            Introduction
          </div>
          <div
            className={activeSection === "Skills" ? "active-nav-item" : ""}
            onClick={() => this.handleNavClick("Skills")}
          >
            Skills
          </div>
          <div
            className={activeSection === "Experience" ? "active-nav-item" : ""}
            onClick={() => this.handleNavClick("Experience")}
          >
            Experience
          </div>
          <div
            className={activeSection === "Education" ? "active-nav-item" : ""}
            onClick={() => this.handleNavClick("Education")}
          >
            Education
          </div>
          <div
            className={activeSection === "AboutMe" ? "active-nav-item" : ""}
            onClick={() => this.handleNavClick("AboutMe")}
          >
            About Me
          </div>
        </div>
        <div className="content-container">
          {activeSection === "Introduction" && <Introduction />}
          {activeSection === "Skills" && <Skills />}
          {activeSection === "Experience" && <Experience />}
          {activeSection === "Education" && <Education />}
          {activeSection === "AboutMe" && <AboutMe />}
        </div>
      </div>
    );
  }
}

export default App;
