import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Promoting Integrity and Transparency</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia qui
          vitae saepe iure ut. Dolorum iusto labore fugiat eligendi vero soluta
          aperiam atque esse ipsum maxime earum tempora, voluptatem ab.
        </p>
        <button className="btn">
          <Link to="/register" className="nav__link-button">
            Go to E-Portal <i className="bx bx-log-in"></i>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
