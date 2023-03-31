import React from "react";
import ListOptionNavBarComponent from "./ListOptionNavBarComponent";

/*
  @params props type Array
*/
const NavBarComponent = (props) => {
  //This line are items
  const nameOptions = ["Camisas","Pantalones","Blusas","Abrigos","CropTop","Faldas"];
  
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">

        <span className="navbar-brand" href="#">
          <img width={100} height={100} src="https://thumbs.dreamstime.com/z/concepto-de-logotipo-tienda-en-l%C3%ADnea-simple-vector-online-210254160.jpg" alt="" srcSet="" />
        </span>
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
          <ListOptionNavBarComponent nameOption={nameOptions}></ListOptionNavBarComponent>
        </div>
      </div>
    </nav>
  );
};

export default NavBarComponent;
