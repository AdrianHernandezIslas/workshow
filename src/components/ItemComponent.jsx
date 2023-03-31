import React, { useState } from "react";

const ItemComponent = (props) => {
  const { data, handlerUpdate } = props;
  const { title, descripcion, price } = data;
  const [stock, setStock] = useState(10);

  const handlerActionAdd = () => {
    if (stock > 0) {
      setStock(stock - 1);
      handlerUpdate();
    } else {
      alert("Tu estas loco o que ?");
    }
  };

  return (
    <div className="card m-5">
      <div className="card-body">
        <p> {title}</p>
        <p>{descripcion}</p>
        <p>$ {price}</p>
        <p>{stock}</p>
        <button className="btn btn-primary" onClick={handlerActionAdd}>Agregar</button>
      </div>
    </div>
  );
};

//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBdBjlkgDE0cWXmnbJvWWkbr19UHd4FRvuUw&usqp=CAU

export default ItemComponent;
