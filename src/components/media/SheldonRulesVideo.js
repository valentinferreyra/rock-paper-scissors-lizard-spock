import React from "react";
import { Link } from "react-router-dom";

const SheldonRulesVideo = () => {
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Y6GPW1vUaqU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <Link to="/">Volver</Link>
    </div>
  );
};

export default SheldonRulesVideo;
