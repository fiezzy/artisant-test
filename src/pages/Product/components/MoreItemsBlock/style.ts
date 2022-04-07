import styled from "styled-components";
import theme from "../../../../constants/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 32px;

  @media screen and ${theme.device.laptop} {
    justify-content: center;
  }
`;

export const CreatorLabel = styled.div`
  padding: 0px 32px 0px 32px;
  color: ${theme.color.black};
  font-size: 18px;
  font-weight: 700;

  span {
    color: ${theme.color.blue};
  }
`;
