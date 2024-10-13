import "./title-animation-style.css";
// import { useRef, useEffect } from "react";
// import gsap from "gsap";

const TitleAnimation = ({ text1, text2, text3 }) => {
  return (
    <div className="text-animated">
      {text1}-{text2}-{text3}-
    </div>
  );
};

export default TitleAnimation;
