export default function Footer() {
  return (
    <>
      {/* Top area */}
      <div
        id="contact"
        className="w-full bg-black/10 flex justify-center items-center overflow-hidden pt-10 pb-10 shadow-lg"
      >
        <div className="w-full max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Térkép (bal, 2 oszlopon) */}
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

            {/* Kapcsolat + Közösségi (középső oszlop) */}
            <div className="px-2">
              <h6 className="mb-4 flex justify-center md:justify-start font-semibold uppercase">
                Kapcsolat
              </h6>

              <p className="mb-3 flex items-center justify-start text-gray-700">
                <span className="me-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Volf Gábor
              </p>

              <p className="mb-3 flex items-start justify-start text-gray-700">
                <span className="me-3 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.47 3.84a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.06l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 0 0 1.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.43z" />
                  </svg>
                </span>
                8431 Bakonyszentlászló, Jókai utca 22.
              </p>

              <p className="mb-3 flex items-center justify-start">
                <span className="me-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908z" />
                  </svg>
                </span>
                <a href="mailto:info@bakonykincse.hu" className="hover:underline">
                  info@bakonykincse.hu
                </a>
              </p>

              <p className="mb-6 flex items-center justify-start">
                <span className="me-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <a href="tel:+36208005606" className="hover:underline">
                  +36 20 800 56 06
                </a>
              </p>

              {/* Közösségi – a Kapcsolat alatt */}
              
              <div className="flex items-center gap-4 justify-center md:justify-start">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=100083082863561"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#3b5998] w-12 h-12 text-white shadow transition hover:brightness-95"
                  aria-label="Facebook page"
                  title="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    className="w-5 h-5"
                    fill="currentColor"
                  >
                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                  </svg>
                </a>

                {/* Instagram – klasszikus ikon */}
                <a
                  href="https://www.instagram.com/bakony.kincse.biokerteszet/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 text-white transition hover:brightness-95"
                  aria-label="Instagram page"
                  title="Instagram"
                >
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint0_radial_87_7153)"></rect> <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint1_radial_87_7153)"></rect> <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint2_radial_87_7153)"></rect> <path d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z" fill="white"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z" fill="white"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z" fill="white"></path> <defs> <radialGradient id="paint0_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"> <stop stop-color="#B13589"></stop> <stop offset="0.79309" stop-color="#C62F94"></stop> <stop offset="1" stop-color="#8A3AC8"></stop> </radialGradient> <radialGradient id="paint1_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"> <stop stop-color="#E0E8B7"></stop> <stop offset="0.444662" stop-color="#FB8A2E"></stop> <stop offset="0.71474" stop-color="#E2425C"></stop> <stop offset="1" stop-color="#E2425C" stop-opacity="0"></stop> </radialGradient> <radialGradient id="paint2_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"> <stop offset="0.156701" stop-color="#406ADC"></stop> <stop offset="0.467799" stop-color="#6A45BE"></stop> <stop offset="1" stop-color="#6A45BE" stop-opacity="0"></stop> </radialGradient> </defs> </g></svg>
                </a>
              </div>
            </div>

            {/* Nyitvatartás (jobb oldali oszlop) */}
            <div className="px-2">
              <h6 className="mb-4 flex items-center gap-2 justify-center md:justify-start font-semibold uppercase">
                Nyitvatartás
              </h6>

              <div className="text-gray-700 text-center md:text-left leading-relaxed">
                <div>Hétfő - Péntek:<br></br>8:00 - 16:00</div>
                <div className="mt-2">
                  Birtoklátogatási szándék esetén kérjük, a megadott elérhetőségeink
                  egyikén egyeztess velünk, mikor érkezel.
                </div>
                <div className="mt-2 text-xl" aria-hidden="true">🌱😊</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-8 bg-gradient-to-b from-[#FFF3EA]/95 to-[#FFE8B2]/95 shadow-md p-3 text-[#6F8625] text-center overflow-hidden">
        <div>
          ©{new Date().getFullYear()} Bakony Kincse Biokertészet – Minden jog fenntartva.
        </div>
        <div>
          <span className="text-sm">
            Készítette:&nbsp;
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