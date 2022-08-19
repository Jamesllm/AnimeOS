/* eslint-disable jsx-a11y/iframe-has-title */
import { getLocalData } from "../helpers/DataLocalStorage";
import HeroSlide from "../components/HeroSlide/HeroSlide";
import { Link } from "react-router-dom";
import { OsContainer, OsOutlineButton } from "../components/Ostrap/Ostrap";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import MovieList from "../components/movie-list/MovieList";

export default function LandingPage() {
  const data = getLocalData();

  //filtrado
  const extremes = data.filter((a) => a.status === "extreme");
  const animes = data.filter((a) => a.id > 1004 && a.id < 1014);
  const movies = data.filter((a) => a.category === "movie");
  const sub_Spanishs = data.filter((a) => a.language === "sub-español");

  //total de items
  const totalAnime = data.filter((a) => a.category === "serie");

  return (
    <div>
      <HeroSlide items={extremes} />
      <OsContainer>
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Animes</h2>
            <Link to="/series">
              <OsOutlineButton className="small">
                Ver mas {totalAnime.length - 9}
              </OsOutlineButton>
            </Link>
          </div>
          <MovieList category={animes}></MovieList>
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Sub-Español</h2>
            <Link to="/series?language=sub-spanish">
              <OsOutlineButton className="small">
                Ver mas {sub_Spanishs.length - 1}
              </OsOutlineButton>
            </Link>
          </div>
          <MovieList category={sub_Spanishs}></MovieList>
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Peliculas</h2>
            <Link to="/movies">
              <OsOutlineButton className="small">
                Ver mas {movies.length - 1}
              </OsOutlineButton>
            </Link>
          </div>
          <MovieList category={movies}></MovieList>
        </div>
      </OsContainer>
    </div>
  );
}
