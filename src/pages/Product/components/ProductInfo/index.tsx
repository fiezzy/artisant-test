import { VFC, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { API_FILE_URL } from "../../../../constants";
import { ProductCardType } from "../../../../typings";
import { ARROW_BACK_ICON } from "../../../../constants/images";
import {
  Wrapper,
  BackBtn,
  BackArrow,
  ProductName,
  AvailableBlock,
  Description,
  CreatorBlock,
  CreatorImg,
  CreatorName,
  BuyBtn,
} from "./style";

type Props = ProductCardType;

const ProductInfo: VFC<Props> = (props) => {
  const {
    // productId,
    creatorName,
    productName,
    quantityNftsCreated,
    quantityAvailable,
    price,
    description,
    creatorImage,
  } = props;

  const navigate = useNavigate();

  //обработчик моковой кнопки покупки
  const handleBuyBtnClick = useCallback(() => {
    alert(`Congratulations! You purchased: ${productName} by ${creatorName}!`);
  }, [creatorName, productName]);

  const handleBackBtnClick = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <Wrapper>
      <BackBtn onClick={handleBackBtnClick}>
        <BackArrow alt="#" src={ARROW_BACK_ICON} /> back to catalog
      </BackBtn>
      <ProductName>{productName}</ProductName>
      <AvailableBlock>
        {price} ETH
        <br />
        available: <br />{" "}
        <span>
          {quantityAvailable} of {quantityNftsCreated}
        </span>
      </AvailableBlock>
      <Description>{description}</Description>
      <CreatorBlock>
        <CreatorImg src={API_FILE_URL + creatorImage} />
        <CreatorName>
          creator <br /> <span>{creatorName}</span>
        </CreatorName>
      </CreatorBlock>
      <BuyBtn disabled={quantityAvailable < 1} onClick={handleBuyBtnClick}>
        Buy
      </BuyBtn>
    </Wrapper>
  );
};

export default ProductInfo;
