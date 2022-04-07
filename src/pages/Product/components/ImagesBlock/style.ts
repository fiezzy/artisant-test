import styled from "styled-components";
import theme from "../../../../constants/theme";

export const NftImg = styled.img`
  width: 50%;
  height: 50%;

  @media screen and ${theme.device.laptop} {
    width: 60%;
    height: 60%;
  }

  @media screen and ${theme.device.tablet} {
    width: 100%;
    height: 100%;
  }
`;
