import React from "react";

import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { createStructuredSelector } from "reselect";
import {
  CartIconContainer,
  LogoContainer,
  ItemCountContainer
} from "./cart-icon.styles";
const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <LogoContainer />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartIconContainer>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
