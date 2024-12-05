import AnimateStart from "@/component/animation/Start";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer
      data-aos="fade-up"
      className="bg-bgImage-Footer bg-cover bg-no-repeat bg-top relative text-white px-10 py-10"
    >
      <AnimateStart />
      <div className="container">
        <div className="flex flex-col xl:flex-row items-center gap-20 ">
          <div className="flex flex-col items-center xl:items-start xl:flex-grow">
            <Image
              src="/image/LogoFooter.png"
              width={250}
              height={250}
              alt="Logo"
            />
            {/* Mạng xã hội */}
            <div className="flex flex-col mb-6 mt-5">
              <span className="font-ibm font-medium text-[18px]">Social</span>
              <ul className="flex items-center gap-4 mt-2">
                {Icon.map((icon) => (
                  <li
                    className="transform transition-transform duration-200 ease-in-out hover:translate-y-[-3px] "
                    key={icon.name}
                  >
                    <Link href={icon.href}>
                      <Image
                        src={icon.src}
                        width={40}
                        height={40}
                        alt={icon.alt}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-6 mt-10 md:mb-0 font-ibm text-[16px] leading-4 xl:flex-grow">
            {Products.map((product) => (
              <div key={product.id}>
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <ul className="text-[#A7A7A7] space-y-4 mt-4">
                  {product.links.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.link}
                        className="hover:text-white focus:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="my-6 border-white" />
        <div className="flex flex-col md:flex-row justify-between items-center container mx-auto">
          <p className="text-sm text-[#A7A7A7]">© 2024 PIONE GAME</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

export const Icon = [
  {
    name: "Telegram",
    src: "/image/icon/Tele.svg",
    alt: "Telegram",
    href: "/",
  },
  {
    name: "Twitter",
    src: "/image/icon/TW.svg",
    alt: "Twitter",
    href: "/",
  },
  {
    name: "Facebook",
    src: "/image/icon/FB.svg",
    alt: "Facebook",
    href: "/",
  },
  {
    name: "Instagram",
    src: "/image/icon/Ins.svg",
    alt: "Instagram",
    href: "/",
  },
  {
    name: "Reddit",
    src: "/image/icon/Redit.svg",
    alt: "Reddit",
    href: "/",
  },
];
export const Products = [
  {
    id: 1,
    name: "Product",
    links: [
      { label: "Rankings", link: "/rankings" },
      { label: "Quests", link: "/quests" },
      { label: "Airdrops", link: "/airdrops" },
      { label: "Hot contracts", link: "/hot-contracts" },
      { label: "Games", link: "/games" },
      { label: "Chains", link: "/chains" },
      { label: "Alerts", link: "/alerts" },
      { label: "Portfolio", link: "/portfolio" },
    ],
  },
  {
    id: 2,
    name: "Product",
    links: [
      { label: "About us", link: "/about" },
      { label: "Press", link: "/press" },
      { label: "Disclaimer", link: "/disclaimer" },
      { label: "Privacy policy", link: "/privacy" },
      { label: "Terms of use", link: "/terms" },
      { label: "Careers", link: "/careers" },
    ],
  },
  {
    id: 3,
    name: "Product",
    links: [
      { label: "Blog", link: "/blog" },
      { label: "Reports", link: "/reports" },
      { label: "DappRadar API", link: "/dapp-radar-api" },
      { label: "Brand Assets", link: "/brand-assets" },
      { label: "FAQ", link: "/faq" },
      { label: "DappLaunch", link: "/dapp-launch" },
    ],
  },
  {
    id: 4,
    name: "Product",
    links: [
      { label: "Submit a project", link: "/submit-project" },
      { label: "Submit a quest", link: "/submit-quest" },
      { label: "Advertise", link: "/advertise" },
    ],
  },
];
