import React, { useState } from "react";

const ItemComponent = (props) => {
  const { data, handlerUpdate } = props;
  const { title, img, description, price, stock } = data;
  const [_stock, _setStock] = useState(stock || 0);

  const handlerActionAdd = () => {
    if (_stock > 0) {
      _setStock(_stock - 1);
      handlerUpdate();
    } else {
      alert("Tu estas loco o que ?");
    }
  };

  return (
    <div className="card m-5">
      <div className="card-body">
        <p> {title}</p>
        <p>{description}</p>
        <img width={400} height={300} src={img} alt="" />
        <p>$ {price}</p>
        <p>{_stock}</p>
        <button className="btn btn-primary" onClick={handlerActionAdd}>
          Agregar
        </button>
      </div>
    </div>
  );
};

//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBdBjlkgDE0cWXmnbJvWWkbr19UHd4FRvuUw&usqp=CAU

export default ItemComponent;
