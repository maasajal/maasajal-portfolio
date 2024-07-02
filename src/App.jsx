import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";

const App = () => {
  return (
    <div className="font-Lato">
      <Navbar />
      <Banner />
      <main className="container mx-auto"></main>
      <Footer />
    </div>
  );
};

export default App;
