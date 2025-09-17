export default function AboutGarden({ bemutatkozo }: { bemutatkozo: string }) {
  return (
    <>
      <div className="rounded overflow-hidden max-w-6xl mx-auto px-4">
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
            A kis gyógynövényes gazdaságunk Győr-Moson-Sopron vármegye délkeleti csücskében, a Bakonyalja
            legszebb természeti környezetében, Bakonyszentlászlón található.
            A település Pápától, Győrtől és Veszprémtől egyaránt 40 km távolságra fekszik.
          </p>
          <p className="text-justify">
            A Bakony Kincse Biokertészet egy bio tanúsított, ökológiai szemléletű kisgazdaság, amelyet mint
            főállású őstermelő és kistermelő 2022 elején hoztam létre. Családi kisgazdaságunkban a
            konvencionális növénytermesztést és állattartást felváltotta a jelenlegi főtevékenységünk a
            gyógynövénytermesztés és feldolgozás, ami teljesen új irányvonalat és kihívásokat hozott el az
            életemben. Emellett pedig kisebb mennyiségben zöldségeket is termesztünk. Gazdaságunk alapelve
            az ökológiai gazdálkodás, amely teljes mértékben kizárja a vegyi anyagok használatát és amelyet a
            Biokontroll Hungária Nonprofit Kft. ellenőrzése alatt végzünk.
          </p>
        </div>
      </section>
    </>
  );
}