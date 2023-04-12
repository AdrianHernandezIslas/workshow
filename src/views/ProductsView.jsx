import React, { Fragment, useState } from "react";
import ItemComponent from "../components/ItemComponent";
import NavBarComponent from "../components/NavBarComponent";
import useFetch from "../utils/useFetch";
const BASE_URL = "https://test-coder-c1c38-default-rtdb.firebaseio.com/products/-NSmB7rl5nARAM2GN-Ob/.json";

const ProductsView = (props) => {
  const [count, setCount] = useState(0);
  const [data, loading] = useFetch(BASE_URL);

  //const _get = useCallback(get,[get]);

  const updateCount = () => {
    setCount(count + 1);
  };

  return (
    <Fragment>
      <NavBarComponent />
      <div className="container">
        <h1>Total: {count}</h1>
        {loading ? (
          <h1>Estamos cargando tu info...</h1>
        ) : (
          data.map((item, index) => {
            return (
              <div className="row" key={index}>
                <div className="col-5">
                  <ItemComponent data={item} handlerUpdate={updateCount} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </Fragment>
  );
};

//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBdBjlkgDE0cWXmnbJvWWkbr19UHd4FRvuUw&usqp=CAU

export default ProductsView;
