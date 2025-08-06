"use client";
import React, { useState } from "react";
import Link from "next/link";
import { SITE_NAME, LOGO_URL, NAV_LINKS } from "@/constants/constants";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-black/95 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-5">
        <Link href="/" className="flex items-center cursor-pointer">
          <img src={LOGO_URL} alt="Logo" className="h-10 w-10 mr-4" />
          <span className="font-bold text-lg md:text-2xl text-white pt-2 tracking-wide drop-shadow">
            {SITE_NAME}
          </span>
        </Link>
        <nav>
          <ul
            className={`
              flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-6
              absolute md:static top-16 left-0 w-full md:w-auto bg-black/95 md:bg-transparent shadow-md md:shadow-none z-10
              ${menuOpen ? "flex" : "hidden"} md:flex
            `}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <a
                  href={link.path}
                  className="flex items-center gap-2 px-4 py-2 text-white hover:text-red-400 font-medium transition"
                >
                  <link.icon className="text-red-500" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="md:hidden flex items-center px-2 py-1 border rounded text-white border-red-700 bg-black/80"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
