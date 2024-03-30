import React from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";

const categoryData = [
  {
    id: 1,
    name: "sunglass",
    image:
      "https://portotheme.com/html/porto_ecommerce/assets/images/demoes/demo3/categories/category-1.jpg",
  },
  {
    id: 2,
    name: "Bags",
    image:
      "https://portotheme.com/html/porto_ecommerce/assets/images/demoes/demo3/categories/category-2.jpg",
  },
  {
    id: 3,
    name: "Electronics",
    image:
      "https://portotheme.com/html/porto_ecommerce/assets/images/demoes/demo3/categories/category-2.jpg",
  },
  {
    id: 4,
    name: "Watches",
    image:
      "https://portotheme.com/html/porto_ecommerce/assets/images/demoes/demo3/categories/category-4.jpg",
  },
  {
    id: 5,
    name: "Watches",
    image:
      "https://portotheme.com/html/porto_ecommerce/assets/images/demoes/demo3/categories/category-4.jpg",
  },
  {
    id: 5,
    name: "Headphone",
    image:
      "https://portotheme.com/html/porto_ecommerce/assets/images/demoes/demo3/categories/category-6.jpg",
  },
];

const CategoryCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
    >
      {categoryData.map((category) => (
        <div key={category.id} className="category">
          <Link to={`/products/${category.name}`}>
            <img src={category.image} alt={category.name} />
            <h2>{category.name}</h2>
          </Link>
        </div>
      ))}
    </Carousel>
  );
};

export default CategoryCarousel;
