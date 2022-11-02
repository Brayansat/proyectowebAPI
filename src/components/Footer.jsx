import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-black pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-white">
              Marvel API
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-white">
              Página hecha con ayuda de la API de marvel
            </h5>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-white text-sm font-semibold mb-2">
                  Accounts
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://github.com/Brayansat"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://gitlab.com/brayansmithalbarracin"
                    >
                      Gitlab
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-white text-sm font-semibold mb-2">
                  Links de interés
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-white hover:text-white font-semibold block pb-2 text-sm"
                      href="https://developer.marvel.com/"
                    >
                      Marvel API
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://tailwindcss.com/"
                    >
                      Tailwind
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://es.reactjs.org/"
                    >
                      React
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-white font-semibold py-1">
              Programación web <span id="get-current-year">2022</span>
              <a>{" "}Brayan Albarracin </a>
              <a>UFPS </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
