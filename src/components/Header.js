import React from "react";
import { useLocation } from "react-router-dom";
import "../blocks/Header.css";
import aroundImage from "../images/header_title.jpg";

function Header() {
  const location = useLocation();

  const getButtonText = () => {
    switch (location.pathname) {
      case "/signup":
        return "Faça o Login";
      case "/signin":
        return "Entrar";
      case "/main":
        return "email Sair";
    }
  };

  return (
    <header className="header">
      <div className="header__container">
        <img
          src={aroundImage}
          alt="header title image"
          className="header__image"
        />
        <p className="header__enter-button">{getButtonText()}</p>
      </div>
      <div className="header__line"></div>
    </header>
  );
}

export default Header;
