import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

const Header: React.FC = () => {
  const lastScroll = useRef(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > lastScroll.current) {
        setScrollDirection("down");
      } else if (scrollY < lastScroll.current) {
        setScrollDirection("up");
      }
      lastScroll.current = scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const animationClass = scrollDirection === "up" ? "animate-slideUp" : "animate-slideDown";
  return (
    <header
      className={`w-full bg-white shadow-header fixed z-1 ${animationClass} bottom-0 py-[11.5px] px-0 overflow-auto`}
    >
      <div className="max-w-[1600px] w-[93%] flex justify-start items-center py-[0.5em] text-[1.2rem] mx-auto my-0 leading-[30.7167px] tracking-[0.96px] max-[1800px]:max-w-[1200px]">
        <div>
          <div className="font-unica-one text-[1.2em] inline-block mr-[0.8em] leading-[36.8667px]">
            <Link to="/">/Rashib Khanal/</Link>
          </div>
          <nav className="inline-block text-[1.1em] opacity-[0.8] leading-[33.8px]">
            <Link
              className="font-open-sans inline-block text-[21.12px] text-center ml-[0.8em] hover:text-[#fe5185] transition-colors duration-[0.4s] ease-out leading-[38.4px] tracking-[0.96px] max-[500px]:hidden"
              to="/about"
            >
              About
            </Link>
            <a
              className="font-open-sans text-[21.12px] text-center ml-[0.8em] hover:text-[#fe5185] transition-colors duration-[0.4s] ease-out leading-[38.4px] tracking-[0.96px] max-[400px]:hidden"
              target="_blank"
              href="mailto:contact@rashib.dev"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
