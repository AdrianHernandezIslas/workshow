import React, { Fragment, useContext } from "react";
import GeneralContext from "../context/GeneralContext";
import ItemComponent from "../components/ItemComponent";

const DetailCarView = () => {
  const { car } = useContext(GeneralContext);
  return (
    <Fragment>
      <div className="container">
        {car.map((item,index) => (
          <ItemComponent key={index} data={item} />
        ))}
      </div>
    </Fragment>
  );
};

export default DetailCarView;
