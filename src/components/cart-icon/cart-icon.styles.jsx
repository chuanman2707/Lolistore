import styled from "styled-components";

import { ReactComponent as Logo } from "../../assets/shopping-bag.svg";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const LogoContainer = styled(Logo)`
  width: 24px;
  height: 24px;
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
