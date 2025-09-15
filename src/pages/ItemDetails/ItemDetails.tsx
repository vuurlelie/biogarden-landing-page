import { useMemo } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import NotFound from "../components/NotFound";

import raw from "../../data/products.json";
import type { ProductRaw, Product } from "../../types/product";
import { normalizeProduct } from "../../types/product";
import DetailNavi from "./components/DetailNavi";
import DetailPanel from "./components/DetailPanel";

// +++ ÚJ: fotó nézegető
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export default function ItemDetails() {
  const { id } = useParams<{ id: string }>();

  const product: Product | undefined = useMemo(() => {
    const list = (raw as ProductRaw[]).map(normalizeProduct);
    const pid = Number(id);
    return list.find((p) => p.id === pid);
  }, [id]);

  if (!product) {
    return <NotFound message="A keresett azonosítójú termék sajnos nem található." />;
  }

  return (
    <>
      <Navbar />

      <div className="text-gray-700 bg-white shadow-lg mb-8">
        <DetailNavi product={product} />
        <div className="max-w-6xl mx-auto px-4 pb-16 pt-8">
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            {/* Kép – kattintva nagyítható */}
            <PhotoProvider maskOpacity={0.9}>
              <PhotoView src={product.image}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    w-full cursor-zoom-in rounded-lg shadow border border-gray-200 p-2
                    object-cover max-h-[420px] max-w-[420px] shadow-lg
                  "
                  loading="lazy"
                  decoding="async"
                />
              </PhotoView>
            </PhotoProvider>

            <DetailPanel product={product} />
          </div>
        </div>
      </div>
    </>
  );
}