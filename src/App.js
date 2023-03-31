import "./App.css";
import { Fragment, useState, useEffect } from "react";
import ItemComponent from "./components/ItemComponent";
import NavBarComponent from "./components/NavBarComponent";

function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            title: "Camiseta",
            descripcion: "Negra",
            price: 20,
          },
          {
            title: "Sudadera",
            descripcion: "Verde Nike XL",
            price: 30,
          },
          {
            title: "Pans",
            descripcion: "Rojo chamuco",
            price: 100,
          },
        ]);
      }, 5000);
    })
      .then((result) => {
        setItems(result);
      })
      .catch((error) => {
        console.log("ups algo fallo");
      });
  }, []);

  const updateCount = () => {
    setCount(count + 1);
  };

  return (
    <Fragment>
      <NavBarComponent />
      <div className="container">
        <h1>Total: {count}</h1>
        {items.length === 0 ? (
          <h1>Estamos cargando tu info...</h1>
        ) : (
          items.map((item, index) => {
            return <ItemComponent key={index} data={item} handlerUpdate={updateCount} />;
          })
        )}
      </div>
    </Fragment>
  );
}

export default App;
