import { useEffect, useState } from "react";

export default function BackToTopBtn() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollHeight = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollHeight > 30);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const backToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={backToTop}
      aria-label="Back to top"
      className="fixed bottom-5 right-5 z-20 rounded-full bg-[#8DC740] p-3 text-white shadow-md transition
                 duration-150 ease-in-out hover:bg-[#6F8625] hover:shadow-lg focus:outline-none focus:ring-2
                 focus:ring-offset-2 focus:ring-[#6F8625] active:bg-[#6F8625]"
    >
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth={3}
        stroke="currentColor"
        fill="none"
        className="w-4 h-4"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3l7.5 7.5M12 3v18" />
      </svg>
    </button>
  );
}