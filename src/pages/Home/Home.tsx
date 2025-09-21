import Navbar from "../components/Navbar";
import Carousel from "./components/Carousel";
import ArticleGrid from "./components/ArticleGrid";

import firstslide from "../../assets/images/firstcarousel.jpg";
import secondslide from "../../assets/images/secondcarousel.jpg";
import thirdslide from "../../assets/images/thirdcarousel.jpg";
import fourthslide from "../../assets/images/fourthcarousel.jpg";
import actual from "../../assets/images/actual.jpg";

const slides = [firstslide, secondslide, thirdslide, fourthslide];

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="w-full px-0 mt-2 sm:mt-3 shadow-lg">
        <Carousel auto interval={5000}>
          {slides.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Biogarden slide ${i + 1}`}
              className="w-full object-cover object-center"
              loading={i > 0 ? "lazy" : "eager"}
              decoding="async"
            />
          ))}
        </Carousel>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <ArticleGrid />
      </div>

      <div className="w-full px-0 mb-8 shadow-lg">
        <img
          className="w-full h-auto"
          src={actual}
          alt="Aktuális hirdetés"
          loading="lazy"
          decoding="async"
        />
      </div>
    </>
  );
}