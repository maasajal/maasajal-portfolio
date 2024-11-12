import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Experiences from "./components/Experiences/Experiences";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import ParticleBG from "./components/particles/ParticleBG";

const App = () => {
  return (
    <div className="font-Lato">
      <ParticleBG />
      <Navbar />
      <Banner />
      <main className="container mx-auto px-3 md:px-0">
        <About />
        <Skills />
        <Projects />
        <Experiences />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
