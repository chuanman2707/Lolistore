import React from "react";
import "./checkout-item.styles.scss";
import {
  clearItemFromCart,
  removeItem,
  addItem
} from "../../redux/cart/cart.action";
import { connect } from "react-redux";

const CheckoutItem = ({ cartItem, clearItemFromCart, removeItem, addItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => {
            removeItem(cartItem);
          }}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          onClick={() => {
            addItem(cartItem);
          }}
        >
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => {
          clearItemFromCart(cartItem);
        }}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItemFromCart: item => dispatch(clearItemFromCart(item)),
  removeItem: item => dispatch(removeItem(item)),
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
