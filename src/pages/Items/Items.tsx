import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import raw from "../../data/products.json";
import type { Category, Product, ProductRaw } from "../../types/product";
import { normalizeProduct } from "../../types/product";
import ItemGrid from "./components/ItemGrid";

export default function Items() {
  const [categoryFilter, setCategoryFilter] = useState<Category | "Összes">("Összes");
  //const [availableOnly, setAvailableOnly] = useState(false);
  const [sort, setSort] = useState<"abc" | "priceup" | "pricedown">("abc");

  const products: Product[] = useMemo(
    () => (raw as ProductRaw[]).map(normalizeProduct),
    []
  );

  const categories: ("Összes" | Category)[] = useMemo(() => {
    const uniq = Array.from(new Set(products.map((p) => p.category))) as Category[];
    return ["Összes", ...uniq];
  }, [products]);

  return (
    <>
      <Navbar />

      {/* teljes szélességű „fejléc + szűrők” sáv */}
      <section className="px-4 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white py-6 mb-8 shadow-lg">
        {/* belső tartalom: széleken nincs padding */}
        <div className="w-full">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:px-6 py-2">
              <h1 className="text-xl font-bold tracking-wide">TERMÉKEINK</h1>

              {/*<label className="inline-flex items-center gap-2 text-gray-700">
                <input
                  type="checkbox"
                  checked={availableOnly}
                  onChange={(e) => setAvailableOnly(e.target.checked)}
                />
                Csak az elérhető termékek
              </label>*/}

              <div className="flex flex-wrap items-center gap-4">
                <label className="font-semibold text-gray-700">
                  Kategória:&nbsp;
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value as any)}
                    className="font-normal border rounded-sm px-2 py-1"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="font-semibold text-gray-700">
                  Rendezés:&nbsp;
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value as any)}
                    className="font-normal border rounded-sm px-2 py-1"
                  >
                    <option value="abc">ABC szerint növekvő</option>
                    <option value="priceup">Ár szerint növekvő</option>
                    <option value="pricedown">Ár szerint csökkenő</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* kártyarács – a kártyák továbbra is 6xl szélességen belül */}
        <div className="max-w-6xl mx-auto px-0 md:px-0">
          <ItemGrid
            items={products}
            categoryFilter={categoryFilter}
            sort={sort}
          />
        </div>
      </section>
    </>
  );
}