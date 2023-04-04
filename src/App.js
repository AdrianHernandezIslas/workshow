import "./App.css";
import { Fragment, useState, useEffect } from "react";
import ItemComponent from "./components/ItemComponent";
import NavBarComponent from "./components/NavBarComponent";

function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  //const BASE_URL ="https://jsonplaceholder.typicode.com/albums/1/photos"

  useEffect(() => {
    console.log("Ejecute el fetch");
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos").then(response => {
      return response.json();
    }).then((data) =>{
      setItems(data);
    });

   /* const info = {
      albumId: 1,
      title: "Islas coder",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
    };
    fetch("https://jsonplaceholder.typicode.com/photos", {
      method: "POST",
      body:JSON.stringify(info),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));*/
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
