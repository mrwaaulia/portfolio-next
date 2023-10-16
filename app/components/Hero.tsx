import React from "react";

function Hero() {
  return (
    <section id="home">
      <div className="h-screen overflow-hidden px-28">
        <div className="grid grid-cols-2 items-center h-full">
          <div>
            <h3 className="text-primary font-bold mb-2">Halo semua, saya</h3>
            <h1 className="text-4xl font-bold mb-2">Marwa Aulia Lukman</h1>
            <h3 className="text-secondary text-2xl mb-2">
              Web Developer & <span className="text-dark">Logo Designer</span>
            </h3>
            <p className="text-secondary mb-10">
              Belajar web progamming itu mudah dan menyenangkan bukan.{" "}
              <span className="text-dark font-semibold">bukan!</span>
            </p>
            <a
              href="#"
              className="bg-primary rounded-full py-3 px-8 font-semibold text-white"
            >
              Hubungi Saya
            </a>
          </div>
          <div className="relative -translate-y-8">
            <img
              src="/img/marwaa.png"
              alt="marwaphoto"
              width={450}
              height={450}
              className="mx-auto -translate-y-16 z-10 relative"
            />
            <img
              src="/img/bloob.svg"
              alt="bloob"
              width={400}
              height={400}
              className="absolute bottom-0 inset-x-1/2 -translate-x-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
