import Image from "next/image";
import Link from "next/link";
import LogoDorum from "../public/LogoFirma.png";
import LogoDorumShort from "../public/logo-dorum-footer-short.svg";

import IconEmail from "../public/icon-email.svg";
import IconTelegram from "../public/icon-telegram.svg";
import IconFacebook from "../public/icon-facebook.svg";
import IconInstagram from "../public/icon-instagram.svg";
import IconTwitter from "../public/icon-twitter.svg";
import IconReddit from "../public/icon-reddit.svg";

export default function Footer() {
  return (
    <footer className="bg-turquoise py-3">
      <div className="container px-2 w-10/12 grid grid-cols-1">
        <div className="flex items-center justify-center col-span-2">
          <a
            href="mailto:contacto@dinolabs.dev"
            className="text-[#000] md:inline-block mr-2"
          >
            Powered by 
          </a>
          <div className="hidden md:flex justify-center w-[5%]">
            <Image src={LogoDorum} alt="Logo Dorum" />
          </div>
          <div className="flex md:hidden w-[15%]">
            <Image src={LogoDorum} alt="Logo Dorum" />
          </div>
        </div>
      </div>
    </footer>
  );
}
