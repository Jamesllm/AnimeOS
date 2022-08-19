/* eslint-disable jsx-a11y/anchor-has-content */
import { useParams } from "react-router-dom";
import { getLocalData } from "../../helpers/DataLocalStorage";
import "./detail.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//data
import { getItem } from "../../data";
import {
  OsBanner,
  OsContainer,
  OsIframe,
} from "../../components/Ostrap/Ostrap";

import { clickVideo } from "./Functions";
import MovieList from "../../components/movie-list/MovieList";

export default function AnimeDetails() {
  const params = useParams();
  const data = getLocalData();

  const imgUrl = "https://www.themoviedb.org/t/p/original/";
  const ytUrl = "https://www.youtube.com/embed/";

  const anime = getItem(parseInt(params.Id));

  const similar = data.filter(
    (a) => a.title.split(" ")[(0, 1)] === anime.title.split(" ")[(0, 1)]
  );

  return (
    <div>
      {anime && (
        <>
          <OsBanner
            style={{ backgroundImage: `url(${imgUrl + anime.background})` }}
          />
          <OsContainer className="mb-3 movie-content">
            <div className="movie-content__poster">
              <div
                className="movie-content__poster__img"
                style={{ backgroundImage: `url(${imgUrl + anime.poster})` }}
              ></div>
            </div>
            <div className="movie-content__info">
              <h2 className="title">{anime.title}</h2>
              <div className="genres">
                <span className="genres__item">{anime.category}</span>
                <span className="genres__item">{anime.season}</span>
                <span className="genres__item">{anime.language}</span>
              </div>
              <p className="overview">{anime.information}</p>
              {/* VIDEO PLAYER */}
              <div>
                <OsIframe
                  src={ytUrl + anime.trailer}
                  title={anime.title}
                  className="video-frame"
                  id="vis"
                />
                <div className="list">
                  <div className="dropdown">
                    <button className="dropdown__btn">
                      <FontAwesomeIcon className="" icon="fa-solid fa-list" />
                    </button>
                    <div className="dropdown-content">
                      <div
                        className="link_src episode_active"
                        onClick={clickVideo}
                      >
                        <a href={anime.trailer} frameBorder="0"></a>
                        <p className="no-selection">Trailer</p>
                      </div>

                      {anime.episodes.length > 3 ? (
                        <EpisodeList
                          episodes={anime.episodes}
                          display="Episodio"
                        />
                      ) : (
                        <EpisodeList
                          episodes={anime.episodes}
                          display="Ver ahora"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* END VIDEO PLAYER */}
            </div>
          </OsContainer>
          <OsContainer className="interes-content  mb-4">
            <h3>Similares: </h3>
            <MovieList category={similar} />
          </OsContainer>
        </>
      )}
    </div>
  );
}
export const EpisodeList = (props) => {
  const lists = props.episodes;
  const display = props.display;

  return (
    <div>
      {lists.map((list) => {
        return (
          <div key={list.id} className="link_src" onClick={clickVideo}>
            <a href={list.src} frameBorder="0"></a>
            <p className="no-selection">
              {display} {list.id}
            </p>
          </div>
        );
      })}
    </div>
  );
};
