import React, { useState } from "react";
import InputComponent from "../components/InputComponent";

const ItemFormView = () => {
  const [data, setData] = useState({ title: "soy el titulo", descripcion: "soy la descripcion" });

  const manejadorCambio = (evento) => {
    const title = evento.target.value;
    setData({ ...data, title });
  };

  const manejadorCambioB = (evento) => {
    const nuevoValor = { descripcion: evento.target.value, title: data.title };
    setData(nuevoValor);
  };

  const manejadorDeEventoDeTecla = (evento) => {
    console.log("soy el evento de la tecla", evento.keyCode);
    if (evento.key === "a" || evento.key === "e" || evento.key === "i" || evento.key === "o" || evento.key === "u") {
      evento.preventDefault();
    }
  };

  const manejadorDeEventoDeTeclaB = (evento) => {
    console.log("soy el evento de la tecla", evento.keyCode);
    if (!(evento.keyCode >= 48 && evento.keyCode <= 57)) {
      evento.preventDefault();
    }
  };
  //[48,57]

  return (
    <React.Fragment>
      <form>
        <div className="row">
          <div className="col-6">
            <InputComponent
            titulo="sin bocales"
              data={data.title}
              manejadorDeEventoDeTecla={manejadorDeEventoDeTecla}
              manejadorCambio={manejadorCambio}
            ></InputComponent>

            <InputComponent
            titulo="solo numeros"
              data={data.descripcion}
              manejadorDeEventoDeTecla={manejadorDeEventoDeTeclaB}
              manejadorCambio={manejadorCambioB}
            ></InputComponent>
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-5">
          <button className="btn btn-secondary">Registrar</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ItemFormView;
