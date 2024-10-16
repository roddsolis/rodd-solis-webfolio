// import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import "../build/web/variables.css";
import "./style.css";
import NoiseBackground from "./components/NoiseBackground.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <footer>footer</footer>
      <NoiseBackground />
    </>
  );
};

export default App;
