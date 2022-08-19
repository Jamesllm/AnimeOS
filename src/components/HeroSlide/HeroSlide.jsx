import "./hero-slide.scss";
/////
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

/////
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OsButton } from "../Ostrap/Ostrap";

export default function HeroSlide({ items }) {
  const imgUrl = "https://www.themoviedb.org/t/p/original/";
  SwiperCore.use([Autoplay]);

  return (
    <div className="hero-slide">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 6000 }}
      >
        {items.map((item, a) => (
          <SwiperSlide key={a}>
            {({ isActive }) => (
              <div
                className={`hero-slide__item ${isActive ? "active" : ""}`}
                style={{
                  backgroundImage: `url(${imgUrl + item.background})`,
                }}
              >
                <div className="hero-slide__item__content container">
                  <div className="hero-slide__item__content__info">
                    <h2 className="title">{item.title}</h2>

                    <div className="btns">
                      <Link to={`/${item.category}/${item.id}`}>
                        <OsButton>
                          <FontAwesomeIcon icon="fa-solid fa-play" /> Ver Ahora
                        </OsButton>
                      </Link>
                    </div>
                  </div>
                  <div className="hero-slide__item__content__poster">
                    {item.poster ? (
                      <img src={imgUrl + item.poster} alt={item.title} />
                    ) : (
                      <div className="noImage"></div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
