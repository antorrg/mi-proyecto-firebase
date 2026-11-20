export interface Usuario {
  id: string;
  nombre: string;
}

export interface Item {
  id: string;
  picture: string;
  text: string;
  productId: string;
  enabled: boolean;
}

export interface IProduct {
  id: string;
  title: string;
  picture: string;
  logo: string;
  metaDescription: string;
  shortDescription: string;
  description: string;
  isActive: boolean;
  url?: string;
  enabled: boolean;
  items: Item[];
}

export type ProductsPreview = Pick<
  IProduct,
  'id' | 'title' | 'shortDescription' | 'logo' | 'enabled'
>

export interface IFrontPage {
  id: string;
  picture: string;
  title: string;
  metaDescription: string;
  description: string;
  enabled: boolean;
  productsPreview: ProductsPreview[];
}

export interface IVideoItem {
  id: string;
  name: string;
  youtubeId: string;
}

export interface ProductVideo {
  id: string;
  productId: string;
  title: string;
  productTitle: string;
  description: string;
  enabled: boolean;
  videos: IVideoItem[];
}

export interface IAbout {
  id: string;
  title: string;
  text: string;
  picture?: string;
  enabled: boolean;
}

export interface IContactMessage {
  email: string;
  issue: string;
  message: string;
  website?: string;
}

