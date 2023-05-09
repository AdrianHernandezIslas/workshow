import React, { useContext, useState } from "react";
import GeneralContext from "../context/GeneralContext";
import ItemButtonsComponent from "./ItemButtonsComponent";

const ItemComponent = (props) => {
  const { data, showInfo, showDelete } = props;
  const { id: idProduct, title, image, description, price } = data;
  const { removeToCar } = useContext(GeneralContext);

  const showShortValue = (value = "", lengthMax = 45) => {
    return value.length > lengthMax ? value.substring(0, lengthMax).concat(" ...") : value;
  };

  const removeThisItem = () => {
    removeToCar(data);
  };

  return (
    <div className="card shadow-sm">
      <h5 className="card-header ">
        {showShortValue(title, 25)}
        <ItemButtonsComponent 
        showInfo={showInfo} 
        showDelete={showDelete} 
        idProduct={idProduct}
        removeThisItem={removeThisItem} />
      </h5>
      <img className="card-img-top" width={400} height={400} src={image} alt="" />
      <div className="card-body">
        <p className="text-muted">{showShortValue(description)}</p>
        <p className="h6">Precion de venta - $ {price}</p>
      </div>
    </div>
  );
};

export default ItemComponent;
