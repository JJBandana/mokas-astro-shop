export type CartItem = {
  id: string;
  name: string;
  imageSrc: string;
  price: number;
  quantity: number;
};

export interface IProduct {
  id: string;
  name: string;
  price: { [key: string]: number };
  compare_price: { [key: string]: number };
  description: string;
  images: string[];
}
