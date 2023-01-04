import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HotelDetails from "./components/HotelDetails";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HotelDetails />
      <div className="divider px-[10rem]"></div>
      <Footer />
    </>
  );
}

export default App;
