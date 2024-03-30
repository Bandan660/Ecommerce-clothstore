import React, { Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";
import CategoryCarousel from "../../Components/CategoryCarousel";

const Home = () => {
  return (
    <Fragment>
      <section className="hero-section">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://portotheme.com/html/porto_ecommerce/assets/images/demoes/demo3/slider/slide1.jpg"
              alt="First slide"
            />
            <Carousel.Caption className="carousel-content">
              <h2 className="hero-title">Summer Fashion Sale</h2>
              <h3 className="text-uppercase mb-0">Get up to 30% off</h3>
              <h4 className="m-b-4">on Jackets</h4>
              <button>Shop Now</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://portotheme.com/html/porto_ecommerce/assets/images/demoes/demo3/slider/slide2.jpg"
              alt="Second slide"
            />
            <Carousel.Caption className="carousel-content">
              <h2 className="hero-title">Summer Fashion Sale</h2>
              <h3 className="text-uppercase mb-0">Get up to 50% off</h3>
              <h4 className="m-b-4">on Kurti</h4>
              <button>Shop Now</button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="category-slider">
        <h2 className="section-title ls-n-15 text-center pt-2 m-b-4">
          Shop By Category
        </h2>

        {/* <div className="p-5">
          <CategoryCarousel />
        </div> */}
      </section>
    </Fragment>
  );
};

export default Home;
