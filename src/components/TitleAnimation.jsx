import "./title-animation.css";

const TitleAnimation = ({ text1, text2, text3 }) => {
  return (
    <>
      <div className="text-animation">
        <p>{text1}</p>
        <p className="guion-1">-</p>
        <p>{text2}</p>
        <p className="guion-2">-</p>
        <p>{text3}</p>
      </div>
    </>
  );
};

export default TitleAnimation;
