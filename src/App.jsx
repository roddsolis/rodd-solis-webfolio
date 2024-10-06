import React from "react";

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
          <button>hablemos</button>
        </div>
      </nav>
      <header>acá ha la cabecera</header>
      <footer>footer</footer>
    </>
  );
};

export default App;
