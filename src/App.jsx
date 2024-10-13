// import React from "react";
import Button from "./components/Button.jsx";
import TitleAnimation from "./components/TitleAnimation.jsx";

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
      <header>
        <div className="text-wrapper">
          <TitleAnimation text1="FullStack Developer" text2="User Interface Designer" text3="Visual Designer" />
          <TitleAnimation text1="FullStack Developer" text2="User Interface Designer" text3="Visual Designer" />
        </div>
        <div className="rrss-logo-container">aca van las redes sociales</div>
        <p>
          <small>@diseño y codigo por Rodd Solis</small>
        </p>
      </header>
      <footer>footer</footer>
    </>
  );
};

export default App;
