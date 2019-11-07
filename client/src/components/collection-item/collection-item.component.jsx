import React from "react";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";
import {
  CustomButtonContainer,
  ImageContainer,
  CollectionFooterContainer,
  CollectionFooterSpanPrice,
  CollectionFooterSpanName,
  CollectionItemContainer
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer style={{ backgroundImage: `url(${imageUrl})` }} />
      <CollectionFooterContainer>
        <CollectionFooterSpanName>{name}</CollectionFooterSpanName>
        <CollectionFooterSpanPrice>${price}</CollectionFooterSpanPrice>
      </CollectionFooterContainer>
      <CustomButtonContainer inverted onClick={() => addItem(item)}>
        ADD TO CART
      </CustomButtonContainer>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});
export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
