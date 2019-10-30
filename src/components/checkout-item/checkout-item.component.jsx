import React from "react";

import {
  clearItemFromCart,
  removeItem,
  addItem
} from "../../redux/cart/cart.action";
import { connect } from "react-redux";

import {
  CheckoutItemContainer,
  ImageContainer,
  NameContainer,
  QuantityContainer,
  PriceContainer,
  ArrowContainer,
  ValueContainer,
  RemoveButtonContainer
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, clearItemFromCart, removeItem, addItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img alt="item" src={imageUrl} />
      </ImageContainer>
      <NameContainer>{name}</NameContainer>
      <QuantityContainer>
        <ArrowContainer
          onClick={() => {
            removeItem(cartItem);
          }}
        >
          &#10094;
        </ArrowContainer>
        <ValueContainer>{quantity}</ValueContainer>
        <ArrowContainer
          onClick={() => {
            addItem(cartItem);
          }}
        >
          &#10095;
        </ArrowContainer>
      </QuantityContainer>
      <PriceContainer>{price}</PriceContainer>
      <RemoveButtonContainer
        onClick={() => {
          clearItemFromCart(cartItem);
        }}
      >
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
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
