import { useRef, useEffect, useState } from "react";

const Ticker = (props) => {
  const height = props.height || "auto";
  const paddingY = props.paddingY || "10px";
  const backgroundColor = props.backgroundColor || "grey";
  const speed = props.speed || 10;
  const scale = props.scale || 1;
  const imageUrl = props.imageUrl || "";
  const imageWidth = props.imageWidth || 1500;

  const slidingBackground = useRef(null);
  const slidingBackgroundContainer = useRef(null);
  const tickerContent = useRef(null);

  const computedSpeed = _computeSpeed(speed);
  const styleObj = {
    height,
    backgroundColor,
    scale,
  }

  useEffect(() => {
    slidingBackground.current.style.animation = `slide ${computedSpeed}s linear infinite`;
    tickerContent.current.style.paddingTop = paddingY;
    tickerContent.current.style.paddingBottom = paddingY;
    // tickerContent.current.style.transform = `scale(${scale})`;
    // slidingBackgroundContainer.current.style.transform = `scale(${scale})`;

    slidingBackground.current.style.background = `url("${imageUrl}") repeat-x`;
  }, [])

  return (
    <div className="ticker-container" style={styleObj}>
      <div ref={tickerContent} className="ticker-content">
        <div ref={slidingBackgroundContainer} className="sliding-background-container">
          <div ref={slidingBackground} className="sliding-background">
            {/* <img src={imageUrl} alt="" style={{visibility: "hidden"}}/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const _computeSpeed = (speed) => {
  if (typeof(speed) !== "number") {
    console.warn(`Invalid speed. Has to be numeric value. Got: ${speed} (type: ${typeof(speed)}). Speed set to default value of 10.`);
    return _computeSpeed(10);
  }
  if (speed > 20) {
    console.warn(`Invalid speed. Cannot exceed 19. Got: ${speed}. Rounded down to 19.`);
    return _computeSpeed(19);
  }
  if (speed < 0) {
    console.warn(`Invalid speed. Cannot be negative. Got: ${speed}. Rounded up to 0.`);
    return _computeSpeed(0);
  }
  if (speed === 0) {
    return 0;
  }
  if (speed === 20) {
    return 1;
  }
  return 20 - speed;
}

export default Ticker;
