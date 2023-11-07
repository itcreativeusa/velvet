import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

// Add this line to import Bootstrap styles
import "bootstrap/dist/css/bootstrap.min.css";

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const { name, image, description, category, price, quantity, _id } = item;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    <div className="card productItem">
      <Link to={`/products/${_id}`}>
        <img
          className="card-img-top productImg"
          alt={name}
          src={`/images/${image}`}
        />
        <div className="card-body">
          <p className="card-text">{name}</p>
        </div>
      </Link>
      <div className="card-footer">
        <div>
          {quantity} {pluralize("item", quantity)} in stock
        </div>
        <span className="price">${price}</span>
        <button className="btn btn-primary cartBtns" onClick={addToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
