import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleProduct.css";

function SingleProduct() {
  const [products, setProducts] = useState([]);
  const { singleId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.slice(0, 8));
      });
  }, []);

  const selectedProduct = products.find(
    (Element) => Element.id.toString() === singleId.toString()
  );

  return (
    <div className="single-product">
      <div className="container">
        <div>
          {selectedProduct ? (
            <div>
              <div className="single-product-image">
                <img src={selectedProduct.image} className="img-fluid" alt="" />
              </div>
              <div className="single-product-text">
                <h4>{selectedProduct.title}</h4>
                <p>$ {selectedProduct.price}</p>
                <p>{selectedProduct.description}</p>
              </div>
            </div>
          ) : (
            <div className="spin-area">
              <div className="spinner-border text-info" role="status">
                <span className="visually-hidden"></span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
