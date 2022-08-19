import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { getLocalData } from "../helpers/DataLocalStorage";
import { OsModal } from "../components/Ostrap/Ostrap";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import LandingPage from "./LandingPage";
import { Movies, Animes, SubSpanishs, NotFound } from "./Pages";
import Details from "./details/Details";

export default function Rutas() {
  const img =
    "https://lh3.googleusercontent.com/lHuPjKRGXg-wS_IR2nnokWEkua-qfiUN6J2z35n4AJXxjvFS850tsKs17Bc1Jf1R0QzNcvl14lcNLAmeRddMED8Vnw=w640-h400-e365-rj-sc0x00ffffff";
  const link =
    "https://chrome.google.com/webstore/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg?hl=es";

  const data = getLocalData();

  return (
    <div>
      <Router>
        <OsModal
          backgroundModal="white"
          openIcon="fa-solid fa-question"
          closeIcon="fa-solid fa-xmark"
          displayModal="none"
          heightModal="24em"
          isActive={false}
        >
          <div>
            <img className="modal_img" src={img} alt="" />
            <p>
              Para una mejor experiencia le recomnedamos instalar la siguiente
              extension a su navegador
            </p>
            <a href={link}>Descargar aqui!</a>
          </div>
        </OsModal>
        <Header data={data} />

        <Routes>
          <Route exact path="/" element={<LandingPage />} />

          <Route path="/series" element={<Animes />} />
          <Route path="/series?language=sub-spanish" element={<SubSpanishs />} />
          <Route path="/movies" element={<Movies />} />

          <Route path="/serie/:Id/" element={<Details />} />
          <Route path="/movie/:Id/" element={<Details />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
