import React, { useEffect, useMemo, useRef, useState } from "react";

type CarouselProps = {
  /** A diák (leggyakrabban <img/> elemek) */
  children: React.ReactNode[];
  /** Automatikus léptetés */
  auto?: boolean;
  /** Időköz ms-ben (alapértelmezés: 5000, min: 2000) */
  interval?: number;
};

export default function Carousel({
  children,
  auto = false,
  interval = 5000,
}: CarouselProps) {
  const slides = useMemo(() => React.Children.toArray(children), [children]);
  const [current, setCurrent] = useState(0);
  const hoverRef = useRef(false);

  const previous = () =>
    setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  // Autoplay (hover közben szünetel)
  useEffect(() => {
    if (!auto || slides.length <= 1) return;
    const id = setInterval(() => {
      if (!hoverRef.current) next();
    }, Math.max(2000, interval));
    return () => clearInterval(id);
  }, [auto, interval, slides.length]);

  // Billentyűzetes navigáció
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") previous();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Érintéses swipe
  const startX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) =>
    (startX.current = e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current == null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dx) > 40) (dx > 0 ? previous() : next());
    startX.current = null;
  };

  return (
    <div
      className="relative overflow-hidden w-full" // ← NINCS rounded, full width
      onMouseEnter={() => (hoverRef.current = true)}
      onMouseLeave={() => (hoverRef.current = false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
    >
      {/* Track */}
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((node, i) => (
          <div key={i} className="min-w-full">
            {node}
          </div>
        ))}
      </div>

      {/* Vezérlők */}
      <div className="absolute inset-0 flex items-center justify-between p-3 sm:p-4 pointer-events-none">
        <button
          onClick={previous}
          className="pointer-events-auto p-2 rounded-full shadow bg-white/85 text-gray-800 hover:bg-white"
          aria-label="Előző dia"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          className="pointer-events-auto p-2 rounded-full shadow bg-white/85 text-gray-800 hover:bg-white"
          aria-label="Következő dia"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Pontok */}
      <div className="absolute bottom-3 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Ugrás a(z) ${i + 1}. diára`}
              className={`transition-all w-2 h-2 rounded-full bg-white ${
                current === i ? "scale-110" : "opacity-60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}