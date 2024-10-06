// import React from "react";
import Button from "./components/Button.jsx";

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
      <header>acá va la cabecera</header>
      <footer>footer</footer>
    </>
  );
};

export default App;
