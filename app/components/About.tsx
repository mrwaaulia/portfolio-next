"use client";

import { InstagramLogo } from "@phosphor-icons/react/dist/ssr/InstagramLogo";
import { TiktokLogo } from "@phosphor-icons/react/dist/ssr/TiktokLogo";
import { TwitterLogo } from "@phosphor-icons/react/dist/ssr/TwitterLogo";
import { YoutubeLogo } from "@phosphor-icons/react/dist/ssr/YoutubeLogo";
import React from "react";

function About() {
  return (
    <section id="about">
      <div className="px-28 mb-40">
        <h4 className="text-primary font-bold text-lg uppercase mb-4">
          Tentang Saya
        </h4>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-dark font-semibold text-2xl mb-4">
              Yuk, Belajar biar jadi sepuh!
            </h2>
            <p className="text-secondary font-medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              cupiditate qui reprehenderit tempora suscipit illum. Est esse quod
              modi velit architecto dolores debitis aut inventore, officiis
              facere veniam consequuntur eius?
            </p>
          </div>
          <div id="tentang saya">
            <h3 className="text-dark font-semibold text-2xl mb-4">
              Ayo Mutualan
            </h3>
            <p className="text-secondary font-medium mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
              quas modi velit architecto quis aliquid ea, reprehenderit totam
              rem omnis sit necessitatibus, aperiam ad ab quod consectetur,
              expedita hic aut!
            </p>
            <div className="flex gap-4">
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
        </div>
      </div>
    </section>
  );
}

export default About;
