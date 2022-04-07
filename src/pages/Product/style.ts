import styled from "styled-components";
import theme from "../../constants/theme";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 32px;
  gap: 25px;

  @media screen and ${theme.device.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;
