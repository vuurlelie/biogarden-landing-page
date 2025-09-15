export default function ItemPagination({
  pageNumber,
  currentPage,
  setPage,
}: {
  pageNumber: number;
  currentPage: number;
  setPage: (n: number) => void;
}) {
  if (pageNumber <= 1) return null;

  const prev = () => setPage(Math.max(0, currentPage - 1));
  const next = () => setPage(Math.min(pageNumber - 1, currentPage + 1));

  return (
    <div className="mt-6 flex items-center justify-center">
      <nav className="flex items-center gap-2" aria-label="Pagination">
        <button onClick={prev} className="p-2 rounded-full shadow bg-white text-gray-800 hover:bg-gray-100" aria-label="Előző">
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {Array.from({ length: pageNumber }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`px-3 py-2 rounded shadow text-sm ${i === currentPage ? "bg-gray-300" : "bg-white hover:bg-gray-100"}`}
          >
            {i + 1}
          </button>
        ))}

        <button onClick={next} className="p-2 rounded-full shadow bg-white text-gray-800 hover:bg-gray-100" aria-label="Következő">
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </nav>
    </div>
  );
}