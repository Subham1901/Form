import React, { useEffect, useState } from "react";

const CarouselComponent = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    let timeoutFn = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 2000);
    return () => {
      clearInterval(timeoutFn);
    };
  });
  return (
    <div className="slider-style">
      <img
        src={images[currentIndex]}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "10px",
          backgroundSize: "cover",
        }}
        className="slider-image"
      />
      {currentIndex >= 1 && (
        <div
          onClick={() => setCurrentIndex(currentIndex - 1)}
          className="leftarrow"
        >
          {"<"}
        </div>
      )}
      {currentIndex < images.length - 1 && (
        <div
          onClick={() =>
            setCurrentIndex(
              currentIndex === images.length - 1 ? 0 : currentIndex + 1
            )
          }
          className="rightarrow"
        >
          {">"}
        </div>
      )}
    </div>
  );
};
CarouselComponent;
export default CarouselComponent;
