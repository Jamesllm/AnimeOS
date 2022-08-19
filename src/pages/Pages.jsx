import { getLocalData } from "../helpers/DataLocalStorage";
import "./notFound.scss";
import { Link } from "react-router-dom";
import { OsContainer, OsButton } from "../components/Ostrap/Ostrap";
import MovieGrid from "../components/movie-grid/MovieGrid";

const data = getLocalData();

const searchByCategory = (props) => {
  const find = data.filter((i) => i.category === props);
  return find;
};

const searchByLanguage = (props) => {
  const find = data.filter((i) => i.language === props);
  return find;
};

export const Animes = () => {
  const animes = searchByCategory("serie");
  return (
    <OsContainer className="my-8">
      <MovieGrid category={animes} />
    </OsContainer>
  );
};

export const Movies = () => {
  const movies = searchByCategory("movie");
  return (
    <OsContainer className="my-8">
      <MovieGrid category={movies} />
    </OsContainer>
  );
};

export const SubSpanishs = () => {
  const sub_Spanishs = searchByLanguage("sub-español");
  return (
    <OsContainer className="my-8">
      <MovieGrid category={sub_Spanishs} />
    </OsContainer>
  );
};

export const NotFound = () => {
  const background =
    "https://www.themoviedb.org/t/p/original/6dMJ9aI8QAcevWeXkkqPhhZUW6u.jpg";
  return (
    <div className="notfound" style={{ backgroundImage: `url(${background})` }}>
      <div className="notfound__text">Pagina no encontrada !</div>
      <Link to="/">
        <OsButton className="notfound__btn">Ir al inicio</OsButton>
      </Link>
    </div>
  );
};
