import React from "react";

import "./movie-card.scss";
import { Link } from "react-router-dom";
import { OsButton } from "../Ostrap/Ostrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieCard = (props) => {
  const imgUrl = "https://www.themoviedb.org/t/p/original/";
  const item = props.item;

  return (
    <Link to={`/${item.category}/${item.id}`}>
      <div
        className="movie-card"
        style={{ backgroundImage: `url(${imgUrl + item.poster})` }}
      >
        <div className="episodes">
          <span className="pg-c">{item.episodes.length}</span> - Episodios
        </div>
        <OsButton>
          <FontAwesomeIcon icon="fa-solid fa-play" />
        </OsButton>
      </div>
      <h4>{item.title} <span className="pg-c">{item.season}</span></h4>
    </Link>
  );
};

export default MovieCard;
