import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Dữ liệu của menu
  const Scrollheader = [
    { id: 1, label: "ABOUT", link: "about" },
    { id: 2, label: "Game modes ", link: "modes" },
    { id: 3, label: "PARTICIPATE", link: "participate" },
    { id: 4, label: "USE", link: "user" },
    { id: 5, label: "LEARN", link: "learn" },
    { id: 6, label: "BLOG & NEWS", link: "blog" },
    { id: 7, label: "PLAY", link: "play" },
  ];
  return (
    <Fragment>
      <header
        className={`${isScrolled ? "bg-opacity-70" : "bg-opacity-100"}
      bg-[#000] text-white fixed top-0 left-0 w-full z-[9999] shadow-lg transition-all duration-300 ease-in-out`}
      >
        <div className="container py-5 flex justify-between items-center">
          {/* logo */}
          <div className="flex-shrink-0">
            <Link href={"/"}>
              <Image
                src={"../image/svg/LogoHeader.svg"}
                alt=""
                width={200}
                height={200}
                className="h-auto"
              />
            </Link>
          </div>
          {/* Navigation */}
          <nav className="hidden xl:flex space-x-6 font-orbitron">
            {Scrollheader.map((item) => (
              <Link
                key={item.id}
                href={`#${item.link}`}
                scroll={false}
                className={`px-4 py-2 ${
                  item.id === 7 ? "rounded-full bg-[#FA5805]" : ""
                } transform transition-transform duration-200 ease-in-out hover:translate-y-[-3px] `}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Hamburger Menu Icon */}
          <div className="xl:hidden flex items-center justify-center gap-4">
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="flex items-center justify-center"
            >
              {isMenuOpen ? (
                <HiOutlineX size={30} />
              ) : (
                <HiOutlineMenu size={30} />
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden bg-opacity-90 bg-[#141414] p-4">
            {Scrollheader.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="block py-2"
                onClick={toggleMenu}
                scroll={false}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </Fragment>
  );
};
export default Header;
