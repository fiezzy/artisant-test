import styled from "styled-components";
import theme from "../../constants/theme";

export const Wrapper = styled.div`
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.span`
  font-weight: 700;
  color: ${theme.color.darkGray};
`;
