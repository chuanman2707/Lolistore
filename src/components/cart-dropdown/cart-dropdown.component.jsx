import React from "react";
import CustomButton from "../custom-button/custom-button.component";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CartItem from "../cart-item/cart-item.component";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import {
  CardDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => (
  <CardDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageContainer>Your Cart Is Empty</EmptyMessageContainer>
      )}
    </CartItemsContainer>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        toggleCartHidden();
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </CardDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartDropdown)
);
