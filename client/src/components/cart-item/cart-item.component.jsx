import React from "react";

import {
  CartItemContainer,
  ItemDetailsContainer,
  NameSpanContainer
} from "./cart-item.styles";
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <img src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <NameSpanContainer>{name}</NameSpanContainer>
        <NameSpanContainer>
          {quantity} x ${price}
        </NameSpanContainer>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
