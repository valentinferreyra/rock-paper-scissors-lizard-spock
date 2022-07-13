import React from "react";
import { Link } from "react-router-dom";

const SheldonRulesVideo = () => {
  return (
    <div className="home-container">
      <iframe
        width="1000"
        height="615"
        src="https://www.youtube.com/embed/Y6GPW1vUaqU"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      <div className="home-container__buttons">
        <Link to="/">Volver a inicio</Link>
      </div>
    </div>
  );
};

export default SheldonRulesVideo;
