import React, { Fragment, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { FaStar } from "react-icons/fa";

const ProductDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <Fragment>
      <section className="product-details">
        <div className="header-top">
          <nav aria-label="breadcrumb" className="breadcrumb-nav">
            <div className="container">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Women</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Shorts
                </li>
              </ol>
            </div>
          </nav>
        </div>
        <div className="container p-5">
          <div className="row justify-content-center">
            <div className="col-10 row">
              <div className="col-md-6">
                <Swiper
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                >
                  <SwiperSlide>
                    <img src="https://www.iconicindia.com/cdn/shop/files/8907361671530_2_1000x.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://www.iconicindia.com/cdn/shop/files/8907361671530_1_1000x.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://www.iconicindia.com/cdn/shop/files/8907361671530_3_1000x.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://www.iconicindia.com/cdn/shop/files/8907361671530_4_1000x.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://www.iconicindia.com/cdn/shop/files/8907361671530_5_1000x.jpg" />
                  </SwiperSlide>
                </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src="https://www.iconicindia.com/cdn/shop/files/8907361671530_2_1000x.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://www.iconicindia.com/cdn/shop/files/8907361671530_1_1000x.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://www.iconicindia.com/cdn/shop/files/8907361671530_3_1000x.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://www.iconicindia.com/cdn/shop/files/8907361671530_4_1000x.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://www.iconicindia.com/cdn/shop/files/8907361671530_5_1000x.jpg" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="col-md-6 product-info">
                <h1>Women Shorts</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
                  sint reiciendis, iusto accusantium praesentium soluta
                  asperiores cum fugiat illo! Ducimus.
                </p>
                <p className="rating">
                  4.1 Rating <FaStar />
                </p>
                <p className="price">
                  <span>₹ 2000</span>
                </p>
                <p>
                  <span>(MRP incl. of all taxes)</span>
                </p>
                <hr />
                <p className="size-title">SELECT SIZES :</p>
                <div className="size-value">
                  <button>S</button>
                  <button>M</button>
                  <button>L</button>
                  <button>XL</button>
                </div>
                <hr />
                <p className="size-title">SELECT COLOR :</p>
                <div className="color">
                  <button></button>
                  <button></button>
                  <button></button>
                  <button></button>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ProductDetails;
