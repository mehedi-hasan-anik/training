import React, { useEffect, useState } from "react";
import "./FakeSection.css";

function FakeSection() {
  const [fakeData, setFakeData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setFakeData(data.slice(0, 8));
        setLoading(true);
      });
  }, []);

  return (
    <div className="fake-section" id="product">
      <div className="container">
        {loading ? (
          <div className="row">
            {fakeData.map((item) => (
              <div key={item.id} className="col-md-3 p-4">
                <div>
                  <div className="fake-section-image">
                    <img src={item.image} className="img-fluid" alt="" />
                  </div>
                  <div className="fake-section-text">
                    <h4>{item.title}</h4>
                    <p className="price">$ {item.price}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ width: "100px", margin: "0 auto" }}>
            <div class="spinner-border text-info" role="status">
              <span class="visually-hidden"></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FakeSection;
