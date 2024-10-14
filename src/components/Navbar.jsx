import "./navbar-style.css";
import Button from "./Button.jsx";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
