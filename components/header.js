import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

import LogoDorumText from "../public/dorumLogo1.png";
import IconMenu from "../public/icon-menu.svg";
import IconCancel from "../public/icon-cancel.svg";
import Arrow from "../public/arrow-icon.png";
import LogoDino from "../public/negativo3.png";


import GifAnimationLogo from "../public/dorumLogo.gif";

import locales from "../locales";

export default function Header() {
  const { locale, asPath } = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const lang = { ...locales[locale] };

  const langsArray = [
    {
      name: "english",
      name2: "eng",
      locale: "en",
      quienes: "who",
      servicios: "serv",
      proyect: "pro",
      tech: "tech",
      team: "tea",
    },
    {
      name: "spanish",
      name2: "span",
      locale: "es",
      quienes: "who",
      servicios: "serv",
      proyect: "pro",
      tech: "tech",
      team: "tea",
    },
  ];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettigns: {
      preserveAspectRatio: "xMidYMid Slice",
    },
  };

  return (
    <header className="bg-transparent py-3 md:py-8">
      <div className="container px-0 w-10/12 grid grid-flow-col place-content-between text-new">
        <Link href="/" passHref>
          <a>
            <div className="hidden md:flex lg:flex items-center h-[60px] w-[200px]">
              <div className="h-full mr-2 w-[1300px]">
                <Image src={LogoDino} alt="DINOLOGO" />
              </div>
            </div>
            <div className="lg:hidden md:hidden flex items-center h-[40px] w-[130px]">
              <div className="h-full mr-2 w-[1300px]">
                <Image src={LogoDino} alt="DINOLOGO" />
              </div>
            </div>
          </a>
        </Link>
        <div className="flex items-center">
          <div className="flex lg:hidden md:block items-center justify-center">
            <button onClick={() => setOpenMenu(true)}>
              <Image src={IconMenu} alt="Icon Menu" />
            </button>
          </div>
          <div className={`menu ${openMenu ? "menu-open" : ""}`}>
            <div className="flex lg:hidden md:block items-center justify-between">
              <div className="flex items-center justify-center w-3">
                <button onClick={() => setOpenMenu(false)}>
                  <Image src={IconCancel} alt="Icon Menu" />
                </button>
              </div>
              {langsArray.map((item, index) => {
                if (locale != item.locale) {
                  return (
                      <Link
                        activeClassName={locale === item.locale}
                        href={asPath}
                        locale={item.locale}
                        passHref
                        key={item.locale}
                      >
                        <a
                          className="text-nero font-black"
                          onClick={() => setOpenMenu(false)}
                        >
                          {lang.menu[item.name2]}
                        </a>
                      </Link>
                  );
                }
              })}
            </div>
            <div className="gap-1 mt-4 md:mt-0 items-center justify-end flex flex-col md:flex-row md:h-full relative">
              {langsArray.map((item, index) => {
                if (locale != item.locale) {
                  return (
                    <div className="lg:flex md:hidden">
                      <Link
                        href="/#about"
                        passHref
                      >
                        <a className="link-dropdown">
                          {lang.menu[item.quienes]}
                        </a>
                      </Link>
                      <Link href="/#services" passHref>
                        <a className="link-dropdown">{lang.menu[item.servicios]}</a>
                      </Link>
                      <Link href="/#tecnologies" passHref>
                        <a className="link-dropdown">
                          {lang.menu[item.tech]}
                        </a>
                      </Link>
                      <Link href="/#proyects" passHref>
                        <a className="link-dropdown">{lang.menu[item.proyect]}</a>
                      </Link>
                      <Link href="/#team" passHref>
                        <a className="link-dropdown">{lang.menu[item.team]}</a>
                      </Link>
                    </div>
                  );
                }
              })}
              <div className="relative hidden lg:block border-l-2 border-header">
                {langsArray.map((item, index) => {
                  if (locale === item.locale) {
                    return (
                      <button
                        className="text-new link-dropdown"
                        key={`lang-${item.locale}`}
                        onClick={() => setOpenDropdown(!openDropdown)}
                      >
                        <div className="w-[25px] pt-2 pr-1">
                          <Image src={Arrow} alt="Icon arrow" />
                        </div>
                        <span>{lang.menu[item.name]}</span>
                      </button>
                    );
                  }
                })}
                <div className={`dropdown ${!openDropdown ? "hidden" : ""}`}>
                  {langsArray.map((item, index) => {
                    return (
                      <Link
                        activeClassName={locale === item.locale}
                        href={asPath}
                        locale={item.locale}
                        passHref
                        key={item.locale}
                      >
                        <a
                          className="text-nero link-item"
                          onClick={() => setOpenDropdown(!openDropdown)}
                        >
                          {lang.menu[item.name2]}
                        </a>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
