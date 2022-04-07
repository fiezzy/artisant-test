import { VFC } from "react";
import { useQuery } from "react-query";
import { api } from "../../../../api";
import { Api } from "../../../../typings";
import { NFT_MOCK_IMG } from "../../../../constants/images";
import ProductCard from "../../../../components/ProductCard";
import { Wrapper, CreatorLabel } from "./style";

const CREATOR_NAME_MOCK = "Elena Semenenko";

type Props = {
  creatorName: string;
};

const MoreItemsBlock: VFC<Props> = (props) => {
  const { creatorName } = props;

  const { data: nfts, isSuccess } = useQuery(["products"], api.getProducts);

  return (
    <>
      <CreatorLabel>
        more items by <span>{CREATOR_NAME_MOCK}</span>
      </CreatorLabel>
      <Wrapper>
        {isSuccess &&
          nfts.data.products
            .filter(
              (product: Api.Product) =>
                product.created_by.display_name === creatorName
            )
            .slice(0, 4)
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
            ))}
      </Wrapper>
    </>
  );
};

export default MoreItemsBlock;
