import { VFC } from "react";
import { NFT_MOCK_IMG } from "../../../../constants/images";
import { API_FILE_URL } from "../../../../constants";
import { NftImg } from "./style";

type Props = {
  image: string;
};

// в перспективе хотел сюда воткнуть возможность переключения между несколькими картинками
// но по времени не уложился
const ImagesBlock: VFC<Props> = (props) => {
  const { image } = props;

  const imageUrl = `${API_FILE_URL + image}`;

  return (
    <NftImg
      src={
        image === NFT_MOCK_IMG || !image || image.slice(-1) === "4"
          ? NFT_MOCK_IMG
          : imageUrl
      }
    />
  );
};

export default ImagesBlock;
