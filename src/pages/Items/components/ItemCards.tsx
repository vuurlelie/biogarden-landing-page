import { Link } from "react-router-dom";
import type { Product } from "../../../types/product";

export default function ItemCards({ products }: { products: Product[] }) {
  return (
    <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {products.map((product) => (
        <article key={product.id} className="rounded shadow-lg bg-white overflow-hidden flex flex-col">
          <Link to={`/termekeink/${product.slug}`} className="relative block">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover border:white p-2"
              loading="lazy"
              decoding="async"
            />
            {!product.available && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[165px] text-center bg-white/90 text-gray-600 text-sm px-3 py-1 rounded shadow">
                NEM ELÉRHETŐ
              </div>
            )}
          </Link>

          <div className="p-4 flex-1 flex flex-col">
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="font-semibold">{product.name}</h3>
              <span className="text-sm text-gray-500">
                {product.unit !== "kg" ? product.oneunit : product.unit}
              </span>
            </div>
          
            {/* 
            <div className="mt-2 text-gray-900 font-medium">
              {product.price.toLocaleString("hu-HU")} Ft / {product.unit}
            </div>
            */}
            
            <div className="mt-auto pt-3 flex justify-end">
              <Link
                to={`/termekeink/${product.slug}`}
                className="inline-block px-3 py-2 rounded bg-[#6F8625] text-white text-sm hover:bg-[#8DC740]">
                Részletek
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}