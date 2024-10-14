import TitleAnimation from "./TitleAnimation.jsx";
import "./header-style.css";
import RedesSociales from "./RedesSociales.jsx";
const Header = () => {
  return (
    <header>
      <div className="text-wrapper">
        <TitleAnimation text1="FullStack Developer" text2="User Interface Designer" text3="Visual Designer" />
        <TitleAnimation text1="FullStack Developer" text2="User Interface Designer" text3="Visual Designer" />
      </div>
      <div className="rrss-logo-container">
        <RedesSociales />
      </div>
      <div className="credits">
        <p>
          <small>@diseño y codigo por Rodd Solis</small>
        </p>
      </div>
    </header>
  );
};

export default Header;
