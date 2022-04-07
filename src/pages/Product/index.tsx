import { VFC } from "react";
import { api } from "../../api";
import { useParams } from "react-router";
import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { NFT_MOCK_IMG } from "../../constants/images";
import ProductInfo from "./components/ProductInfo";
import ImagesBlock from "./components/ImagesBlock";
import MoreItemsBlock from "./components/MoreItemsBlock";
import LinksBlock from "./components/LinksBlock";
import Loader from "../../components/Loader";
import { Wrapper } from "./style";

export const Product: VFC = () => {
  const { productId } = useParams();

  const {
    data: nft,
    isLoading,
    isSuccess,
  } = useQuery(
    ["product", productId],
    () => api.getProductById(Number(productId)),
    {
      onError: (err: AxiosError) => {
        alert(`Error ${err.name} // ${err.message}`);
      },
    }
  );

  return (
    <>
      {isLoading && <Loader />}
      {isSuccess && (
        <>
          <Wrapper>
            <ImagesBlock
              image={
                nft.data.product.additional_photos.length > 0
                  ? nft.data.product.additional_photos[0].compressed
                  : NFT_MOCK_IMG
              }
            />
            <ProductInfo
              productId={nft.data.product.product_id}
              creatorName={nft.data.product.created_by.display_name}
              productName={nft.data.product.name}
              quantityNftsCreated={nft.data.product.quantity_nfts_created}
              quantityAvailable={nft.data.product.quantity_available}
              price={nft.data.product.initial_price}
              description={nft.data.product.description}
              creatorImage={nft.data.product.created_by.image.compressed}
            />
          </Wrapper>
          <LinksBlock
            etherScanLink={nft.data.product.etherscan_link}
            openSeaLink={nft.data.product.opensea_link}
            raribleLink={nft.data.product.rarible_link}
          />
          <MoreItemsBlock
            creatorName={nft.data.product.created_by.display_name}
          />
        </>
      )}
    </>
  );
};
