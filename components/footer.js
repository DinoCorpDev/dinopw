import Image from "next/image";
import Link from "next/link";
import LogoDorum from "../public/logo-dorum-footer.png";
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
      <div className="container px-0 w-10/12 grid grid-cols-6">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" passHref>
            <a className="mb-3 md:mb-0">
              <div className="hidden md:flex justify-center w-[50%]">
                <Image src={LogoDorum} alt="Logo Dorum" />
              </div>
              <div className="flex md:hidden">
                <Image src={LogoDorumShort} alt="Logo Dorum" />
              </div>
            </a>
          </Link>
        </div>
        <div className="flex items-center justify-center col-span-2">
          <div className="flex w-7 md:w-10 md:mr-3">
            <Image src={IconEmail} alt="Logo Dorum" />
          </div>
          <a
            href="mailto:support@dorumcoin.com"
            className="text-[#2C054A] hidden md:inline-block"
          >
            support@dorumcoin.com
          </a>
        </div>
        <div className="flex gap-2 md:gap-4 items-center justify-center col-span-3 md:col-span-2">
          <a href="https://t.me/DorumPortal" target="_blank" rel="noopener noreferrer">
            <div className="flex w-7 md:w-9">
              <Image src={IconTelegram} alt="Logo Dorum" />
            </div>
          </a>
          <a href="https://www.facebook.com/dorumtoken" target="_blank" rel="noopener noreferrer">
            <div className="flex w-7 md:w-9">
              <Image src={IconFacebook} alt="Logo Dorum" />
            </div>
          </a>
          {/* <a href="https://www.instagram.com/dorumcoin/" target="_blank" rel="noopener noreferrer">
            <div className="flex w-7 md:w-9">
              <Image src={IconInstagram} alt="Logo Dorum" />
            </div>
          </a> */}
          <a href="https://twitter.com/DorumCoin" target="_blank" rel="noopener noreferrer">
            <div className="flex w-7 md:w-9">
              <Image src={IconTwitter} alt="Logo Dorum" />
            </div>
          </a>
          <a href="https://www.reddit.com/r/dorumcoin/" target="_blank" rel="noopener noreferrer">
            <div className="flex w-7 md:w-9">
              <Image src={IconReddit} alt="Logo Dorum" />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
