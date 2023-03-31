import React from "react";

const OptionNavBarComponent = (props) => {
  const { titleOption } = props;
  return <span className="nav-link">{titleOption}</span>;
};

export default OptionNavBarComponent;
