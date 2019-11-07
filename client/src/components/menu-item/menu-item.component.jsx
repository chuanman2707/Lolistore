import React from "react";

import { withRouter } from "react-router-dom";
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  TitleContainer,
  SubtitleContainer
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, match, linkUrl, history }) => {
  return (
    <MenuItemContainer
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImageContainer
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <ContentContainer>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
        <SubtitleContainer>MUA NGAY</SubtitleContainer>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
