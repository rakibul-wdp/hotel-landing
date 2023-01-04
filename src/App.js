import "./App.css";
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
    </>
  );
}

export default App;
