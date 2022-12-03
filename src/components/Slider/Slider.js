import Slider from "react-slick";

import ArrowLeftDark from "./ArrowLeftDark.png";
import ArrowRightDark from "./ArrowRightDark.png";
import ArrowLeftLight from "./ArrowLeftLight.png";
import ArrowRightLight from "./ArrowRightLight.png";
import { useContext } from "react";
import { ThemeContext } from "../../Theme";
import "./Slider.css";
import cn from "classnames";

function SliderCarousel({ children }) {
  const { theme } = useContext(ThemeContext);
  function PrevArrow({ className, style, onClick }) {
    return (
      <div onClick={onClick} className={cn("arrow", className)}>
        {theme === "dark-theme" ? (
          <img src={ArrowLeftDark} alt="arrow" />
        ) : (
          <img src={ArrowLeftLight} alt="arrow" />
        )}
      </div>
    );
  }
  function NextArrow({ className, style, onClick }) {
    return (
      <div onClick={onClick} className={cn("arrow", className)}>
        {theme === "dark-theme" ? (
          <img src={ArrowRightDark} alt="arrow" />
        ) : (
          <img src={ArrowRightLight} alt="arrow" />
        )}
      </div>
    );
  }
  const config = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider className={"slider"} {...config}>
      {children}
    </Slider>
  );
}

export default SliderCarousel;
