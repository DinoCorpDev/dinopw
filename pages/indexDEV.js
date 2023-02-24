import React, { useState } from "react";
import { useRouter } from "next/router";
import Lottie from "react-lottie";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import LogoDino from "../public/negativo3.png";
import animationMetanetwork from "../public/lottie/MetaNetwork.json";

import locales from "../locales";

export default function Landing() {
  const { locale, defaultLocale } = useRouter();
  
  const lang = { ...locales[locale] };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettigns: {
      preserveAspectRatio: "xMidYMid Slice",
    },
  };

  return (
    <>
      <section id="Construction">
        <div className="container w-10/12 grid grid-cols-1 gap-4 py-4 items-center">
          <div>
            <div className="md:pl-6">
              <div className="w-[60%] m-auto mb-4 mt-12 md:w-[23%]">
                  <div className="text-center w-12/12 p-2">
                    <Image src={LogoDino} alt="Copy Icon" />
                  </div>
              </div>
              <div className="w-[100%] mt-0 md:w-[45%] text-center m-auto mt-[-30px]">
                  <div className="text-center md:mb-0 md:p-2 w-12/12">
                    <Lottie
                      options={{
                        animationData: animationMetanetwork,
                        ...defaultOptions,
                      }}
                    ></Lottie>
                  </div>
              </div>
              <h2 className="md:hidden text-[1.3rem] leading-none font-extrabold uppercase text-center mb-10 title-res1">
                <span
                  className="text-white heading-shadow double-text-extra text-res-const"
                  data-text="Pagina web"
                >
                  Pagina web
                </span>{" "}
                <br />
                <span
                  className="text-white2 heading-shadow double-text-extra text-res-const"
                  data-text="En construccion"
                >
                  En construccion
                </span>
              </h2>
              <h2 className="hidden md:block text-4xl font-extrabold uppercase text-center mb-4">
                <span
                  className="text-white heading-shadow double-text front-letter"
                  data-text="Pagina web"
                >
                  Pagina web
                </span>
                <br />
                <span
                  className="text-white1 heading-shadow double-text front-letter"
                  data-text="En construccion"
                >
                  En construccion
                </span>
              </h2>
              <p className="text-center text-turquoise text-shadow text-m font-bold uppercase">
                #MAKING YOUR IDEAS COME TRUE
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
