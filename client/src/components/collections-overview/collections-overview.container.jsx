import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";
import { selectIsCollectionsFetching } from "../../redux/shop/shop.selectors";
const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching
});

const CollectionsOverviewContainer = connect(mapStateToProps)(
  WithSpinner(CollectionsOverview)
);

export default CollectionsOverviewContainer;
