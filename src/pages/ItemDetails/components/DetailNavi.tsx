import { Link } from "react-router-dom";
import type { Product } from "../../../types/product";

export default function DetailNavi({ product }: { product: Product }) {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-6 text-sm">
      <Link to="/" className="hover:underline font-semibold text-[#6F8625]">
        Kezdőlap
      </Link>
      <span className="mx-2">/</span>
      <Link to="/termekeink" className="hover:underline font-semibold text-[#6F8625]">
        Termékeink
      </Link>
      <span className="mx-2">/</span>
      <span className="text-gray-700">{product.name}</span>
    </div>
  );
}