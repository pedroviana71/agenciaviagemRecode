import React from "react";
import { Link, Outlet } from "react-router-dom";
import style from "../CSS/header.module.css";

const Header = () => {
  return (
    <div>
      <div className={style.outer_header}>
        <div className={style.header_title}>
          <Link className={style.title} to="/">
            Viagem Legal
          </Link>
        </div>
        <div className="header_links">
          <Link className={style.link} to="/">
            Home
          </Link>
          <Link className={style.link} to="destinos">
            Destinos
          </Link>
          <Link className={style.link} to="promocoes">
            Promoções
          </Link>
          <Link className={style.link} to="contato">
            Contato
          </Link>
        </div>
      </div>
      <Outlet />
      <div>Todos os direitos reservados</div>
    </div>
  );
};

export default Header;
