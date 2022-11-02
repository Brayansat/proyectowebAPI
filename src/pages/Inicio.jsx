import React from "react";
import { Footer, Navbar } from "../components";

const Inicio = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-banner flex justify-center bg-cover bg-center h-96 p-3 w-full" />
      <div className="flex justify-center items-center my-10">
        <div className="w-80 border-r-2 p-3">
          <h1 className='text-xl font-bold hover:text-rojoMarvel  hover:underline hover:underline-rojoMarvel cursor-default'> Heroes </h1>
          <p> En esta categoria se va a mostrar una lista de los heroes de marvel</p>
        </div>
        <div className="w-80 border-r-2 p-3">
          <h1 className='text-xl font-bold hover:text-rojoMarvel  hover:underline hover:underline-rojoMarvel cursor-default'> Comics </h1>
          <p> En esta categoria habra una lista de muchos de los comics que hay</p>
        </div>
        <div className="w-80 p-3">
          <h1 className='text-xl font-bold hover:text-rojoMarvel  hover:underline hover:underline-rojoMarvel cursor-default'> Series </h1>
          <p> En esta categoria tenemos las series de marvel hasta el momento</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Inicio;
