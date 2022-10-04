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
import NFTItem from "../components/nftItem";
import Header from "../components/header";
import Footer from "../components/footer";

import Bscscan from "../public/bsc-img.png";
import Gempad from "../public/gempad-img.png";
import Wolves from "../public/wolves-img.png";
import Poly from "../public/poly-img.png";

import IconNetwork from "../public/icon-network.png";
import IconNetworkFill from "../public/icon-network-fill.png";
import IconMuseum from "../public/icon-museum.png";
import IconMuseumFill from "../public/icon-museum-fill.png";
import IconMarket from "../public/icon-market.png";
import IconMarketFill from "../public/icon-market-fill.png";
import IconDesigner from "../public/icon-designer.png";
import IconDesignerFill from "../public/icon-designer-fill.png";
import IconArchitects from "../public/icon-architects.png";
import IconArchitectsFill from "../public/icon-architects-fill.png";
import IconNFTcreators from "../public/icon-NFTcreators.png";
import IconNFTcreatorsFill from "../public/icon-NFTcreators-fill.png";
import IconArtist from "../public/icon-artist.png";
import IconArtistFill from "../public/icon-artist-fill.png";
import IconModels from "../public/icon-models.png";
import IconModelsFill from "../public/icon-models-fill.png";
import IconInfluencer from "../public/icon-influencers.png";
import IconInfluencerFill from "../public/icon-influencers-fill.png";
import IconCollectibles from "../public/icon-collectibles.png";
import IconCollectiblesFill from "../public/icon-collectibles-fill.png";
import IconRoyalities from "../public/icon-royalities.png";
import IconRoyalitiesFill from "../public/icon-royalities-fill.png";
import IconWallets from "../public/icon-wallets.png";
import IconWalletsFill from "../public/icon-wallets-fill.png";
import IconBids from "../public/icon-bids.png";
import IconBidsFill from "../public/icon-bids-fill.png";
import IconHistory from "../public/icon-history.png";
import IconHistoryFill from "../public/icon-history-fill.png";
import IconProfile from "../public/icon-profile.png";
import IconProfileFill from "../public/icon-profile-fill.png";
import IconHolders from "../public/icon-holders.png";
import IconHoldersFill from "../public/icon-holders-fill.png";
import IconBurn from "../public/icon-burn.png";
import IconBurnFill from "../public/icon-burn-fill.png";
import IconLp from "../public/icon-lp.png";
import IconLpFill from "../public/icon-lp-fill.png";
import IconPrev from "../public/arrow-prev.svg";
import IconNext from "../public/arrow-next.svg";
import IconCopy from "../public/icon-copy.svg";
import IconLinkedIn from "../public/icon-linkedin.png";

import animationMetaverse1 from "../public/lottie/Animacióntransp.json";
import animationWhatis from "../public/lottie/BoxesTransparent2.json";
import animationMetanetwork from "../public/lottie/MetaNetwork.json";
import animationMarket from "../public/lottie/marketplace.json";
import animationMonkey from "../public/lottie/NFT1.json";

import LogoPancakeSwap from "../public/logo-pancakeswap.png";
import LogoMetaMask from "../public/logo-meta-mask.svg";
import LogoTrustWallet from "../public/logo-trust-wallet.svg";
import LogoBinanceChain from "../public/logo-binance-chain.svg";
import Pictorial from "../public/pictoral.png";
import Escultura from "../public/escultura.png";
import Teatro from "../public/teatro.png";
import Musica from "../public/musica.png";

import TeamGiovanny from "../public/members/Giovanny.jpg";
import TeamMauricio from "../public/members/Mauricio.jpg";
import TeamPauline from "../public/members/Pauline.jpg";

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

  const copyText = () => {
    const el = document.getElementById("hash");
    const selection = document.createRange();
    selection.selectNodeContents(el);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(selection);
    const res = document.execCommand("copy");
    window.getSelection().removeRange(selection);

    if (res) {
      alert(locales[locale].copied);
    } else {
      alert(locales[locale].copyError);
    }
  };
  const copyText2 = () => {
    const el = document.getElementById("hash2");
    const selection = document.createRange();
    selection.selectNodeContents(el);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(selection);
    const res = document.execCommand("copy");
    window.getSelection().removeRange(selection);

    if (res) {
      alert(locales[locale].copied);
    } else {
      alert(locales[locale].copyError);
    }
  };

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
      <section id="about" className="mb-0 md:mb-10 mt-8">
        <div className="container w-10/12 grid grid-cols-1 md:grid-cols-2 gap-4 pt-8 md:py-12 items-center">
          <div>
            <h2 className="text-center md:text-left text-5xl font-extrabold uppercase mb-10 title-res">
              <span
                className="text-white heading-shadow double-text"
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
            <p className="mb-6 text-center md:text-justify">
              {lang.about.text1}{" "}
              <strong className="text-white font-bold">
                {lang.about.text2}
              </strong>{" "}
              {lang.about.text3}
            </p>
            <p
              className="cursor-pointer text-center md:text-left"
              onClick={copyText}
            >
              {lang.about.text4} <br />
              <strong
                id="hash"
                className="text-white font-contract font-bold mr-2 hover:underline"
              >
                0x1B98f4B4BF431B540bc766C16a5B70e392fcc9aB
              </strong>
              <span className="inline-block w-4">
                <Image src={IconCopy} alt="Copy Icon" />
              </span>
            </p>
            <p className="text-center pt-12">
              <Link href="https://gempad.app/presale/0xbB4b7d130908Dc1F6FAc0F86513C28C0b096F6B6?chainId=56" passHref>
                <a className="button-buy mb-2" target="_blank" rel="noreferrer">
                  PRESALE
                </a>              
              </Link>
            </p>
          </div>
          <div className="flex justify-self-center 2xl:justify-self-end w-12/12 pt-8 img-size">
            <Lottie
              options={{ animationData: animationWhatis, ...defaultOptions }}
            ></Lottie>
          </div>
        </div>
      </section>
      <section id="ecosystem" className="mb-10">
        <div className="container grid w-10/12 py-12">
          <div className="text-center md:w-11/12 mb-6 md:mb-16 justify-self-center">
            <h2
              data-text={lang.metaverse.title1}
              className="text-5xl font-extrabold text-white uppercase heading-shadow double-text mb-10 title-res"
            >
              {lang.metaverse.title1}
            </h2>
            <p className="text-center md:text-center mb-6">{lang.metaverse.text1}</p>
            <div className="w-full md:w-5/12 flex md:hidden items-center justify-center relative mb-6">
              <div
                className={`blurredCircle bg-turquoise animate__animated animate__pulse animate__slow animate__infinite	infinite`}
              ></div>
              <Lottie options={{animationData:animationMonkey, ...defaultOptions}}></Lottie>
            </div>
            <h3 className="text-turquoise text-shadow text-2xl font-bold uppercase heading-shadow pt-4">
              {lang.metaverse.text2}
            </h3>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-4">
            <div className="w-4/12 hidden md:flex items-center justify-center relative img-metaverse">
              <div
                className={`blurredCircle bg-turquoise animate__animated animate__pulse animate__slow animate__infinite	infinite`}
              ></div>
              <Lottie
                options={{
                  animationData: animationMetaverse1,
                  ...defaultOptions,
                }}
              ></Lottie>
            </div>
            <div className="w-8/12 md:w-4/12 mx-auto flex flex-col justify-center">
              <VerticalIcon className="mb-6" text={lang.metaverse.icon1}>
                <div className="normalIcon">
                  <Image src={IconNetwork} alt="x" layout="fill"/>
                </div>
                <div className="fillIcon">
                  <Image src={IconNetworkFill} alt="x" layout="fill" />
                </div>
              </VerticalIcon>
              <VerticalIcon className="mb-6" text={lang.metaverse.icon2}>
                <div className="normalIcon">
                  <Image src={IconMarket} alt="x" layout="fill" />
                </div>
                <div className="fillIcon">
                  <Image src={IconMarketFill} alt="x" layout="fill" />
                </div>
              </VerticalIcon>
              <VerticalIcon text={lang.metaverse.icon3}>
                <div className="normalIcon">
                  <Image src={IconMuseum} alt="x" layout="fill" />
                </div>
                <div className="fillIcon">
                  <Image src={IconMuseumFill} alt="x" layout="fill" />
                </div>
              </VerticalIcon>
            </div>
            <div className="w-full md:w-4/12 hidden md:flex items-center justify-center relative p-2">
              <div
                className={`blurredCircle bg-turquoise animate__animated animate__pulse animate__slow animate__infinite	infinite`}
              ></div>
              <Lottie options={{animationData:animationMonkey, ...defaultOptions}}></Lottie>
            </div>
          </div>
        </div>
      </section>
      <section id="socialmetanetwork" className="mb-12">
        <div className="container w-10/12 grid grid-cols-1 gap-4 py-10 items-center">
          <div>
            <h2 className="md:hidden text-[2.3rem] leading-none font-extrabold uppercase text-center mb-10 title-res1">
              <span
                className="text-white heading-shadow double-text-extra"
                data-text="DORUM"
              >
                {lang.metanetwork.title1}
              </span>{" "}
              <br />
              <span
                className="text-white heading-shadow double-text-extra"
                data-text="Professional"
              >
                {lang.metanetwork.title2}
              </span>
              <span
                className="text-white2 heading-shadow double-text-extra"
                data-text="Network"
              >
                {lang.metanetwork.title3}
              </span>
            </h2>
            <h2 className="hidden md:block text-5xl font-extrabold uppercase text-center mb-10">
              <span
                className="text-white heading-shadow double-text front-letter"
                data-text={lang.metanetwork.title1}
              >
                {lang.metanetwork.title1}
              </span>{" "}
              <br />
              <span
                className="text-white heading-shadow double-text front-letter"
                data-text={lang.metanetwork.title2}
              >
                {lang.metanetwork.title2}
              </span>{" "}
              <span
                className="text-white1 heading-shadow double-text front-letter"
                data-text={lang.metanetwork.title3}
              >
                {lang.metanetwork.title3}
              </span>
            </h2>
            <div className="md:pl-6">
              <p className="mb-6 md:mb-8 text-center">
                {lang.metanetwork.text1}
              </p>
              <div className="hidden md:block">
                <div className="grid md:grid-cols-2">
                  <VerticalIcon text={lang.metanetwork.icon1}>
                    <div className="normalIcon">
                      <Image src={IconDesigner} alt="x" layout="fill"/>
                    </div>
                    <div className="fillIcon">
                      <Image src={IconDesignerFill} alt="x" layout="fill" />
                    </div>
                  </VerticalIcon>
                  <VerticalIcon text={lang.metanetwork.icon2}>
                    <div className="normalIcon">
                      <Image src={IconArchitects} alt="Architects Icon" layout="fill" />
                    </div>
                    <div className="fillIcon">
                      <Image
                        src={IconArchitectsFill}
                        alt="Architects Icon Fill"
                        layout="fill"
                      />
                    </div>
                  </VerticalIcon>
                </div>
              </div>
              <div className="hidden md:block md:mt-[80px]">
                <div className="grid md:grid-cols-3">
                  <VerticalIcon text={lang.metanetwork.icon3}>
                    <div className="normalIcon">
                      <Image src={IconNFTcreators} alt="x" layout="fill" />
                    </div>
                    <div className="fillIcon">
                      <Image src={IconNFTcreatorsFill} alt="x" layout="fill" />
                    </div>
                  </VerticalIcon>
                  <div className="hidden md:block text-center mb-4 md:mb-0 md:p-0 w-12/12 width-md">
                    <Lottie
                      options={{
                        animationData: animationMetanetwork,
                        ...defaultOptions,
                      }}
                    ></Lottie>
                  </div>
                  <VerticalIcon text={lang.metanetwork.icon5}>
                    <div className="normalIcon">
                      <Image src={IconModels} alt="x" layout="fill"/>
                    </div>
                    <div className="fillIcon1">
                      <Image src={IconModelsFill} alt="x" layout="fill" />
                    </div>
                  </VerticalIcon>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="grid md:grid-cols-2 md:mt-10">
                <VerticalIcon className="mb-6 pl-[130px]" text={lang.metanetwork.icon4}>
                    <div className="normalIcon">
                      <Image src={IconArtist} alt="x" layout="fill" />
                    </div>
                    <div className="fillIcon">
                      <Image src={IconArtistFill} alt="x" layout="fill" />
                    </div>
                  </VerticalIcon>
                  <VerticalIcon className="mb-6 pr-[130px]" text={lang.metanetwork.icon6}>
                    <div className="normalIcon">
                      <Image src={IconInfluencer} alt="x" layout="fill" />
                    </div>
                    <div className="fillIcon">
                      <Image src={IconInfluencerFill} alt="x" layout="fill" />
                    </div>
                  </VerticalIcon>
                </div>
              </div>
              <div className="md:hidden mb-6">
                <Lottie
                  options={{
                    animationData: animationMetanetwork,
                    ...defaultOptions,
                  }}
                ></Lottie>
              </div>
              <div className="md:hidden">
                <div className="grid grid-cols-3 md:grid-cols-6">
                  <VerticalIcon className="mb-6" text={lang.metanetwork.icon1}>
                    <div className="normalIcon">
                      <Image src={IconDesigner} alt="x" layout="fill" />
                    </div>
                    <div className="fillIcon">
                      <Image src={IconDesignerFill} alt="x" layout="fill" />
                    </div>
                  </VerticalIcon>
                  <VerticalIcon className="mb-6" text={lang.metanetwork.icon2}>
                    <div className="normalIcon">
                      <Image src={IconArchitects} alt="Architects Icon" layout="fill" />
                    </div>
                    <div className="fillIcon">
                      <Image
                        src={IconArchitectsFill}
                        alt="Architects Icon Fill"
                        layout="fill"
                      />
                    </div>
                  </VerticalIcon>
                  <VerticalIcon className="mb-6" text={lang.metanetwork.icon3}>
                    <div className="normalIcon">
                      <Image src={IconNFTcreators} alt="x" layout="fill" />
                    </div>
                    <div className="fillIcon">
                      <Image src={IconNFTcreatorsFill} alt="x" layout="fill" />
                    </div>
                  </VerticalIcon>
                  <VerticalIcon className="mb-6" text={lang.metanetwork.icon4}>
                    <div className="normalIcon">
                      <Image src={IconArtist} alt="x" layout="fill" />
                    </div>
                    <div className="fillIcon">
                      <Image src={IconArtistFill} alt="x" />
                    </div>
                  </VerticalIcon>
                  <VerticalIcon className="mb-6" text={lang.metanetwork.icon5}>
                    <div className="normalIcon">
                      <Image src={IconModels} alt="x" layout="fill" />
                    </div>
                    <div className="fillIcon">
                      <Image src={IconModelsFill} alt="x" layout="fill" />
                    </div>
                  </VerticalIcon>
                  <VerticalIcon className="mb-6" text={lang.metanetwork.icon6}>
                    <div className="normalIcon">
                      <Image src={IconInfluencer} alt="x" layout="fill" />
                    </div>
                    <div className="fillIcon">
                      <Image src={IconInfluencerFill} alt="x" layout="fill" />
                    </div>
                  </VerticalIcon>
                </div>
              </div>
              <p className="text-center text-turquoise text-shadow text-2xl font-bold uppercase">
                {lang.metanetwork.text2}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="marketplace" className="mb-8">
        <div className="container grid w-10/12 py-12">
          <div className="md:text-center md:w-11/12 justify-self-center">
            <h2 className="text-[2.5rem] leading-none md:text-5xl font-extrabold uppercase text-center mb-10 title-res1">
              <span
                className="text-white heading-shadow double-text"
                data-text="DORUM NFT"
              >
                {lang.marketplace.title1}
              </span>{" "}
              <br />
              <span
                className="text-whiteItis heading-shadow double-text"
                data-text="Marketplace"
              >
                {lang.marketplace.title2}
              </span>
            </h2>
            <p className="mb-2 text-center">{lang.marketplace.text1}</p>
            <div className="mb-2 py-4 md:py-6">
              <Lottie
                options={{ animationData: animationMarket, ...defaultOptions }}
              ></Lottie>
            </div>
            <p className="mb-8 text-center">{lang.marketplace.text2}</p>
            <h3 className="text-center text-turquoise text-shadow text-2xl font-extrabold uppercase mb-12">
              {lang.marketplace.subtitle1}
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-6">
              <VerticalIcon text={lang.marketplace.icon1}>
                <div className="normalIcon w-[500px]">
                  <Image src={IconCollectibles} alt="x" layout="fill" />
                </div>
                <div className="fillIcon">
                  <Image src={IconCollectiblesFill} alt="x"  layout="fill"/>
                </div>
              </VerticalIcon>
              <VerticalIcon text={lang.marketplace.icon2}>
                <div className="normalIcon">
                  <Image src={IconRoyalities} alt="x" layout="fill" />
                </div>
                <div className="fillIcon">
                  <Image src={IconRoyalitiesFill} alt="x"layout="fill"  />
                </div>
              </VerticalIcon>
              <VerticalIcon text={lang.marketplace.icon3}>
                <div className="normalIcon">
                  <Image src={IconWallets} alt="x" layout="fill" />
                </div>
                <div className="fillIcon">
                  <Image src={IconWalletsFill} alt="x" layout="fill" />
                </div>
              </VerticalIcon>
              <VerticalIcon text={lang.marketplace.icon4}>
                <div className="normalIcon">
                  <Image src={IconBids} alt="x" layout="fill" />
                </div>
                <div className="fillIcon">
                  <Image src={IconBidsFill} alt="x" layout="fill" />
                </div>
              </VerticalIcon>
              <VerticalIcon text={lang.marketplace.icon5}>
                <div className="normalIcon">
                  <Image src={IconHistory} alt="x" layout="fill" />
                </div>
                <div className="fillIcon">
                  <Image src={IconHistoryFill} alt="x" layout="fill" />
                </div>
              </VerticalIcon>
              <VerticalIcon text={lang.marketplace.icon6}>
                <div className="normalIcon">
                  <Image src={IconProfile} alt="x" layout="fill" />
                </div>
                <div className="fillIcon">
                  <Image src={IconProfileFill} alt="x" layout="fill" />
                </div>
              </VerticalIcon>
            </div>
          </div>
        </div>
      </section>
      <section id="virtualmuseum" className="mb-10">
        <div className="container w-10/12 py-12">
          <div className="text-center md:w-11/12 mx-auto">
            <h2 className="text-5xl font-extrabold uppercase mb-14 title-res">
              <span
                className="text-white heading-shadow double-text"
                data-text={lang.museum.title1}
              >
                {lang.museum.title1}
              </span>{" "}
              <br />
              <span
                className="text-whiteItis heading-shadow double-text"
                data-text={lang.museum.title2}
              >
                {lang.museum.title2}
              </span>{" "}
              <span
                className="text-whiteItis heading-shadow double-text"
                data-text={lang.museum.title3}
              >
                {lang.museum.title3}
              </span>
            </h2>
            <p className="mb-6">{lang.museum.text1}</p>
            <h3 className="text-turquoise text-shadow text-2xl font-extrabold uppercase">
              {lang.museum.subtitle1}
            </h3>
          </div>
          <div className="w-full relative overflow-hidden">
            <div className="flex justify-between items-center w-full h-full absolute">
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
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              loopedSlides={4}
              breakpoints={{
                768: {
                  spaceBetween: 30,
                  slidesPerView: 4,
                },
              }}
              className="swiper-nft w-10/12 mb-14 md:my-20"
            >
              <SwiperSlide>
                <div className="text-center justify-center">
                  <div className="nftItemImg p-5 md:p-0 w-full">
                    <Image src={Pictorial} alt={lang.museum.icon1} layout="responsive" />
                  </div>
                  <h4 className="nftItemText font-bold">{lang.museum.icon1}</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="text-center flex-col justify-center">
                  <div className="nftItemImg p-5 md:p-0 w-full">
                    <Image src={Escultura} alt={lang.museum.icon2} layout="responsive" />
                  </div>
                  <h4 className="nftItemText font-bold">{lang.museum.icon2}</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="text-center">
                  <div className="nftItemImg p-5 md:p-0 w-full">
                    <Image src={Teatro} alt={lang.museum.icon3} layout="responsive" />
                  </div>
                  <h4 className="nftItemText font-bold">{lang.museum.icon3}</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="text-center">
                  <div className="nftItemImg p-5 md:p-0 w-full">
                    <Image src={Musica} alt={lang.museum.icon4} layout="responsive" />
                  </div>
                  <h4 className="nftItemText font-bold">{lang.museum.icon4}</h4>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <p className="text-center">{lang.museum.text2}</p>
        </div>
      </section>
      <section id="roadmap" className="mb-10">
        <div className="container w-10/12 py-12">
          <div className="md:w-11/12 mx-auto">
            <h2
              className="text-white heading-shadow double-text text-center text-5xl font-extrabold uppercase mb-10 title-res"
              data-text={lang.roadmap.title1}
            >
              {lang.roadmap.title1}
              <span
                className="text-whiteItis heading-shadow double-text"
                data-text={lang.roadmap.title2}
              >
                {lang.roadmap.title2}
              </span>
            </h2>

            <div className="flex md:gap-6 h-[60vh] md:h-[70vh]">
              <Swiper
                slidesPerView={3}
                modules={[Pagination]}
                onSwiper={setFirstSwiper}
                direction={"vertical"}
                centeredSlides={true}
                className="verticalSlider w-2/12 md:w-1/3 h-full"
              >
                <SwiperSlide>
                  <div className="verticalSliderItem">
                    <h5
                      onClick={() => {
                        customSlideTo(0);
                      }}
                    >
                      PHASE 1. 
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
                      PHASE 2. 
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
                      PHASE 3. 
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
                      PHASE 4. 
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
                      PHASE 1. 
                    </h5>
                  </div>
                </SwiperSlide>
              </Swiper>
              <Swiper
                slidesPerView={1}
                modules={[Pagination]}
                onSwiper={setSecondSwiper}
                direction={"vertical"}
                className="w-10/12 md:w-2/3 h-full"
                allowTouchMove={false}
              >
                <SwiperSlide>
                  <div className="slide-content">
                    <ul className="slide-list">
                      <li>{lang.roadmap.y2022.Q1.item1}</li>
                      <li>{lang.roadmap.y2022.Q1.item2}</li>
                      <li>{lang.roadmap.y2022.Q1.item3}</li>
                      <li>{lang.roadmap.y2022.Q1.item4}</li>
                      <li>{lang.roadmap.y2022.Q1.item5}</li>
                    </ul>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-content">
                    <ul className="slide-list">
                      <li>{lang.roadmap.y2022.Q2.item1}</li>
                      <li>{lang.roadmap.y2022.Q2.item2}</li>
                      <li>{lang.roadmap.y2022.Q2.item3}</li>
                      <li>{lang.roadmap.y2022.Q2.item4}</li>
                      <li>{lang.roadmap.y2022.Q2.item5}</li>
                    </ul>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-content">
                    <ul className="slide-list">
                      <li>{lang.roadmap.y2022.Q3.item1}</li>
                      <li>{lang.roadmap.y2022.Q3.item2}</li>
                      <li><b>{lang.roadmap.y2022.Q3.item3}</b></li>
                      <li>{lang.roadmap.y2022.Q3.item4}</li>
                      <li>{lang.roadmap.y2022.Q3.item5}</li>
                      <li><b>{lang.roadmap.y2022.Q3.item6}</b></li>
                      <li>{lang.roadmap.y2022.Q3.item7}</li>
                      <li>{lang.roadmap.y2022.Q3.item8}</li>
                      <li><b>{lang.roadmap.y2022.Q3.item9}</b></li>
                    </ul>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-content">
                    <ul className="slide-list">
                      <li>{lang.roadmap.y2022.Q4.item1}</li>
                      <li>{lang.roadmap.y2022.Q4.item2}</li>
                      <li>{lang.roadmap.y2022.Q4.item3}</li>
                      <li>{lang.roadmap.y2022.Q4.item4}</li>
                      <li>{lang.roadmap.y2022.Q4.item5}</li>
                    </ul>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-content">
                    <ul className="slide-list">
                      <li>{lang.roadmap.y2023.Q1.item1}</li>
                      <li>{lang.roadmap.y2023.Q1.item2}</li>
                      <li>{lang.roadmap.y2023.Q1.item3}</li>
                      <li>{lang.roadmap.y2023.Q1.item4}</li>
                      <li>{lang.roadmap.y2023.Q1.item5}</li>
                    </ul>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section id="partnership" className="mb-10">
        <div className="container w-10/12 py-12">
          <div className="text-center md:w-11/12 mx-auto">
            <h2
              className="text-white heading-shadow double-text text-center text-5xl font-extrabold uppercase mb-10 title-resPart"
              data-text={lang.partnership.title1}
            >
              {lang.partnership.title1}
              <span
                className="text-whiteItis heading-shadow double-text"
                data-text={lang.partnership.title2}
              >
                {lang.partnership.title2}
              </span>
            </h2>
          </div>
          <div className="w-full relative overflow-hidden">
            <div className="flex justify-between items-center w-full h-full absolute">
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
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              loopedSlides={4}
              breakpoints={{
                768: {
                  spaceBetween: 30,
                  slidesPerView: 4,
                },
              }}
              className="swiper-nft w-10/12 mb-14 md:my-10"
            >
              <SwiperSlide>
                <div className="text-center justify-center">
                  <div className="nftItemImg p-5 md:p-0 w-full">
                    <Image src={Bscscan} alt={lang.museum.icon1} layout="responsive" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="text-center flex-col justify-center">
                  <div className="nftItemImg p-5 md:p-0 w-full">
                    <Image src={Gempad} alt={lang.museum.icon2} layout="responsive" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="text-center">
                  <div className="nftItemImg p-5 md:p-0 w-full">
                    <Image src={Wolves} alt={lang.museum.icon3} layout="responsive" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="text-center">
                  <div className="nftItemImg p-5 md:p-0 w-full">
                    <Image src={Poly} alt={lang.museum.icon4} layout="responsive" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section id="whydorum" className="mb-8">
        <div className="container grid w-10/12 py-12">
          <div className="text-center md:w-11/12 mx-auto mb-10">
            <h2 className="text-5xl font-extrabold uppercase mb-10 title-res">
              <span
                className="text-white heading-shadow double-text"
                data-text={lang.whydorum.title1}
              >
                {lang.whydorum.title1}
              </span>{" "}
              <span
                className="text-whiteItis heading-shadow double-text"
                data-text={lang.whydorum.title2}
              >
                {lang.whydorum.title2}
              </span>
            </h2>
            <p>{lang.whydorum.text1}</p>
          </div>
          <div className="grid grid-cols-3 grid-rows-1 gap-4 md:w-10/12 mx-auto relative md:pt-24">
            <VerticalIcon
              text={lang.whydorum.titleicon1}
              desc={lang.whydorum.icon1}
              timeline
            >
              <div className="normalIcon">
                <Image src={IconHolders} alt="x" layout="fill"/>
              </div>
              <div className="fillIcon">
                <Image src={IconHoldersFill} alt="x" layout="fill" />
              </div>
            </VerticalIcon>
            <VerticalIcon
              text={lang.whydorum.titleicon2}
              desc={lang.whydorum.icon2}
              timeline
            >
              <div className="normalIcon">
                <Image src={IconBurn} alt="x" layout="fill" />
              </div>
              <div className="fillIcon">
                <Image src={IconBurnFill} alt="x" layout="fill" />
              </div>
            </VerticalIcon>
            <VerticalIcon
              text={lang.whydorum.titleicon3}
              desc={lang.whydorum.icon3}
              timeline
            >
              <div className="normalIcon">
                <Image src={IconLp} alt="x" layout="fill" />
              </div>
              <div className="fillIcon">
                <Image src={IconLpFill} alt="x" layout="fill" />
              </div>
            </VerticalIcon>
          </div>
        </div>
      </section>
      <section id="tokenomics" className="mb-8">
        <div className="container grid w-10/12 py-12">
          <div className="text-center md:w-11/12 mx-auto">
            <h2 className="text-[2.5rem] leading-none md:text-5xl font-extrabold uppercase mb-10 title-res">
              <span
                className="text-white heading-shadow double-text"
                data-text={lang.tokenfee.title1}
              >
                {lang.tokenfee.title1}
              </span>{" "}
              <span
                className="text-whiteItis heading-shadow double-text"
                data-text={lang.tokenfee.title2}
              >
                {lang.tokenfee.title2}
              </span>
            </h2>
            <p className="mb-8">
              {lang.tokenfee.text1}{" "}
              <strong className="text-turquoise font-bold">
                {lang.tokenfee.text2}
              </strong>{" "}
              {lang.tokenfee.text3}
            </p>
            <div className="tokenomics mb-8">
              <div className="tokenomicsItem">
                <p className="text-center">
                  <span className="tokenomicsItemPercentage">2%</span>
                  <span className="tokenomicsItemText">
                    {lang.tokenfee.icon1}
                  </span>
                </p>
              </div>
              <div className="tokenomicsItem">
                <p className="text-center">
                  <span className="tokenomicsItemPercentage">3%</span>
                  <span className="tokenomicsItemText">
                    {lang.tokenfee.icon2}
                  </span>
                </p>
              </div>
              <div className="tokenomicsItem">
                <p className="text-center">
                  <span className="tokenomicsItemPercentage">2%</span>
                  <span className="tokenomicsItemText">
                    {lang.tokenfee.icon3}
                  </span>
                </p>
              </div>
              <div className="tokenomicsItem">
                <p className="text-center">
                  <span className="tokenomicsItemPercentage">2%</span>
                  <span className="tokenomicsItemText">
                    {lang.tokenfee.icon4}
                  </span>
                </p>
              </div>
            </div>
            <p>{lang.tokenfee.text4}</p>
          </div>
        </div>
      </section>
      <section id="buy" className="mb-12">
        <div className="container grid w-10/12 py-12">
          <div className="md:text-center md:w-11/12 mx-auto">
            <h2 className="text-center text-5xl font-extrabold uppercase mb-10 title-res">
              <span
                className="text-white heading-shadow double-text"
                data-text={lang.buy.title1}
              >
                {lang.buy.title1}
              </span>{" "}
              <span
                className="text-whiteItis heading-shadow double-text"
                data-text={lang.buy.title2}
              >
                {lang.buy.title2}
              </span>
            </h2>
            <p className="mb-6 text-center">{lang.buy.text1}</p>
            <p className="text-center text-turquoise text-shadow text-1xl md:text-2xl font-bold uppercase mb-6">
              {lang.buy.text2}
            </p>
            <div className="flex w-8/12 md:w-5/12 mx-auto mb-6 p-[20px]">
              <Image src={LogoPancakeSwap} alt="PancakeSwap Logo" />
            </div>
            <p className="text-center">{lang.buy.text3}</p>
          </div>
        </div>
      </section>
      <section id="wallets" className="mb-12">
        <div className="container grid w-10/12 py-12">
          <h2 className="hidden md:block text-5xl font-extrabold uppercase mb-10 text-left md:text-center title-res">
            <span className="text-white heading-shadow double-text" 
            data-text={lang.wallet.title1}
            >
              {lang.wallet.title1}
            </span>{" "}
            <span className="text-white heading-shadow double-text" 
            data-text={lang.wallet.title2}
            >
              {lang.wallet.title2}
            </span>{" "}
            <br />
            <span className="text-whiteItis heading-shadow double-text"
            data-text={lang.wallet.title3}
            >
              {lang.wallet.title3}
            </span>
          </h2>
          <h2 className="md:hidden block text-5xl font-extrabold uppercase mb-10 text-left md:text-center title-res1">
            <span className="text-white heading-shadow double-text" 
            data-text={lang.wallet.title1}
            >
              {lang.wallet.title1}
            </span>{" "}
            <br />
            <span className="text-white heading-shadow double-text" 
            data-text={lang.wallet.title2}
            >
              {lang.wallet.title2}
            </span>{" "}
            <br />
            <span className="text-white1 heading-shadow double-text"
            data-text={lang.wallet.title3}
            >
              {lang.wallet.title3}
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
            <div className="flex md:flex-col gap-4 md:gap-2 md:text-center">
              <div className="flex w-4/12 md:w-full justify-center mb-2 md:mb-0">
                <Image src={LogoMetaMask} alt="x" height={150} />
              </div>
              <div className="w-8/12 md:w-full">
                <span className="font-black block mb-2">
                  {lang.wallet.subtitle1}
                </span>
                <p className="text-[16px] md:text-base px-[15px]">{lang.wallet.text1}</p>
              </div>
            </div>
            <div className="hidden md:block border-l-2 border-turquoise h-3/6 bottom-4 left-[33%] absolute"></div>
            <div className="flex md:flex-col gap-4 md:gap-2 md:text-center">
              <div className="flex w-4/12 md:w-full justify-center mb-2 md:mb-0">
                <Image src={LogoTrustWallet} alt="x" height={150} />
              </div>
              <div className="w-8/12 md:w-full">
                <span className="font-black block mb-2">
                  {lang.wallet.subtitle2}
                </span>
                <p className="text-[16px] md:text-base px-[15px]">{lang.wallet.text2}</p>
              </div>
            </div>
            <div className="hidden md:block border-l-2 border-turquoise h-3/6 bottom-4 left-[66%] absolute"></div>
            <div className="flex md:flex-col gap-4 md:gap-2 md:text-center">
              <div className="flex w-4/12 md:w-full justify-center mb-2 md:mb-0">
                <Image src={LogoBinanceChain} alt="x" height={150} />
              </div>
              <div className="w-8/12 md:w-full">
                <span className="font-black block mb-2">
                  {lang.wallet.subtitle3}
                </span>
                <p className="text-[16px] md:text-base px-[15px]">{lang.wallet.text3}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="team">
        <div className="container w-9/12 py-12">
          <h2 className="md:hidden block text-white heading-shadow text-5xl font-extrabold text-center uppercase mb-10 md:mb-14 title-res double-text">
            <span className="text-white heading-shadow double-text" 
            data-text={lang.team.title1}
            >
              {lang.team.title1}
            </span>{" "}
            <br />
            <span className="text-white heading-shadow double-text" 
            data-text={lang.team.title2}
            >
              {lang.team.title2}
            </span>{" "} 
          </h2>
          <h2 className="hidden md:block text-white heading-shadow text-5xl font-extrabold text-center uppercase mb-10 md:mb-14 title-res double-text">
            <span className="text-white heading-shadow double-text" 
            data-text={lang.team.title1}
            >
              {lang.team.title1}
            </span>{" "}
            <span className="text-white heading-shadow double-text" 
            data-text={lang.team.title2}
            >
              {lang.team.title2}
            </span>{" "} 
          </h2>
          <div className="w-full relative overflow-hidden">
            <div className="flex justify-between items-center w-full h-4/5 absolute">
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
              loopedSlides={3}
              modules={[Autoplay, Navigation]}
              navigation={navigation}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                768: {
                  spaceBetween: 30,
                  slidesPerView: 3,
                },
                1024: {
                  spaceBetween: 30,
                  slidesPerView: 3,
                },
              }}
              className="w-8/12 md:mb-12"
            >
              <SwiperSlide>
                <div className="m-8 md:m-0">
                  <div className="flex mb-4">
                    <Image
                      src={TeamGiovanny}
                      alt="Almy"
                      className="rounded-full"
                    />
                  </div>
                  <span className="team-label">CMO - G Ramos</span>
                  <a
                    href="https://www.linkedin.com/in/designartpro-co/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-8 h-8 mx-auto">
                      <Image src={IconLinkedIn} alt="LinkedIn Icon" />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="m-8 md:m-0">
                  <div className="flex mb-4">
                    <Image
                      src={TeamMauricio}
                      alt="CEO - J Mauricio"
                      className="rounded-full"
                    />
                  </div>
                  <span className="team-label">CEO - J Mauricio</span>
                  <a
                    href="https://www.linkedin.com/in/j-mauricio-mosquera-9336391ab/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-8 h-8 mx-auto">
                      <Image src={IconLinkedIn} alt="LinkedIn Icon" />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="m-8 md:m-0">
                  <div className="flex mb-4">
                    <Image
                      src={TeamPauline}
                      alt="COO - J Pauline"
                      className="rounded-full"
                    />
                  </div>
                  <span className="team-label">COO - J Pauline</span>
                  <a
                    href="https://www.linkedin.com/in/pauline-velez-3044bb1b9/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-8 h-8 mx-auto">
                      <Image src={IconLinkedIn} alt="LinkedIn Icon" />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section>
        <div className="container w-10/12 py-12 mb-6">
          <h2 className="text-white heading-shadow text-5xl font-extrabold text-center uppercase mb-10 md:mb-14 title-res double-text"
          data-text={lang.comunnity.title1}
          >
            {lang.comunnity.title1}
          </h2>
          <p className="text-center">{lang.comunnity.text1}</p>
          <br />
          <p
            className="cursor-pointer text-center md:text-center"
            onClick={copyText2}
          >
            <strong
              id="hash2"
              className="text-white font-bold mr-2 hover:underline"
            >
              0x81780dD66832Ee4ee794b9d838816A16eE72915f
            </strong>
            <span className="inline-block w-4">
              <Image src={IconCopy} alt="Copy Icon" />
            </span>
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
