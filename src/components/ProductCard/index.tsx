import { VFC } from "react";
import { ProductCardType } from "../../typings";
import { AppRoutes } from "../../constants";
import { NFT_MOCK_IMG } from "../../constants/images";
import {
  Wrapper,
  ImgBlock,
  InfoWrapper,
  CreatorLabel,
  DigitalLabel,
  SellWrapper,
  AvailableBlock,
  PriceBlock,
  StyledLink,
} from "./style";

type Props = ProductCardType;

const ProductCard: VFC<Props> = (props) => {
  const {
    productId,
    creatorName,
    productName,
    quantityNftsCreated,
    quantityAvailable,
    price,
    image,
  } = props;

  return (
    <StyledLink to={`${AppRoutes.Products}/${productId}`}>
      <Wrapper>
        <ImgBlock
          image={image!}
          isMock={image === NFT_MOCK_IMG || !image || image.slice(-1) === "4"}
        >
          <InfoWrapper>
            <CreatorLabel>
              created by
              <br />
              <span>{creatorName}</span>
            </CreatorLabel>
            <DigitalLabel>{productName}</DigitalLabel>
          </InfoWrapper>
        </ImgBlock>
        <SellWrapper>
          <AvailableBlock>
            available <br />
            <span>
              {quantityAvailable} of {quantityNftsCreated}
            </span>
          </AvailableBlock>
          <PriceBlock>
            price <br />
            <span>{price} ETH</span>
          </PriceBlock>
        </SellWrapper>
      </Wrapper>
    </StyledLink>
  );
};

export default ProductCard;
