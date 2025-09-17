import React from "react";
import hidrolatum from "../../../assets/images/hidrolatum.png";
import oil from "../../../assets/images/oil.png";
import tea from "../../../assets/images/tea.png";

const Card = ({
  img,
  title,
  children,
}: {
  img: string;
  title: string;
  children: React.ReactNode;
}) => (
  <article className="rounded-xl overflow-hidden shadow bg-white">
    <div className="flex justify-center items-center pt-8">
      <img src={img} alt={title} className="h-20 w-20" loading="lazy" />
    </div>
    <div className="px-6 pb-6 pt-4 flex flex-col h-full">
      <h3 className="font-bold text-xl mb-3 text-center">{title}</h3>
      <p className="text-gray-700 text-base text-justify px-1">{children}</p>
    </div>
  </article>
);

export default function ArticleGrid() {
  return (
    <section className="py-10">
      <div className="hyphens-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
        <Card img={oil} title="ILLÓOLAJ">
          Az illóolaj a természet legnemesebb kincse, amelyet a gondosan válogatott gyógynövényeinkből, saját gőzdesztillációs berendezéssel nyerünk ki. 
          Egyetlen cseppje is olyan, mintha egy exkluzív spa élményét engednéd be otthonodba – kifinomult illatok, tiszta harmónia, és a luxus érzése minden lélegzetvételben.  
          Pár cseppje elég, hogy otthonod friss, nyugtató vagy épp energizáló illatokkal teljen meg, miközben a tested-lelked is hálás lesz érte.
          Az illóolajok sokoldalú társaid lehetnek a mindennapokban: akár párologtatóban, fürdővízben vagy masszázshoz használva is harmóniát és vitalitást hoznak az életedbe.
        </Card>
        <Card img={hidrolatum} title="HIDROLÁTUM">
          Mi is az a hidrolátum? A gyógynövény lepárlási folyamat során az üstbe helyezett válogatott gyógynövényeken keresztül forró gőzt engedünk át. 
          Ennek hatására felszakadnak az illóolajat tartalmazó növényi részek és a gőz feltelítődik. Ezt a telített gőzt kivezetve, egy másik berendezésben lehűtjük, ami így lecsapódik, 
          majd egy speciális edénybe kerül ahol szétválik tiszta illóolajra és illóolajat, illetve az összes komponensét tartalmazó aromavízre. 
          Így az aromavíz - hidrolátum - egyfajta „higított változata” az illóolajnak, annak minden jótékony tulajdonságával.
        </Card>
        <Card img={tea} title="TEÁK, FŰSZEREK">
          Gyógyteáink nemcsak felmelegítenek a hűvös napokon, hanem lágyan támogatják szervezetedet is – legyen szó megelőzésről, enyhe panaszokról vagy egyszerű kikapcsolódásról. 
          Kellemes aromájuk és harmonikus ízviláguk miatt a mindennapok részei lehetnek, akár a reggeli induláshoz, akár egy esti nyugtató teázáshoz.
          Fűszereink a konyha elengedhetetlen társai: frissen szárított, intenzív ízű és illatú gyógynövények, amelyek minden ételt különlegessé varázsolnak. Legyen szó egy egyszerű levesről, 
          egy mediterrán fogásról vagy egy ünnepi vacsoráról – egy csipet belőlük a természet valódi ízét adja az ételeidhez.  
        </Card> 
      </div>
    </section>
  );
}