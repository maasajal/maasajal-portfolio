import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

const App = () => {
  return (
    <div className="font-Lato">
      <Navbar />
      <Banner />
      <main className="container mx-auto px-3 md:px-0">
        <About />
        <Skills />
        <Education />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;
