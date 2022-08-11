import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Loading from "../Loading";
import "./FakeSection.css";

function FakeSection() {
  const [fakeData, setFakeData] = useState([]);
  const [error, setError] = useState(false);
  const history = useHistory();

  const Handeler = (id) => {
    const url = `/product/${id}`;
    history.push(url);
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setFakeData(data.slice(0, 8));
      })
      .catch((error) => {
        setError(true);
      });
  }, []);

  return (
    <div className="fake-section" id="product">
      <div className="container">
        {error ? (
          <div>
            <h1 style={{ color: "white", textAlign: "center" }}>Not Found</h1>
          </div>
        ) : (
          <>
            {fakeData.length ? (
              <div className="row">
                {fakeData.map((item) => (
                  <div
                    key={item.id}
                    className="col-md-4 col-lg-3 col-sm-6 p-4"
                    onClick={() => Handeler(item?.id)}
                  >
                    <div>
                      <div className="fake-section-image">
                        <img src={item?.image} className="img-fluid" alt="" />
                      </div>
                      <div className="fake-section-text">
                        <h4>{item?.title}</h4>
                        <p className="price">$ {item.price}</p>
                        <p>{item?.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <Loading />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default FakeSection;
