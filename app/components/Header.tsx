"use client";
import React, { useEffect } from "react";

function Header() {
  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 16) {
        console.log("success");
      }
    }

    window.addEventListener("scroll", () => {
      handleScroll();
    });

    return () => {
      window.removeEventListener("scroll", () => {
        handleScroll();
      });
    };
  }, []);

  return (
    <div className="flex justify-between items-center px-28 py-4 fixed inset-x-0 top-0 bg-white z-20">
      <img src="/img/logo.jpg" alt="logo" width={200} height={200} />
      <div className="flex gap-12">
        <a href="#home" className="hover:text-primary duration-300 ease-linear">
          Home
        </a>
        <a
          href="#about"
          className="hover:text-primary duration-300 ease-linear"
        >
          Tentang Saya
        </a>
        <a
          href="#portfolio"
          className="hover:text-primary duration-300 ease-linear"
        >
          Portfolio
        </a>
        <a
          href="#clients"
          className="hover:text-primary duration-300 ease-linear"
        >
          Clients
        </a>
        <a href="#blog" className="hover:text-primary duration-300 ease-linear">
          Blog
        </a>
        <a
          href="#contact"
          className="hover:text-primary duration-300 ease-linear"
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default Header;
