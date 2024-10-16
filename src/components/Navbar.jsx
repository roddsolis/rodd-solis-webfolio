import "./navbar-style.css";
import Button from "./Button.jsx";
import StatusChip from './StatusChip.jsx'

const Navbar = () => {
  return (
    <nav>
      <div className="logoContainer">Rodd Solis</div>
      <StatusChip statusColor="" statusText="Available for work"/>
      <ul>
        <li>Sobre mi</li>
        <li>Experiencia</li>
        <li>Habilidades</li>
        <li>Proyectos</li>
        <li>Contacto</li>
      </ul>
      <div className="ctaContainer">
        <Button buttonText="Hablemos" />
        <Button buttonText="Mi CV" />
      </div>
    </nav>
  );
};

export default Navbar;
