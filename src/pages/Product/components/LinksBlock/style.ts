import styled from "styled-components";
import theme from "../../../../constants/theme";

export const Wrapper = styled.div`
  padding: 32px;
`;

export const LinksWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Label = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: ${theme.color.black};
`;

export const LinkItem = styled.div`
  width: 100%;
  padding: 25px 50px;
  background-color: ${theme.color.stroke};
  display: flex;
  font-weight: 700;
  gap: 20px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.5;
  }

  @media screen and ${theme.device.tablet} {
    padding: 25px 30px;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${theme.color.black};
`;
