import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import { Footer,Navbar } from '../components'

// https://gateway.marvel.com:443/v1/public/series?limit=50&apikey=
// 787c7db569498ca082aed35152ede826 public
// a4a872fdabbc07a433e0aeaf550c3c829633557f private
// ts:1
// 1a4a872fdabbc07a433e0aeaf550c3c829633557f787c7db569498ca082aed35152ede826
// 38cf9265c36a7a70e5641f00691f08cf hash

const Series = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://gateway.marvel.com:443/v1/public/series?ts=1&limit=100&apikey=787c7db569498ca082aed35152ede826&hash=38cf9265c36a7a70e5641f00691f08cf"
      )
      .then((res) => {
        setData(res.data.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(data);
  return (
    <div className="App">
      <Navbar />
      <div className="flex flex-wrap my-7 justify-center gap-6 items-center">
        {data.map((serie) => {
          return (
            <div className="cardHeroe" key={serie.id}>
              <div className="container-img">
                <img
                  className="w-full h-48 object-cover"
                  src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
                />
              </div>
              <div className="card-body bg-white">
                <div className="card-header">
                  <p className="font-semibold text-base 2xl:text-lg md:text-lg">
                    {serie.title}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  )
}

export default Series