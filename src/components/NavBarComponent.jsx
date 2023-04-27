import React, {  useContext } from "react";
import ListOptionNavBarComponent from "./ListOptionNavBarComponent";
import { NavLink } from "react-router-dom";
import useFetch from "../utils/useFetch";
import GeneralContext from "../context/GeneralContext";
const BASE_URL = "https://fakestoreapi.com/products/categories";
/*
  @params props type Array
*/
const NavBarComponent = (props) => {
  const { car } = useContext(GeneralContext);
  const [data] = useFetch(BASE_URL);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img
            width={100}
            height={100}
            src="https://thumbs.dreamstime.com/z/concepto-de-logotipo-tienda-en-l%C3%ADnea-simple-vector-online-210254160.jpg"
            alt=""
            srcSet=""
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ListOptionNavBarComponent nameOption={data}></ListOptionNavBarComponent>
        </div>
        <NavLink to="/products/car">
          <span>Agregados: </span>
          {car.length}
        </NavLink>
      </div>
    </nav>
  );
};

export default (NavBarComponent);
