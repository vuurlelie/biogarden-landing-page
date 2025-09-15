export default function Footer() {
  return (
    <>
      <div id="contact" className="w-full bg-black/10 flex justify-center items-center overflow-hidden shadow-lg pt-10 pb-10 shadow-lg">
        <div className="w-full max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2 flex items-stretch">
              <iframe
                title="Biogarden location – Bakonyszentlászló"
                className="w-full h-[260px] rounded-lg border shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86475.23035605217!2d17.728068301205862!3d47.366068474596005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476bd4517abd7b8f%3A0x400c4290c1e4340!2zQmFrb255c3plbnRsw6FzemzDsywgODQzMQ!5e0!3m2!1shu!2shu!4v1719932127988!5m2!1shu!2shu"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="px-2">
              <h6 className="mb-4 flex justify-center md:justify-start font-semibold uppercase">
                Kapcsolat
              </h6>

              <p className="mb-3 flex items-center justify-center md:justify-start text-gray-700">
                <span className="me-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Volf Gábor
              </p>

              <p className="mb-3 flex items-center justify-center md:justify-start text-gray-700">
                <span className="me-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                  </svg>
                </span>
                8431 Bakonyszentlászló
              </p>

              <p className="mb-3 flex items-center justify-center md:justify-start">
                <span className="me-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </span>
                <a href="mailto:bakonykincse@gmail.com" className="hover:underline">
                  bakonykincse@gmail.com
                </a>
              </p>

              <p className="mb-3 flex items-center justify-center md:justify-start">
                <span className="me-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <a href="tel:+36301234567" className="hover:underline">
                  +36 30 123 45 67
                </a>
              </p>
            </div>

            <div className="px-2">
  <h6 className="mb-4 flex justify-center md:justify-start font-semibold uppercase">
    Közösségi
  </h6>

  <div className="flex flex-col items-center md:items-start gap-3">
    {/* Facebook */}
    <a
      href="https://www.facebook.com/profile.php?id=100083082863561"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-full bg-[#3b5998] w-12 h-12 text-white shadow transition hover:brightness-95"
      aria-label="Facebook page"
      title="Facebook"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-5 h-5" fill="currentColor">
        <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
      </svg>
    </a>

    {/* Pápai Éléskamra */}
    <a
      className="mt-3 inline-flex items-center gap-2 text-gray-700 hover:underline"
      href="https://papaieleskamra.hu/termelok/volf-gabor-bakony-kincse-biokerteszet-815"
      target="_blank"
      rel="noreferrer"
    >
      {/* kért ikon */}
      <svg
        className="w-6 h-6"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24" height="24" fill="none" viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
        />
      </svg>
      <span>Pápai Éléskamra</span>
    </a>
  </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-8 bg-gradient-to-b from-[#FFF3EA]/95 to-[#FFE8B2]/95 shadow-md p-3 text-[#6F8625] text-center overflow-hidden shadow">
        <div>
          ©{new Date().getFullYear()} Bakony Kincse Biokertészet – Minden jog fenntartva.
        </div>
        <div>
          <span className="text-sm"> Készítette:&nbsp;
            <a
            className="font-semibold hover:underline"
            href="https://www.facebook.com/profile.php?id=100012648488859"
            target="_blank"
            rel="noreferrer"
            >
              Rácz Krisztina
            </a>
          </span>
        </div>
      </div>
    </>
  );
}