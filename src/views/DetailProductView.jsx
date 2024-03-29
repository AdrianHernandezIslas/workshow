import React, { Fragment, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import GeneralContext from "../context/GeneralContext";
import useFirestore from "../utils/useFirestore";
const nameCollection = "items";

const DetailProductView = () => {
  const { idProduct: documentId } = useParams();
  const { addToCar } = useContext(GeneralContext);
  const [data] = useFirestore({ nameCollection, documentId });
  const [amount, setAmount] = useState(1);
  const { title, image, description, price, category } = data;

  const addBtnAction = () => {
    addToCar(data);
    alert("Added!!");
  };

  return (
    <Fragment>
      <div className="row my-5">
        <div className="col-3 offset-md-3">
          <h2 className="text-danger">Oferta por tiempo limitado !!!</h2>
        </div>
        <div className="col-4">
          <h3>
            Categoria: <span className="text-info">{category}</span>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-6 offset-md-3">
          <div className="card mb-3 shadow-sm  py-2 px-5">
            <div className="row ">
              <div className="col-md-4">
                <img src={image} width={500} height={500} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                  <p className="card-text">
                    <small className="text-muted">$ {price}</small>
                  </p>
                  <button onClick={addBtnAction} className="btn btn-outline-danger btn-sm">
                    Comprar
                  </button>
                  <p className="h6 my-5">
                    <span> Cantidad: </span>
                    {amount}{" "}
                    <div className="btn-group">
                      <button onClick={() => setAmount(amount + 1)} className="btn btn-outline-secondary btn-sm">
                        +
                      </button>
                      <button
                        disabled={amount === 1}
                        onClick={() => setAmount(amount - 1)}
                        className="btn btn-outline-secondary btn-sm"
                      >
                        -
                      </button>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DetailProductView;
