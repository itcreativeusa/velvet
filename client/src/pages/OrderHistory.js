import React from "react";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

// Add this line to import Bootstrap styles
import "bootstrap/dist/css/bootstrap.min.css";

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <div className="container my-4">
      <Link to="/" className="btn btn-secondary mb-4">
        ← Back to Products
      </Link>

      {user ? (
        <>
          <h2>
            Order History for {user.firstName} {user.lastName}
          </h2>
          {user.orders.map((order) => (
            <div key={order._id} className="my-2">
              <h3>
                {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
              </h3>
              <div className="card-group">
                {order.products.map(({ _id, image, name, price }, index) => (
                  <div
                    key={index}
                    className="card m-2"
                    style={{ width: "18rem" }}
                  >
                    <Link to={`/products/${_id}`}>
                      <img
                        className="card-img-top"
                        src={`/images/${image}`}
                        alt={name}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">${price}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
}

export default OrderHistory;
