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

  const found = products.find(
    (Element) => Element.id.toString() === singleId.toString()
  );

  return (
    <div className="single-product">
      <div className="container">
        <div>
          {found && (
            <div>
              <div className="single-product-image">
                <img src={found.image} className="img-fluid" alt="" />
              </div>
              <div className="single-product-text">
                <h4>{found.title}</h4>
                <p>$ {found.price}</p>
                <p>{found.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
