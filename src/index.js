import React from "react";
import ReactDOM from "react-dom/client";
import "./tailwind.css";
// import App from "./App";
import StarRating from "./StarRating";
import PropTypes from "prop-types";

StarRating.PropTypes = {
  maxRating: PropTypes.number,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating maxRating={5} />
  </React.StrictMode>,
);
