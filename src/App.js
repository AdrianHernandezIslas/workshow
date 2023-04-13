import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductsView from "./views/ProductsView";
import DetailProductView from "./views/DetailProductView";
import NavBarComponent from "./components/NavBarComponent";
import AboutView from "./views/AboutView";
import { routes } from "./routes"; 

function App() {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route path={routes.root} element={<ProductsView />}></Route>
        <Route path={routes.aboutView} element={<AboutView />} />
        <Route path="/products/detail/:idProduct" element={<DetailProductView />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
