export type Category =
  | "Zöldség"
  | "Fűszer"
  | "Gyógynövény"
  | "Gyógytea"
  | "Illóolaj"
  | "Hidrolátum";

export type ProductRaw = {
  id: number;
  name: string;
  description: string;
  price: number | string;
  category: Category;
  image: string;          // pl. "/images/products/zeller.jpg" (public mappa)
  unit: string;           // pl. "kg" | "db" | "csomag" | "üveg" | stb.
  amount: number;
  oneunit?: string;
  available: 0 | 1;
  delivery: 0 | 1;
};

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  unit: string;
  amount: number;
  oneunit?: string;
  available: boolean;
  delivery: boolean;
};

export function normalizeProduct(p: ProductRaw): Product {
  return {
    ...p,
    price: typeof p.price === "string" ? Number(p.price) : p.price,
    available: p.available === 1,
    delivery: p.delivery === 1,
  };
}