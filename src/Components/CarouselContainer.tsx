import React from "react";
import {Carousel, CarouselProps} from "react-bootstrap";
import image1 from "../travel-images/anders-jilden-cYrMQA7a3Wc-unsplash.jpg";
import image2 from "../travel-images/atikh-bana-Ycds6emp7BA-unsplash.jpg";
import image3 from "../travel-images/diego-jimenez-A-NVHPka9Rk-unsplash.jpg";
import image4 from "../travel-images/neom-STV2s3FYw7Y-unsplash.jpg";

const CarouselContainer: React.FC = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image4}
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="Image Three"
          />
          <Carousel.Caption>
            <h3>Label for third slide</h3>
            <p>Sample Text for Image Three</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            alt="Image Three"
          />
          <Carousel.Caption>
            <h3>Label for third slide</h3>
            <p>Sample Text for Image Three</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselContainer;
