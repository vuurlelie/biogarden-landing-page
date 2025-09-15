export default function AboutItems({ bemutatkozo }: { bemutatkozo: string }) {
  return (
    <>
      <div className="rounded overflow-hidden">
        <img
          className="w-full h-auto object-cover"
          src={bemutatkozo}
          alt="Életkép a kertészetből"
          loading="lazy"
          decoding="async"
        />
      </div>

      <section className="mt-10 mx-auto max-w-6xl px-4 sm:mt-12 md:mt-16 mb-2">
        <div className="sm:text-center lg:text-left">
          <h2 className="my-6 text-2xl md:text-3xl font-bold text-gray-700">
            Bemutatkozás
          </h2>

          <p className="text-justify mb-4">
            A Bakony Kincse Biokertészetben több mint két hektáron zöldségtermesztés mellett
            fűszer- és gyógynövénytermesztéssel foglalkozunk. Célunk a tiszta, magas minőségű
            élelmiszer létrehozása a hagyományos értékrenden alapuló családi gazdaságunkban,
            ezért nem használunk műtrágyát és vegyszereket; a kártevők ellen biológiailag
            lebomló főzeteket alkalmazunk.
          </p>
          <p className="text-justify">
            Jelenleg 15 féle növényt termesztünk és dolgozunk fel. A kézzel történő szedést
            követően a növényeink szárítása természetes úton történik. A morzsolást is kézzel
            végezzük, saját magunk csomagoljuk, így a teljes technológiai folyamatot zárt
            rendszerben, a saját ellenőrzésünk alatt tarthatjuk.
          </p>
        </div>
      </section>
    </>
  );
}