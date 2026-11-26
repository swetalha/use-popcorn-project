import ReactDOM from "react-dom/client";
import "./tailwind.css";
import App from "./App";
import "./index.css";
import StarRating from "./StarRating";
import PropTypes from "prop-types";

StarRating.PropTypes = {
  maxRating: PropTypes.number,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
