import React from "react";
import OptionNavBarComponent from "./OptionNavBarComponent";

const ListOptionNavBarComponent = (props) => {
  const { nameOption } = props;

  return (
    <div className="navbar-nav">
      {nameOption.map((item, index) => {
        //const {name:nameItem,link} = item;
        return <OptionNavBarComponent key={index} titleOption={item} />;
      })}
    </div>
  );
};

export default ListOptionNavBarComponent;
