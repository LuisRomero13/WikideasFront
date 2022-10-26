import React from "react";
import chevronDown from "../../assets/chevron-down.svg";
import searchIcon from "../../assets/search-icon.svg";
import "./styles/Header.css";
export interface HeaderInterface {}

const Header: React.FC<HeaderInterface> = () => {
  const handleExploreClick = () => {
    window.scrollTo(0, window.innerHeight);
  };

  return (
    <div className="header">
      <div className="header__texts">
        <h1 className="header__title">Wiki Ia Software</h1>
        <p className="header__description">
          Sumérjete en busca del conocimiento, la curiosidad y el debate por los
          temas de tú interés.
        </p>
        <div className="header__search">
          <input
            type="text"
            placeholder="Busca un tema de tu agrado"
            className="header__search__input"
          />
          <img
            src={searchIcon}
            alt="search-icon"
            className="header__search__icon"
          />
        </div>
      </div>
      <div className="header__explore">
        <div className="header__explore__button" onClick={handleExploreClick}>
          <img
            src={chevronDown}
            className="header__explore__icon"
            alt="chevron-down-icon"
          />
          <h2 className="header__explore__title">Explora...</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
