import React, { useState } from "react";
import { useRouter } from "next/router";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Lottie from "react-lottie";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

import VerticalIcon from "../components/verticalIcon";
import WebsIcon from "../components/websIcon";
import Header from "../components/header";
import Footer from "../components/footer";

import Onixlogo from "../public/ONIXLOGO.png";
import Gaflogo from "../public/GAF.png";
import Gairalogo from "../public/gairalog.png";
import Parchelogo from "../public/parchelog.png";
import Italenttlogo from "../public/ITALENTTLOGO.png";
import Kapitallogo from "../public/kapitallog.png";
import Konvozlogo from "../public/KONVOZLOGO.png";

import MovildevIcon from "../public/movildev.png";
import WebdevIcon from "../public/webdev.png";
import Documentation from "../public/documentation.png";
import Qa from "../public/qa.png";
import Brand from "../public/digitalbrand.png";
import IconFacebook from "../public/facebook.png";
import IconInstagram from "../public/instagram.png";
import IconWha from "../public/whatsapp.png";
import WebIcon from "../public/navegador.png";

import IconPrev from "../public/arrow-prev.svg";
import IconNext from "../public/arrow-next.svg";

import animationMetanetwork from "../public/lottie/MetaNetwork.json";

import Android from "../public/android.png";
import Reactjs from "../public/react.png";
import Vuejs from "../public/vue.png";
import Wordpress from "../public/wordpress.png";
import Php from "../public/php.png";
import Python from "../public/python.png";
import Mysql from "../public/mysql.png";
import Postgresql from "../public/postgre.png";
import Java from "../public/java.png";
import JavaScript from "../public/java-script.png";

import Team from "../public/DEVTEAM20.jpg";
import TeamRes from "../public/DEVTEAMRES2.jpg";
import Italentt from "../public/ITALENTT1.png";
import Gaf from "../public/GAFPC.png";
import Global from "../public/global.png";
import Konvoz from "../public/KONVOZPC.png";
import Onix from "../public/ONIXCEL.png";
import Kapital from "../public/KAPITALPC.png";
import Build from "../public/BUILDCEL.png";

import locales from "../locales";

export default function Landing() {
  const { locale, defaultLocale } = useRouter();

  const navigation = {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  };

  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  const customSlideTo = (index) => {
    firstSwiper.slideTo(index);
    secondSwiper.slideTo(index);
  };

  // const copyText = () => {
  //   const el = document.getElementById("hash");
  //   const selection = document.createRange();
  //   selection.selectNodeContents(el);
  //   window.getSelection().removeAllRanges();
  //   window.getSelection().addRange(selection);
  //   const res = document.execCommand("copy");
  //   window.getSelection().removeRange(selection);

  //   if (res) {
  //     alert(locales[locale].copied);
  //   } else {
  //     alert(locales[locale].copyError);
  //   }
  // };
  // const copyText2 = () => {
  //   const el = document.getElementById("hash2");
  //   const selection = document.createRange();
  //   selection.selectNodeContents(el);
  //   window.getSelection().removeAllRanges();
  //   window.getSelection().addRange(selection);
  //   const res = document.execCommand("copy");
  //   window.getSelection().removeRange(selection);

  //   if (res) {
  //     alert(locales[locale].copied);
  //   } else {
  //     alert(locales[locale].copyError);
  //   }
  // };

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
      <Header />
      <section id="about" className="mb-0 md:mb-8 mt-8">
        <div className="container w-10/12 grid grid-cols-1 md:grid-cols-2 gap-4 pt-8 md:py-12 items-center">
          <div>
            <h2 className="text-center md:text-left text-5xl font-extrabold uppercase mb-10 title-res">
              <span
                className="text-whiteItis heading-shadow double-text"
                data-text={lang.about.title1}
              >
                {lang.about.title1}
              </span>{" "}
              <span
                className="text-whiteItis heading-shadow double-text"
                data-text={lang.about.title2}
              >
                {lang.about.title2}
              </span>
            </h2>
            <p className="mb-4 text-center md:text-justify">
              {lang.about.text1}{" "}
              <strong className="text-white font-bold">
                {lang.about.text2}
              </strong>{" "}
            </p>
            <p className="text-center md:text-justify">
              {lang.about.text3}<strong>{lang.about.text4}</strong>
            </p>
          </div>
          <div className="flex justify-self-center xl:justify-self-end w-12/12 pt-8">
            <Lottie
              options={{
                animationData: animationMetanetwork,
                ...defaultOptions,
              }}
            ></Lottie>
          </div>
        </div>
      </section>
      <section id="services" className="mb-2">
        <div className="container grid w-10/12 pt-12 md:py-12">
          <div className="md:text-center md:w-11/12 justify-self-center">
            <h2 className="text-[2.5rem] leading-none md:text-5xl font-extrabold uppercase text-center mb-10 title-res">
              <span
                className="text-whiteItis heading-shadow double-text"
                data-text={lang.services.title2}
              >
                {lang.services.title1}
              </span>{" "}
            </h2>
            <p className="mb-6 md:mb-20 text-center">{lang.services.text1}<strong>{lang.services.text2}</strong>{lang.services.text3}</p>
            <div className="hidden md:grid grid-cols-5">
              <VerticalIcon
                desc={lang.services.icon1}
                timeline
              >
                <div className="normalIcon w-[500px]">
                  <Image src={MovildevIcon} alt="x" layout="fill" />
                </div>
                <div className="fillIcon">
                  <Image src={MovildevIcon} alt="x" layout="fill" />
                </div>
              </VerticalIcon>
              <VerticalIcon
                desc={lang.services.icon2}
                timeline
              >
                <div className="normalIcon w-[500px]">
                  <Image src={WebdevIcon} alt="x" layout="fill" />
                </div>
                <div className="fillIcon">
                  <Image src={WebdevIcon} alt="x" layout="fill" />
                </div>
              </VerticalIcon>
              <VerticalIcon
                desc={lang.services.icon3}
                timeline
              >
                <div className="normalIcon w-[500px]">
                  <Image src={Documentation} alt="x" layout="fill" />
                </div>
                <div className="fillIcon">
                  <Image src={Documentation} alt="x" layout="fill" />
                </div>
              </VerticalIcon>
              <VerticalIcon
                desc={lang.services.icon4}
                timeline
              >
                <div className="normalIcon w-[500px]">
                  <Image src={Qa} alt="x" layout="fill" />
                </div>
                <div className="fillIcon">
                  <Image src={Qa} alt="x" layout="fill" />
                </div>
              </VerticalIcon>
              <VerticalIcon
                desc={lang.services.icon5}
                timeline
              >
                <div className="normalIcon w-[500px]">
                  <Image src={Brand} alt="x" layout="fill" />
                </div>
                <div className="fillIcon">
                  <Image src={Brand} alt="x" layout="fill" />
                </div>
              </VerticalIcon>
            </div>
            <div className="grid grid-cols-2 h-[20%] md:hidden">
              <VerticalIcon
                desc={lang.services.icon4}
                timeline
              >
                <div className="w-[70%]">
                  <Image src={Qa} alt="x" layout="responsive" />
                </div>
                <div className="fillIcon">
                  <Image src={Qa} alt="x" layout="responsive" />
                </div>
              </VerticalIcon>

              <VerticalIcon
                desc={lang.services.icon3}
                timeline
              >
                <div className="w-[70%]">
                  <Image src={Documentation} alt="x" layout="responsive" />
                </div>
                <div className="fillIcon">
                  <Image src={Documentation} alt="x" layout="responsive" />
                </div>
              </VerticalIcon>
            </div>
            <div className="grid grid-cols-1 h-[20%] md:hidden">
              <VerticalIcon
                desc={lang.services.icon2}
                timeline
              >
                <div className="w-[70%]">
                  <Image src={WebdevIcon} alt="x" layout="responsive" />
                </div>
                <div className="fillIcon">
                  <Image src={WebdevIcon} alt="x" layout="responsive" />
                </div>
              </VerticalIcon>
            </div>
            <div className="grid grid-cols-2 h-[20%] md:hidden">
              <VerticalIcon
                desc={lang.services.icon1}
                timeline
              >
                <div className="w-[70%]">
                  <Image src={MovildevIcon} alt="x" layout="responsive" />
                </div>
                <div className="fillIcon">
                  <Image src={MovildevIcon} alt="x" layout="responsive" />
                </div>
              </VerticalIcon>
              <VerticalIcon
                desc={lang.services.icon5}
                timeline
              >
                <div className="w-[70%]">
                  <Image src={Brand} alt="x" layout="responsive" />
                </div>
                <div className="fillIcon">
                  <Image src={Brand} alt="x" layout="responsive" />
                </div>
              </VerticalIcon>
            </div>
          </div>
        </div>
      </section>
      <section id="tecnologies">
        <div className="container w-10/12 mb-12 md:py-12">
          <div className="text-center md:w-11/12 mx-auto">
            <h2 className="text-5xl font-extrabold uppercase mb-2 title-res">
              <span
                className="text-whiteItis heading-shadow double-text"
                data-text={lang.tecnologies.title2}
              >
                {lang.tecnologies.title1}
              </span>{" "}
            </h2>
          </div>
          <div className="container w-10/12 grid grid-cols-1 md:grid-cols-2 gap-4 pt-8 md:py-2 items-center">
            <div className="w-12/12 block overflow-hidden">
              <div className="flex justify-between items-center w-full h-full">
                <button className="swiper-button-prev">
                  <div className="flex w-8 md:w-full">
                    <Image src={IconPrev} alt="Prev Arrow" />
                  </div>
                </button>
                <button className="swiper-button-next">
                  <div className="flex w-8 md:w-full">
                    <Image src={IconNext} alt="Next Arrow" />
                  </div>
                </button>
              </div>
              <Swiper
                slidesPerView={1}
                modules={[Autoplay, Navigation]}
                navigation={navigation}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loop={true}
                loopedSlides={4}
                breakpoints={{
                  768: {
                    spaceBetween: 40,
                    slidesPerView: 1,
                  },
                }}
                className="swiper-nft w-10/12 mb-14 md:my-20"
              >
                <SwiperSlide>
                  <div className="text-center justify-center">
                    <div className="nftItemImg p-5 md:p-2 w-full mb-6">
                      <Image src={Vuejs} alt={lang.tecnologies.icon1} layout="responsive" />
                    </div>
                    <h4 className="nftItemText font-bold">{lang.tecnologies.icon1}</h4>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-center justify-center">
                    <div className="nftItemImg p-5 md:p-0 w-full mb-6">
                      <Image src={Reactjs} alt={lang.tecnologies.icon2} layout="responsive" />
                    </div>
                    <h4 className="nftItemText font-bold">{lang.tecnologies.icon2}</h4>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-center justify-center">
                    <div className="nftItemImg p-5 md:p-0 w-full mb-6">
                      <Image src={Php} alt={lang.tecnologies.icon3} layout="responsive" />
                    </div>
                    <h4 className="nftItemText font-bold">{lang.tecnologies.icon3}</h4>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-center justify-center">
                    <div className="nftItemImg p-5 md:p-0 w-full mb-6">
                      <Image src={Wordpress} alt={lang.tecnologies.icon4} layout="responsive" />
                    </div>
                    <h4 className="nftItemText font-bold">{lang.tecnologies.icon4}</h4>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-center justify-center">
                    <div className="nftItemImg p-5 md:p-0 w-full mb-6">
                      <Image src={Java} alt={lang.tecnologies.icon5} layout="responsive" />
                    </div>
                    <h4 className="nftItemText font-bold">{lang.tecnologies.icon5}</h4>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-center justify-center">
                    <div className="nftItemImg p-5 md:p-0 w-full mb-6">
                      <Image src={JavaScript} alt={lang.tecnologies.icon6} layout="responsive" />
                    </div>
                    <h4 className="nftItemText font-bold">{lang.tecnologies.icon6}</h4>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-center justify-center">
                    <div className="nftItemImg p-5 md:p-0 w-full mb-6">
                      <Image src={Mysql} alt={lang.tecnologies.icon7} layout="responsive" />
                    </div>
                    <h4 className="nftItemText font-bold">{lang.tecnologies.icon7}</h4>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-center flex-col justify-center">
                    <div className="nftItemImg p-5 md:p-0 w-full mb-6">
                      <Image src={Postgresql} alt={lang.tecnologies.icon8} layout="responsive" />
                    </div>
                    <h4 className="nftItemText font-bold">{lang.tecnologies.icon8}</h4>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-center">
                    <div className="nftItemImg p-5 md:p-0 w-full mb-6">
                      <Image src={Python} alt={lang.tecnologies.icon9} layout="responsive" />
                    </div>
                    <h4 className="nftItemText font-bold">{lang.tecnologies.icon9}</h4>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-center">
                    <div className="nftItemImg p-5 md:p-0 w-full mb-6">
                      <Image src={Android} alt={lang.tecnologies.icon10} layout="responsive" />
                    </div>
                    <h4 className="nftItemText font-bold">{lang.tecnologies.icon10}</h4>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="w-12/12 flex overflow-hidden">
              <div className="container w-10/12 grid grid-cols-1 md:grid-cols-1">
                <h5 className="font-extrabold uppercase title-res1 text-xl text-center">
                  {lang.tecnologies.text1}
                </h5>
                <br />
                <div className="container w-12/12 grid grid-cols-2">
                  <ul className="slide-list">
                    <li>{lang.tecnologies.icon1}</li>
                    <li>{lang.tecnologies.icon2}</li>
                    <li>{lang.tecnologies.icon3}</li>
                    <li>{lang.tecnologies.icon4}</li>
                    <li>{lang.tecnologies.icon5}</li>
                  </ul>
                  <ul className="slide-list pl-4 md:pl-8">
                    <li>{lang.tecnologies.icon6}</li>
                    <li>{lang.tecnologies.icon7}</li>
                    <li>{lang.tecnologies.icon8}</li>
                    <li>{lang.tecnologies.icon9}</li>
                    <li>{lang.tecnologies.icon10}</li>
                  </ul>
                </div>
                <br />
                <h5 className="font-extrabold uppercase title-res1 text-xl text-center">
                  {lang.tecnologies.text2}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="webs" className="mb-2">
        <div className="container grid w-10/12 pt-12 md:py-12">
          <div className="md:text-center md:w-11/12 justify-self-center">
            <h2 className="text-[2.5rem] leading-none md:text-5xl font-extrabold uppercase text-center mb-10 title-res">
              <span
                className="text-whiteItis heading-shadow double-text"
                data-text={lang.webs.title2}
              >
                {lang.webs.title1}
              </span>{" "}
            </h2>
            <p className="mb-6 md:mb-20 text-center">{lang.webs.text1}<strong>{lang.webs.text2}</strong>{lang.webs.text3}</p>
            <div className="md:grid">
              <WebsIcon
                desc={lang.webs.icon1}
                timeline
              >
                <div className="normalIcon w-[500px]">
                  <Image src={WebIcon} alt="x" layout="fill" />
                </div>
                <div className="fillIcon">
                  <Image src={WebIcon} alt="x" layout="fill" />
                </div>
              </WebsIcon>
            </div>
          </div>
        </div>
      </section>
      <section id="partnership" className="mb-6">
        <div className="container w-10/12 py-12">
          <div className="text-center md:w-12/12 mb-20">
            <h2
              className="text-whiteItis heading-shadow double-text text-center text-5xl font-extrabold uppercase mb-10 title-res"
              data-text={lang.partnership.title1}
            >
              {lang.partnership.title1}
            </h2>
          </div>
          <div className="hidden md:grid grid-cols-4 lg:grid-cols-4">
            <div className="logos-customer">
              <div className="w-[70%]">
                <Image src={Kapitallogo} alt="x" layout="responsive" />
              </div>
            </div>
            <div className="logos-customer">
              <div className="w-[70%]">
                <Image src={Konvozlogo} alt="x" layout="responsive" />
              </div>
            </div>
            <div className="logos-customer">
              <div className="w-[70%]">
                <Image src={Italenttlogo} alt="x" layout="responsive" />
              </div>
            </div>
            <div className="logos-customer">
              <div className="w-[70%]">
                <Image src={Parchelogo} alt="x" layout="responsive" />
              </div>
            </div>
          </div>
          <div className="hidden md:grid grid-cols-4 mb-6 lg:grid-cols-4">
            <div className="logos-customer">
              <div className="w-[70%]">
                <Image src={Gaflogo} alt="x" layout="responsive" />
              </div>
            </div>
            <div className="logos-customer">
              <div className="w-[35%]">
                <Image src={Onixlogo} alt="x" layout="responsive" />
              </div>
            </div>
            <div className="logos-customer">
              <div className="w-[70%]">
                <Image src={Gairalogo} alt="x" layout="responsive" />
              </div>
            </div>
            <div className="logos-customer">
              <div className="w-[70%]">
                <Image src={Global} alt="x" layout="responsive" />
              </div>
            </div>
          </div>
          <Swiper
                slidesPerView={1}
                modules={[Autoplay, Navigation]}
                navigation={navigation}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loop={true}
                loopedSlides={4}
                breakpoints={{
                  768: {
                    spaceBetween: 40,
                    slidesPerView: 1,
                  },
                }}
                className="swiper-nft w-10/12 mb-2 md:my-20 md:hidden lg:hidden"
              >
                <SwiperSlide>
                  <div className="text-center justify-center">
                    <div className="nftItemImg p-5 m-auto w-[70%]">
                      <Image src={Gaflogo} alt={lang.tecnologies.icon5} layout="responsive" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-center justify-center">
                    <div className="nftItemImg p-5 m-auto w-[50%]">
                      <Image src={Onixlogo} alt={lang.tecnologies.icon6} layout="responsive" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-center justify-center">
                    <div className="nftItemImg p-5 m-auto w-[70%]">
                      <Image src={Gairalogo} alt={lang.tecnologies.icon7} layout="responsive" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-center justify-center">
                    <div className="nftItemImg p-5 m-auto w-[70%]">
                      <Image src={Global} alt={lang.tecnologies.icon7} layout="responsive" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-center justify-center">
                    <div className="nftItemImg p-5 m-auto w-[70%]">
                      <Image src={Kapitallogo} alt={lang.tecnologies.icon1} layout="responsive" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-center justify-center">
                    <div className="nftItemImg p-5 m-auto w-[70%]">
                      <Image src={Konvozlogo} alt={lang.tecnologies.icon2} layout="responsive" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-center justify-center">
                    <div className="nftItemImg p-5 m-auto w-[70%]">
                      <Image src={Italenttlogo} alt={lang.tecnologies.icon3} layout="responsive" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-center justify-center">
                    <div className="nftItemImg p-5 m-auto w-[70%]">
                      <Image src={Parchelogo} alt={lang.tecnologies.icon4} layout="responsive" />
                    </div>
                  </div>
                </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section id="proyects" className="mb-2">
        <div className="container w-10/12 py-12">
          <div className="md:w-11/12 mx-auto">
            <h2
              className="text-whiteItis heading-shadow double-text text-center text-5xl font-extrabold uppercase mb-10 title-res"
              data-text={lang.proyects.title1}
            >
              {lang.proyects.title1}
            </h2>

            <div className="flex md:gap-6 h-[60vh] md:h-[80vh]">
              <Swiper
                slidesPerView={3}
                modules={[Pagination]}
                onSwiper={setFirstSwiper}
                direction={"vertical"}
                centeredSlides={true}
                className="verticalSlider w-1/12 md:w-1/3 h-full"
              >
                <SwiperSlide>
                  <div className="verticalSliderItem">
                    <h5
                      onClick={() => {
                        customSlideTo(0);
                      }}
                    >
                      AMI - HEGO
                    </h5>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="verticalSliderItem">
                    <h5
                      onClick={() => {
                        customSlideTo(1);
                      }}
                    >
                      ONIX
                    </h5>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="verticalSliderItem">
                    <h5
                      onClick={() => {
                        customSlideTo(2);
                      }}
                    >
                      KONVOZ
                    </h5>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="verticalSliderItem">
                    <h5
                      onClick={() => {
                        customSlideTo(3);
                      }}
                    >
                      ITALENTT
                    </h5>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="verticalSliderItem">
                    <h5
                      onClick={() => {
                        customSlideTo(4);
                      }}
                    >
                      BULDING
                    </h5>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="verticalSliderItem">
                    <h5
                      onClick={() => {
                        customSlideTo(5);
                      }}
                    >
                      KAPITAL
                    </h5>
                  </div>
                </SwiperSlide>
              </Swiper>
              <Swiper
                slidesPerView={1}
                modules={[Pagination]}
                onSwiper={setSecondSwiper}
                direction={"vertical"}
                className="w-10/12 md:w-3/3 h-full mt-12"
                allowTouchMove={false}
              >
                <SwiperSlide>
                  <div className="grid w-10/12 py-2">
                    <div className="h-full w-full">
                      <Image src={Gaf} alt="GAF" />
                    </div>
                    <p className="text-center md:text-center mt-4">
                      <strong>{lang.proyects.gaf1}</strong>{lang.proyects.gaf2}<strong>{lang.proyects.gaf3}</strong> {lang.proyects.gaf4}
                      <br />
                      <br />
                      <Link
                        href="https://gafsolutions.co/welcome"
                        passHref
                      >
                        <a className="font-extrabold uppercase" target="_blank" rel="noreferrer">
                          {lang.proyects.gaf5}
                        </a>
                      </Link>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="grid w-10/12 py-2">
                    <div className="h-full w-full">
                      <Image src={Onix} alt="ONIX" />
                    </div>
                    <p className="text-center md:text-center mt-4">
                      {lang.proyects.onix1}<strong>{lang.proyects.onix2}</strong>{lang.proyects.onix3}<strong>{lang.proyects.onix4}</strong>
                      <br />
                      <br />
                      <Link
                        href="https://onixmoto.com"
                        passHref
                      >
                        <a className="font-extrabold uppercase" target="_blank" rel="noreferrer">
                          {lang.proyects.onix5}
                        </a>
                      </Link>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="grid w-10/12 py-2">
                    <div className="h-full w-full">
                      <Image src={Konvoz} alt="KONVOZ" />
                    </div>
                    <p className="text-center md:text-center mt-4">
                      {lang.proyects.konv1}<strong>{lang.proyects.konv2}</strong>{lang.proyects.konv3}
                      <br />
                      <br />
                      <Link
                        href="https://konvoz.co"
                        passHref
                      >
                        <a className="font-extrabold uppercase" target="_blank" rel="noreferrer">
                          {lang.proyects.konv4}
                        </a>
                      </Link>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="grid w-10/12 py-2">
                    <div className="h-full w-full">
                      <Image src={Italentt} alt="ITALENTT" />
                    </div>
                    <p className="text-center md:text-center mt-4">
                      <strong>{lang.proyects.ita1}</strong>{lang.proyects.ita2}<strong>{lang.proyects.ita3}</strong>
                      <br />
                      <br />
                      <Link
                        href="https://italentt.com/"
                        passHref
                      >
                        <a className="font-extrabold uppercase" target="_blank" rel="noreferrer">
                          {lang.proyects.ita4}
                        </a>
                      </Link>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="grid w-10/12 py-2">
                    <div className="h-full w-full">
                      <Image src={Build} alt="BUILDING" />
                    </div>
                    <p className="text-center md:text-center mt-4">
                      {lang.proyects.build1}<strong>{lang.proyects.build2}</strong>{lang.proyects.build3}
                      <br />
                      <br />
                      <Link
                        href="https://apps.apple.com/tt/app/building-now/id1608376082"
                        passHref
                      >
                        <a className="font-extrabold uppercase" target="_blank" rel="noreferrer">
                          {lang.proyects.build4}
                        </a>
                      </Link>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="grid w-10/12 py-2">
                    <div className="h-full w-full">
                      <Image src={Kapital} alt="KAPITALBANK" />
                    </div>
                    <p className="text-center md:text-center mt-4">
                      <strong>{lang.proyects.kapit1}</strong>{lang.proyects.kapit2}<strong>{lang.proyects.kapit3}</strong>{lang.proyects.kapit4}
                      <br />
                      <br />
                      {/* <Link
                        href="https://gafsolutions.co/welcome"
                        passHref
                      >
                        <a className="font-extrabold uppercase" target="_blank" rel="noreferrer">
                          Conocer mas...
                        </a>
                      </Link> */}
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section id="team" className="mb-4">
        <div className="container w-10/12 py-12">
          <h2 className="md:hidden block text-white heading-shadow text-5xl font-extrabold text-center uppercase mb-10 md:mb-14 title-res double-text">
            <span className="text-whiteItis heading-shadow double-text"
              data-text={lang.team.title1}
            >
              {lang.team.title1}
            </span>{" "}
            <br />
            <span className="text-whiteItis heading-shadow double-text"
              data-text={lang.team.title2}
            >
              {lang.team.title2}
            </span>{" "}
          </h2>
          <h2 className="hidden md:block text-white heading-shadow text-5xl font-extrabold text-center uppercase mb-10 md:mb-14 title-res double-text">
            <span className="text-whiteItis heading-shadow double-text"
              data-text={lang.team.title1}
            >
              {lang.team.title1}
            </span>{" "}
            <span className="text-whiteItis heading-shadow double-text"
              data-text={lang.team.title2}
            >
              {lang.team.title2}
            </span>{" "}
          </h2>
          <div className="w-full block overflow-hidden">
            <div className="flex justify-self-center w-12/12 pt-4">
              <div className="hidden md:block h-full m-auto">
                <Image src={Team} alt="DEVTEAM" />
              </div>
              <div className="md:hidden h-full m-auto">
                <Image src={TeamRes} alt="DEVTEAM" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="location" className="mb-6">
        <div className="container grid w-10/12 py-12">
          <div className="text-center md:w-11/12 mx-auto">
            <h2 className="text-[2.5rem] leading-none md:text-5xl font-extrabold uppercase mb-10 title-res">
              <span
                className="text-whiteItis heading-shadow double-text"
                data-text={lang.location.title1}
              >
                {lang.location.title1}
              </span>{" "}
              <span
                className="text-whiteItis heading-shadow double-text"
                data-text={lang.location.title2}
              >
                {lang.location.title2}
              </span>
            </h2>
            <p className="mb-8">
              {lang.location.text1}{" "}
              <strong className="text-turquoise font-bold">
                {lang.location.text2}
              </strong>{" "}
              {lang.location.text3}
            </p>
            <div className="tokenomics">
              <div className="tokenomicsItem">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.755482276344!2d-74.07060748475915!3d4.6376546434911745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a31cb17ac31%3A0x723ae84110f12aa1!2sCl.%2050%20%2315-45%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1677028150102!5m2!1ses!2sco" width="250" height="180" loading="lazy" className="border-map"></iframe>
              </div>
              <div className="">
                <div className="block mt-6 md:grid grid-cols-1 md:mt-6">
                  <h5 className="font-extrabold title-res text-2xl text-center mb-2">
                    {lang.location.sub1}
                  </h5>
                  <p className="text-center mb-2">
                    <span className="tokenomicsItemText">
                      {lang.location.data3}
                    </span>
                  </p>
                  <p className="text-center mb-2">
                    <span className="tokenomicsItemText">
                      {lang.location.data1}
                    </span>
                  </p>
                  <p className="text-center">
                    <span className="tokenomicsItemText">
                      {lang.location.data2}
                    </span>
                  </p>
                  <div className="flex gap-2 md:gap-4 items-center justify-center col-span-3 md:col-span-1 mt-4">
                    <a href="https://www.facebook.com/Dinolabs-105507425793496" target="_blank" rel="noopener noreferrer">
                      <div className="flex w-7 md:w-9">
                        <Image src={IconFacebook} alt="Logo facebook" />
                      </div>
                    </a>
                    <a href="https://www.instagram.com/dinolabscorp/" target="_blank" rel="noopener noreferrer">
                      <div className="flex w-7 md:w-9">
                        <Image src={IconInstagram} alt="Logo insta" />
                      </div>
                    </a>
                    <a href="https://wa.me/message/L7LHC7UFRGU5N1" target="_blank" rel="noopener noreferrer">
                      <div className="flex w-7 md:w-9">
                        <Image src={IconWha} alt="Logo wha" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
