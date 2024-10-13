import TitleAnimation from "./TitleAnimation.jsx";
import "./header-style.css";
const Header = () => {
  return (
    <header>
      <div className="circulo-1">circulo</div>

      <div className="text-wrapper">
        <TitleAnimation text1="FullStack Developer" text2="User Interface Designer" text3="Visual Designer" />
        <TitleAnimation text1="FullStack Developer" text2="User Interface Designer" text3="Visual Designer" />
      </div>
      <div className="rrss-logo-container">aca van las redes sociales</div>
      <p>
        <small>@diseño y codigo por Rodd Solis</small>
      </p>
    </header>
  );
};

export default Header;
