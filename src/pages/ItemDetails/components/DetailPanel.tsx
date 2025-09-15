import type { Product } from "../../../types/product";
import { Link } from "react-router-dom";

export default function DetailPanel({ product }: { product: Product }) {
  const lowStock = product.available && product.amount <= 10;

  return (
    <div className="lg:pl-4">
      <h2 className="text-xs md:text-sm uppercase text-gray-500 tracking-widest">
        {product.category}
      </h2>
      <h1 className="text-gray-700 text-2xl md:text-3xl font-semibold mb-2">
        {product.name}
      </h1>

      {product.description && (
        <p className="leading-relaxed text-base text-justify mb-4">{product.description}</p>
      )}

      {product.unit !== "kg" && product.oneunit && (
        <div className="mb-2">
          <span className="mr-2 font-semibold">Kiszerelés:</span>
          <span>{product.oneunit}</span>
        </div>
      )}

      <div className="mt-2 pb-4 mb-4 border-b border-gray-200">
        <div className="text-2xl mt-4">
          <span className="font-semibold mr-2">Ár:</span>
          {product.price.toLocaleString("hu-HU")} Ft / {product.unit}
        </div>
        {lowStock && (
          <div className="text-sm text-red-500 mt-2">
            A termékből már csak {product.amount} {product.unit} áll rendelkezésre.
          </div>
        )}
        {!product.available && (
          <div className="text-sm text-red-500 mt-2">A termék jelenleg nem elérhető.</div>
        )}
      </div>

      {/* Új rendelési tájékoztató + CTA */}
      <div className="space-y-6">
        <p className="text-gray-700 text-justify italic leading-relaxed">
          Termékeink megrendelhetőek <span className="font-semibold">személyes átvétellel a
          Pápai Éléskamra</span> honlapján (átvétel minden
          csütörtökön 16:30–18:30 között, 8500 Pápa, Budai Nagy Antal utca 1. alatt).
        </p>

        <a
          href="https://papaieleskamra.hu/termelok/volf-gabor-bakony-kincse-biokerteszet-815"
          target="_blank"
          rel="noreferrer"
          className="mr-4 inline-flex items-center gap-2 rounded-md bg-[#6F8625] px-5 py-2.5 text-white text-sm hover:bg-[#8DC740]"
        >
          Tovább az oldalra
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h6m0 0v6m0-6L10 16" />
          </svg>
        </a>

        <Link to="/termekeink" className="ml-4 inline-flex items-center gap-2 rounded-md bg-gray-500 px-5 py-2.5 text-white text-sm hover:bg-gray-400">
          Vissza a termékekhez
        </Link>
      </div>
    </div>
  );
}