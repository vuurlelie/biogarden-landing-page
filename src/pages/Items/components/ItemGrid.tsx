import { useMemo, useState, useEffect } from "react";
import type { Category, Product } from "../../../types/product";
import ItemCards from "./ItemCards";
import ItemPagination from "./ItemPagination";

type P = {
  items: Product[];
  categoryFilter: Category | "Összes";
  availableOnly: boolean;
  sort: "abc" | "priceup" | "pricedown";
};

const PAGE_SIZE = 12;

export default function ItemGrid({ items, categoryFilter, availableOnly, sort }: P) {
  const [page, setPage] = useState(0);

  const filteredSorted = useMemo(() => {
    let arr = items.slice();

    if (categoryFilter !== "Összes") arr = arr.filter(p => p.category === categoryFilter);
    if (availableOnly) arr = arr.filter(p => p.available);

    arr.sort((a, b) => {
      if (sort === "abc") return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
      if (sort === "priceup") return a.price - b.price;
      return b.price - a.price;
    });

    return arr;
  }, [items, categoryFilter, availableOnly, sort]);

  // reset page, ha változik a szűrés
  useEffect(() => setPage(0), [categoryFilter, availableOnly, sort]);

  const pageCount = Math.max(1, Math.ceil(filteredSorted.length / PAGE_SIZE));
  const start = page * PAGE_SIZE;
  const current = filteredSorted.slice(start, start + PAGE_SIZE);

  return (
    <>
      <div className="w-full px-4 pb-3 text-sm text-gray-600 mb-4">
        {filteredSorted.length === 0
          ? "Nincs találat a megadott feltételekkel."
          : `${start + 1}–${Math.min(start + PAGE_SIZE, filteredSorted.length)} / összesen ${filteredSorted.length} termék`}
      </div>

      {filteredSorted.length > 0 && <ItemCards products={current} />}

      <ItemPagination pageNumber={pageCount} currentPage={page} setPage={setPage} />
    </>
  );
}