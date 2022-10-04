import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

import LogoDorumText from "../public/dorumLogo1.png";
import IconMenu from "../public/icon-menu.svg";
import IconCancel from "../public/icon-cancel.svg";
import Arrow from "../public/arrow-icon.png";

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
    },
    {
      name: "spanish",
      name2: "span",
      locale: "es",
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
            <div className="flex items-center h-[60px] w-[200px]">
              <div className="h-full mr-2 w-[1300px]">
                {/* <Lottie options={{animationData:moneda, ...defaultOptions}} height={65} width={60} ></Lottie> */}
                <Image src={GifAnimationLogo} alt="Logo Dorum Texto" />
              </div>
              <div className="mt-1">
                <Image src={LogoDorumText} alt="Logo Dorum Texto" />
              </div>
            </div>
          </a>
        </Link>
        <div className="flex items-center">
          <div className="flex md:hidden items-center justify-center">
            <button onClick={() => setOpenMenu(true)}>
              <Image src={IconMenu} alt="Icon Menu" />
            </button>
          </div>
          <div className={`menu ${openMenu ? "menu-open" : ""}`}>
            <div className="flex md:hidden items-center justify-between">
              <div className="flex items-center justify-center w-3">
                <button onClick={() => setOpenMenu(false)}>
                  <Image src={IconCancel} alt="Icon Menu" />
                </button>
              </div>
              {langsArray.map((item, index) => {
                if (locale != item.locale) {
                  return (
                    <>
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
                    </>
                  );
                }
              })}
            </div>
            <div className="gap-1 mt-4 md:mt-0 items-center justify-end flex flex-col md:flex-row md:h-full relative">
              <Link
                href="https://bscscan.com/address/0x1b98f4b4bf431b540bc766c16a5b70e392fcc9ab"
                passHref
              >
                <a className="link-item" target="_blank" rel="noreferrer">
                  Explorer
                </a>
              </Link>
              <Link href="/#roadmap" passHref>
                <a className="link-item">Roadmap</a>
              </Link>
              <Link href="https://gempad.app/presale/0xbB4b7d130908Dc1F6FAc0F86513C28C0b096F6B6?chainId=56" passHref>
                <a className="link-item" target="_blank" rel="noreferrer">Buy</a>
              </Link>
              <Link href="/#team" passHref>
                <a className="link-item">Team</a>
              </Link>
              <Link href="https://www.rdauditors.com/wp-content/uploads/2022/05/DORUM-Smart-Contract-Security-Report.pdf" passHref>
                <a className="link-item" target="_blank" rel="noreferrer">
                  Audit
                </a>
              </Link>
              <Link
                href="https://dorum.gitbook.io/token-dorum/"
                passHref
              >
                <a className="link-item" target="_blank" rel="noreferrer">
                  Whitepaper
                </a>
              </Link>
              <div className="relative hidden md:block border-l-2 border-header">
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
