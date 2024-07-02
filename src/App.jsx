import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";

const App = () => {
  return (
    <div className="font-Lato">
      <Navbar />
      <main className="h-screen">
        <h1 className="font-PlayFair text-5xl text-center py-20">
          MaaSajal Portfolio
        </h1>
      </main>
      <Footer />
    </div>
  );
};

export default App;
