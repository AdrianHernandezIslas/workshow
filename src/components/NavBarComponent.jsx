import React from "react";
import ListOptionNavBarComponent from "./ListOptionNavBarComponent";
import { NavLink } from "react-router-dom";
import useFetch from "../utils/useFetch";
const BASE_URL = "https://fakestoreapi.com/products/categories";
/*
  @params props type Array
*/
const NavBarComponent = (props) => {
  //This line are items

  const [data] = useFetch(BASE_URL);
  /*const nameOptions = [
    { name: "Camisas", link: "/products/category/camisas" },
    { name: "Pantalones", link: "/products/category/patalones" },
    { name: "Blusas", link: "/products/category/blusas" },
    { name: "Abrigos", link: "/products/category/abrigos" },
    { name: "CropTop", link: "/products/category/crop-top" },
    { name: "Faldas", link: "/products/category/faldas" }
  ];*/

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
      </div>
    </nav>
  );
};

export default NavBarComponent;
