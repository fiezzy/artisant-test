import { VFC, useState, useCallback } from "react";
import { api } from "../../api";
import { Api } from "../../typings";
import { useQuery } from "react-query";
import ProductCard from "../../components/ProductCard";
import Loader from "../../components/Loader";
import { NFT_MOCK_IMG } from "../../constants/images";
import {
  Wrapper,
  FlexWrapper,
  Title,
  Label,
  ItemsWrapper,
  StyledInput,
} from "./style";

export const Catalog: VFC = () => {
  const [isAvailableFilter, setIsAvailableFilter] = useState<boolean>(false);

  const {
    data: nfts,
    isLoading,
    isSuccess,
  } = useQuery(["products"], api.getProducts);

  const handleCheckboxChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsAvailableFilter(e.target.checked);
    },
    []
  );

  return (
    <Wrapper>
      <Title>Explore</Title>
      <FlexWrapper>
        <Label>Buy and sell digital fashion NFT art</Label>
        <FlexWrapper>
          <StyledInput
            checked={isAvailableFilter}
            type="checkbox"
            onChange={handleCheckboxChange}
          />
          <Label>Available</Label>
        </FlexWrapper>
      </FlexWrapper>
      {isLoading && <Loader />}
      {isSuccess && (
        <ItemsWrapper>
          {isAvailableFilter
            ? nfts.data.products
                .filter(
                  (product: Api.Product) => product.quantity_available > 0
                )
                .map((product: Api.Product) => (
                  <ProductCard
                    key={product.product_id}
                    productId={product.product_id}
                    creatorName={product.created_by.display_name}
                    productName={product.name}
                    quantityNftsCreated={product.quantity_nfts_created}
                    quantityAvailable={product.quantity_available}
                    price={product.initial_price}
                    image={
                      product.additional_photos.length > 0
                        ? product.additional_photos[0].compressed
                        : NFT_MOCK_IMG
                    }
                  />
                ))
            : nfts.data.products.map((product: Api.Product) => (
                <ProductCard
                  key={product.product_id}
                  productId={product.product_id}
                  creatorName={product.created_by.display_name}
                  productName={product.name}
                  quantityNftsCreated={product.quantity_nfts_created}
                  quantityAvailable={product.quantity_available}
                  price={product.initial_price}
                  image={
                    product.additional_photos.length > 0
                      ? product.additional_photos[0].compressed
                      : NFT_MOCK_IMG
                  }
                />
              ))}
        </ItemsWrapper>
      )}
    </Wrapper>
  );
};
