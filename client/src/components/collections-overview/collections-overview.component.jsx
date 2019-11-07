import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import { CollectionOverViewContainer } from "./collections-overview.styles";

const CollectionsOverview = ({ shop }) => (
  <CollectionOverViewContainer>
    {shop.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </CollectionOverViewContainer>
);

const mapStateToProps = createStructuredSelector({
  shop: selectCollectionsForPreview
});
export default connect(mapStateToProps)(CollectionsOverview);
