import styled from "styled-components";
import theme from "../../constants/theme";
import { Link } from "react-router-dom";
import { API_FILE_URL } from "../../constants";
import { NFT_MOCK_IMG } from "../../constants/images";

export const Wrapper = styled.div`
  width: 305px;
  height: 482px;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(0.98);
    opacity: 0.7;
  }
`;

export const ImgBlock = styled.div<{ image: string; isMock: boolean }>`
  background-image: url(${({ isMock, image }) =>
    isMock ? NFT_MOCK_IMG : API_FILE_URL + image});
  background-size: 305px 404px;
  width: 305px;
  height: 404px;
  border-radius: 8px 8px 0px 0px;
  padding: 16px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  flex-direction: column;
`;

export const CreatorLabel = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: ${theme.color.stroke};

  span {
    font-weight: 700;
    font-size: 14px;
    color: ${theme.color.white};
  }
`;

export const DigitalLabel = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: ${theme.color.white};
`;

export const SellWrapper = styled.div`
  height: calc(100% - 404px);
  padding: 16px;
  border-radius: 0px 0px 8px 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AvailableBlock = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: ${theme.color.darkGray};

  span {
    font-size: 16px;
    font-weight: 600;
    color: ${theme.color.black};
  }
`;

export const PriceBlock = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: ${theme.color.darkGray};
  text-align: right;

  span {
    font-size: 16px;
    font-weight: 600;
    color: ${theme.color.blue};
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
