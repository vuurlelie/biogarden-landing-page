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
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
        <Card img={hidrolatum} title="HIDROLÁTUM">
          Mi is az a hidrolátum? A gyógynövény lepárlási folyamat során az üstbe helyezett válogatott növényeken keresztül forró, 105-110 Celsius fokos gőzt engedünk át. 
          Ennek hatására felszakadnak az illóolajat tartalmazó növényi részek és a gőz feltelítődik. 
          Ezt a telített gőzt kivezetve, egy másik berendezésben lehűtjük, ami így lecsapódik, majd egy speciális edénybe kerül ahol szétválik tiszta illóolajra és illóolajat, 
          illetve az összes komponensét tartalmazó aromavízre. Így az aromavíz - hidrolátum - egyfajta „higított változata” az illóolajnak, annak minden jótékony tulajdonságával.
        </Card>
        <Card img={tea} title="GYÓGYTEA">
          A hűvös időben jól esik elfogyasztani egy csésze forró gyógynövényteát.
          A gyógynövényekből készült teákat elsősorban a betegségek megelőzésére, enyhe lefolyású problémák, például megfázás, esetén fogyasztjuk leggyakrabban, 
          de a kellemes aromájú és illatú, enyhe hatású gyógynövényekből készült teák a nap bármely időszakában fogyaszthatóak folyadékpótlás céljából is.
        </Card>
        <Card img={oil} title="ILLÓOLAJ">
          Helyi alkalmazás: Fontos megjegyezni, hogy a legtöbb illóolaj nem alkalmazható közvetlenül, hígítás nélkül. 
          A bőrirritáció kockázata miatt az illóolajokat hordozóolajban - bázisolajban - célszerű hígítani. 
          Fürdőolaj - Keverjük össze az illóolajat egy hordozóolajjal és adjuk hozzá a meleg fürdővízhez. 
          Masszázsolaj - Egy-két csepp illóolajat hozzáadhatunk bázisolajhoz vagy hidratáló krémhez, és felvihetjük bőrünkre.
        </Card>
      </div>
    </section>
  );
}