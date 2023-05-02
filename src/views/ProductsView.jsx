import React, { Fragment, useEffect } from "react";
import ItemComponent from "../components/ItemComponent";
import useFetch from "../utils/useFetch";
import { useParams } from "react-router-dom";
const BASE_URL = "https://fakestoreapi.com/products";
const URL_CATEGORY = "category";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ProductsView = (props) => {
  const { category } = useParams();
  const final_url = category ? `${BASE_URL}/${URL_CATEGORY}/${category}` : BASE_URL;
  const [data, loading] = useFetch(final_url);

  useEffect(() => {
    const db = getFirestore();
    const nameCollection = "items";
    const documentId = "BpnaXOXqVLDEovdh9Pc8";
    const biciRef = doc(db, nameCollection, documentId);
    getDoc(biciRef).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.data());
      }
    });
  });

  return (
    <Fragment>
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {loading ? (
            <h1>Estamos cargando tu info...</h1>
          ) : (
            data.map((item, index) => {
              return (
                <div key={index} className="col">
                  <ItemComponent data={item} />
                </div>
              );
            })
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsView;
