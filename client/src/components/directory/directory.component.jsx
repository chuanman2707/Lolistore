import React from "react";
import MenuItem from "../menu-item/menu-item.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectory } from "../../redux/directory/directory.selectors";
import { DirectoryMenuContainer } from "./directory.styles";

const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...otherProps }) => (
      <MenuItem key={id} {...otherProps} />
    ))}
  </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectory
});

export default connect(mapStateToProps)(Directory);
