export namespace Api {
  export type Product = {
    product_id: number;
    name: string;
    initial_price: number;
    created_by: Creator;
    quantity_nfts_created: number;
    quantity_available: number;
    additional_photos: AdditionalPhotos[];
  };

  export type Creator = {
    id: number;
    display_name: string;
    public_address: string;
    custom_url: string;
    image: {
      original: string;
      compressed: string;
    };
  };

  export type AdditionalPhotos = {
    original: string;
    compressed: string;
  };
}

export type ProductCardType = {
  productId: number;
  creatorName: string;
  productName: string;
  quantityNftsCreated: number;
  quantityAvailable: number;
  price: number;
  image?: string;
  description?: string;
  creatorImage?: string;
};
