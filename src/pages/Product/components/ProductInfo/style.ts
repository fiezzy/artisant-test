import styled from "styled-components";
import theme from "../../../../constants/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;

  @media screen and ${theme.device.laptop} {
    width: 40%;
  }

  @media screen and ${theme.device.tablet} {
    width: 100%;
  }
`;

export const BackBtn = styled.button`
  border: none;
  outline: none;
  background: none;
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: ${theme.color.blue};
  font-weight: 700;
  font-size: 14px;
  transition: 0.3s;
  width: 160px;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

export const BackArrow = styled.img``;

export const ProductName = styled.span`
  font-size: 46px;
  color: ${theme.color.black};
  font-weight: 700;

  @media screen and ${theme.device.tablet} {
    font-size: 36px;
  }
`;

export const AvailableBlock = styled.div`
  font-weight: 700;
  color: ${theme.color.blue};
  font-size: 20px;

  span {
    color: ${theme.color.lightGray};
  }
`;

export const Description = styled.p`
  text-align: left;
  font-size: 18px;
  color: ${theme.color.black};

  @media screen and ${theme.device.tablet} {
    font-size: 16px;
  }
`;

export const CreatorBlock = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 20px;
`;

export const CreatorImg = styled.img`
  width: 40px;
  height: 40px;
  background-color: ${theme.color.blue};
`;

export const CreatorName = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: ${theme.color.black};

  span {
    color: ${theme.color.blue};
  }
`;

export const BuyBtn = styled.button<{ disabled: boolean }>`
  border: none;
  outline: none;
  padding: 15px 60px;
  background-color: ${({ disabled }) =>
    disabled ? theme.color.lightGray : theme.color.blue};
  color: ${theme.color.white};
  width: 250px;
  font-size: 15px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: ${({ disabled }) => (disabled ? "none" : "scale(0.95)")};
    opacity: 0.7;
  }

  @media screen and ${theme.device.tablet} {
    width: 100%;
  }
`;
