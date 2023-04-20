import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductsView from "./views/ProductsView";
import DetailProductView from "./views/DetailProductView";
import NavBarComponent from "./components/NavBarComponent";
import AboutView from "./views/AboutView";
import { routes } from "./routes";
import ItemFormView from "./views/ItemFormView";
import GeneralContext from "./context/GeneralContext";
import { useState } from "react";
function App() {
  const [counter,setCounter] = useState(0);
  
  const updateCounter = () => {
    setCounter(counter+1);
  };

  return (
    <GeneralContext.Provider value={{updateCounter,counter}}>
      <BrowserRouter>
        <NavBarComponent />
        <Routes>
          <Route path={routes.root} element={<ProductsView />}></Route>
          <Route path={routes.aboutView} element={<AboutView />} />
          <Route path="/products/detail/:idProduct" element={<DetailProductView />}></Route>
          <Route path="/eventos" element={<ItemFormView />}></Route>
        </Routes>
      </BrowserRouter>
    </GeneralContext.Provider>
  );
}

export default App;
