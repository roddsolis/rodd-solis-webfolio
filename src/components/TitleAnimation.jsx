import "./title-animation.css";

const TitleAnimation = ({ text1, text2, text3 }) => {
  return (
    <>
      <div className="text-animation">
        {text1}-{text2}-{text3}
      </div>
    </>
  );
};

export default TitleAnimation;
