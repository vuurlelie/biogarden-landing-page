export default function AboutGarden({ bemutatokep }: { bemutatokep: string }) {
  return (
    <section id="about" className="relative bg-white overflow-hidden mt-16 mb-8 shadow-lg">
      {/* max-w-6xl, hogy a behúzás egyezzen a többi tartalommal */}
      <div className="max-w-6xl mx-auto">
        <div className="relative z-10 pb-10 bg-white lg:max-w-2xl lg:w-full">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            aria-hidden="true"
          />

          {/* itt már nem kell külön max-w, a felső wrapper adja; a px-4 illeszt a többi részhez */}
          <div className="px-4 lg:px-8">
            <div className="text-left">
              <h2 className="mb-6 text-xl md:text-2xl font-bold text-gray-700">
                Termékeinkről
              </h2>

              <ul className="mr-8 max-w-prose space-y-1 text-gray-600 list-disc list-inside text-justify">
                <li>Minden nálunk kapható zöldséget, gyógy- és fűszernövényt magunk termesztünk a birtokon.</li>
                <li>100%-ban vegyszermentesek.</li>
                <li>Biokontroll Hungária Kft. által tanúsított bio termékek.</li>
                <li>A megrendelt zöldségeket átvétel előtt frissen szedjük.</li>
                <li>Termékeink magas minőségére garanciát vállalunk.</li>
                <li>Szezonális termékek és folyamatosan bővülő kínálat.</li>
              </ul>

              <h3 className="mt-8 mb-4 text-xl md:text-2xl font-bold text-gray-700">
                Termékeink nem tartalmaznak:
              </h3>
              <ul className="max-w-prose space-y-1 text-gray-600 list-disc list-inside">
                <li>Hozzáadott sót</li>
                <li>Adalékanyagokat</li>
                <li>Tartósítószereket</li>
                <li>Színezőanyagokat</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Jobb oldali kép nagy kijelzőn; mobilon felül jelenik meg automatikusan */}
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="w-full object-cover object-top sm:h-72 md:h-96 lg:h-full"
            src={bemutatokep}
            alt="Kertészeti életkép"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}