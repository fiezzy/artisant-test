import styled from "styled-components";
import theme from "../../constants/theme";

export const Wrapper = styled.div`
  padding: 32px;

  @media screen and ${theme.device.tablet} {
    padding: 16px;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  &:last-child {
    gap: 10px;
  }

  @media screen and ${theme.device.tablet} {
    flex-direction: column;
    justify-content: center;

    &:last-child {
      flex-direction: row;
    }
  }
`;

export const StyledInput = styled.input`
  width: 14px;
  height: 14px;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 100%;
  color: ${theme.color.black};
  margin-bottom: 24px;

  // @media screen and ${theme.device.tablet} {
  //   text-align: center;
  // }
`;

export const Label = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: ${theme.color.lightGray};
  margin-bottom: 32px;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
`;
