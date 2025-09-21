export type Category = "Hidrolátum" | "Illóolaj" | "Egyéb"; 

export type ProductRaw = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  unit: string;
  amount: number;
  oneunit?: string;
  available: number | boolean;
  delivery?: number | boolean;
};

export type Product = ProductRaw & {
  available: boolean;       
  delivery?: boolean;
  slug: string;             
};

import { slugifyHu } from "../utils/Slug";

export function normalizeProduct(product: ProductRaw): Product {
  return {
    ...product,
    available: !!product.available,
    delivery: product.delivery == null ? undefined : !!product.delivery,
    slug: slugifyHu(product.name),
  };
}