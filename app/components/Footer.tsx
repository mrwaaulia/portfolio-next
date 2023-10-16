"use client";

import { InstagramLogo } from "@phosphor-icons/react/dist/ssr/InstagramLogo";
import { TiktokLogo } from "@phosphor-icons/react/dist/ssr/TiktokLogo";
import { TwitterLogo } from "@phosphor-icons/react/dist/ssr/TwitterLogo";
import { YoutubeLogo } from "@phosphor-icons/react/dist/ssr/YoutubeLogo";
import React from "react";

function Footer() {
  return (
    <footer className="pt-26 bg-dark">
      <div className="container w-full mx-auto p-20">
        <div className="grid grid-cols-3 gap-8">
          <div className="w-full font-medium text-slate-300 px-4 mb-12">
            <h2 className="font-bold text-4xl text-white mb-5">MAL</h2>
            <h3 className="font-bold text-2xl mb-2">Hubungi Kami</h3>
            <p>marwaaulialukman956@gmail.com</p>
            <p>Jl. Cigondewah Rahayu No.57</p>
            <p>Bandung</p>
          </div>
          <div className="w-full px-4 mb-12">
            <h3 className="font-semibold text-xl text-white">
              Kategori Tulisan
            </h3>
            <ul className="text-slate-300">
              <a href="#programming">
                <li className="hover:text-primary mb-3">Programming</li>
              </a>
              <a href="#teknologi">
                <li className="hover:text-primary mb-3">Teknologi</li>
              </a>
              <a href="#gaming">
                <li className="hover:text-primary mb-3">Gaming</li>
              </a>
            </ul>
          </div>
          <div className="w-full px-4 mb-12">
            <h3 className="font-semibold text-xl text-white">Tautan</h3>
            <ul className="text-slate-300">
              <a href="#home">
                <li className="hover:text-primary mb-3">Beranda</li>
              </a>
              <a href="#about">
                <li className="hover:text-primary mb-3">Tentang Saya</li>
              </a>
              <a href="#portfolio">
                <li className="hover:text-primary mb-3">Portfolio</li>
              </a>
              <a href="#client">
                <li className="hover:text-primary mb-3">Clients</li>
              </a>
              <a href="#blog">
                <li className="hover:text-primary mb-3">Blog</li>
              </a>
              <a href="#contact">
                <li className="hover:text-primary mb-3">Contact</li>
              </a>
            </ul>
          </div>
        </div>

        <div className="w-full pt-10 border-t border-slate-700">
          <div className="flex gap-4 justify-center items-center mb-5">
            <a href="https://www.instagram.com">
              <InstagramLogo
                size={40}
                className="text-secondary border border-secondary rounded-full p-2 hover:bg-primary duration-300 ease-linear hover:text-white hover:border-primary"
              />
            </a>
            <a href="https://www.youtube.com">
              <YoutubeLogo
                size={40}
                className="text-secondary border border-secondary rounded-full p-2 hover:bg-primary duration-300 ease-linear hover:text-white hover:border-primary"
              />
            </a>
            <a href="https://twitter.com">
              <TiktokLogo
                size={40}
                className="text-secondary border border-secondary rounded-full p-2 hover:bg-primary duration-300 ease-linear hover:text-white hover:border-primary"
              />
            </a>
            <a href="https://twitter.com">
              <TwitterLogo
                size={40}
                className="text-secondary border border-secondary rounded-full p-2 hover:bg-primary duration-300 ease-linear hover:text-white hover:border-primary"
              />
            </a>
          </div>
        </div>
        <p className="font-medium text-slate-500 text-center text-xs">
          Dibuat oleh{" "}
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="text-primary font-bold"
          >
            Marwa Aulia Lukman
          </a>
          , menggunakan{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            className="font-bold text-sky-500"
          >
            Tailwind CSS
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
