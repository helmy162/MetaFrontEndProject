import "./App.css";
import Navbar from "./components/Navbar";
import Routing from "./components/Routing";
import Footer from "./components/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function App() {
  return (
    <>
      <Navbar />
      <Routing />
      <Footer />
    </>
  );
}

export default App;
