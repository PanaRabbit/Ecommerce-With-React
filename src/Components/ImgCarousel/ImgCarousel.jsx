import React, { useState } from "react";
import "../ImgCarousel/ImgCarousel.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Carousel = ({ imagesArray }) => {
  const images = imagesArray;

  const [indexImage, setIndexImage] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const selectImage = (index, arrayImages, next = true) => {
    const condition = next ? indexImage < images.length - 1 : indexImage > 0;
    const nextIndex = next
      ? condition
        ? indexImage + 1
        : 0
      : condition
      ? indexImage - 1
      : images.length - 1;
    setSelectedImage(images[nextIndex]);
    setIndexImage(nextIndex);
  };

  const previousImage = () => {
    selectImage(indexImage, images, false);
  };

  const nextImage = () => {
    selectImage(indexImage, images);
  };

  return (
    <div className="row align-items-center text-centert">
      <div className="col">
        <SlArrowLeft
          size={"100%"}
          onClick={() => previousImage()}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="carousel col-10">
        <img src={`https:${selectedImage.split("?")[0]}`} alt="" />
      </div>
      <div className="col">
        <SlArrowRight
          size={"100%"}
          onClick={() => nextImage()}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default Carousel;
