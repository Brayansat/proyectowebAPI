import React from "react";
import { Footer, Navbar } from "../components";

const Inicio = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-banner flex justify-center bg-cover bg-center h-96 p-3 w-full" />
      <div className="flex justify-center items-center my-10">
        <div className="w-80 border-r-2 p-3">
          <h1 className="text-xl font-bold hover:text-rojoMarvel  hover:underline hover:underline-rojoMarvel cursor-default">
            {" "}
            Heroes{" "}
          </h1>
          <p>
            {" "}
            En esta categoria se va a mostrar una lista de 50 de los heroes de
            marvel en orden alfabetico, mostrando con ello varios de los heroes
            de marvel y una imagen de cada uno.{" "}
          </p>
        </div>
        <div className="w-80 border-r-2 p-3">
          <h1 className="text-xl font-bold hover:text-rojoMarvel  hover:underline hover:underline-rojoMarvel cursor-default">
            {" "}
            Comics{" "}
          </h1>
          <p>
            {" "}
            En esta categoria habra una lista de 50 de los comics que marvel ha
            sacado hasta la fecha, además de la fecha de publicación y una
            imagen de la portada de dicho comic.
          </p>
        </div>
        <div className="w-80 p-3">
          <h1 className="text-xl font-bold hover:text-rojoMarvel  hover:underline hover:underline-rojoMarvel cursor-default">
            {" "}
            Series{" "}
          </h1>
          <p>
            {" "}
            En esta categoria tenemos 50 de las series de marvel hasta el
            momento, con su fecha de salida y una imagen referente.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Inicio;
