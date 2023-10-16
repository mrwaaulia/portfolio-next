import React from "react";

function Clients() {
  return (
    <section id="clients">
      <div className="bg-slate-700 pt-36 pb-32">
        <div className="text-center mb-16">
          <h4 className="text-primary font-semibold text-2xl">Clients</h4>
          <h2 className="font-bold text-white text-5xl my-4">
            Yang Pernah Bekerjasama
          </h2>
          <p className="font-medium text-lg text-secondary w-[64rem] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            eius excepturi, odio labore iusto minus earum explicabo. Voluptas,
            consequuntur vel doloribus consectetur officia excepturi distinctio!
            Enim quae aperiam aliquam ducimus.
          </p>
        </div>

        <div className="flex gap-16 justify-center">
          <img
            src="/img/google.svg"
            alt="google"
            width={90}
            height={90}
            className="grayscale hover:grayscale-0 duration-300 ease-linear"
          />
          <img
            src="/img/twitter.svg"
            alt="twitter"
            width={90}
            height={90}
            className="grayscale hover:grayscale-0 duration-300 ease-linear"
          />
          <img
            src="/img/instagram.svg"
            alt="intagram"
            width={90}
            height={90}
            className="grayscale hover:grayscale-0 duration-300 ease-linear"
          />
          <img
            src="/img/youtube.svg"
            alt="youtube"
            width={90}
            height={90}
            className="grayscale hover:grayscale-0 duration-300 ease-linear"
          />
        </div>
      </div>
    </section>
  );
}

export default Clients;
