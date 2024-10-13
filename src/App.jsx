// import React from "react";
import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";

const App = () => {
  return (
    <>
      <nav>
        <div className="logoContainer">logo</div>
        <div className="statusContainer">disponible</div>
        <ul>
          <li>Sobre mi</li>
          <li>Experiencia</li>
          <li>Habilidades</li>
          <li>Proyectos</li>
          <li>Contacto</li>
        </ul>
        <div className="ctaContainer">
          <Button buttonText="¡Hablemos!" />
        </div>
      </nav>
      <Header />
      <footer>footer</footer>
    </>
  );
};

export default App;
