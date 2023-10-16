import React from "react";

function Portfolio() {
  return (
    <section id="portfolio">
      <div className="bg-slate-100 pt-36 pb-16">
        <div className="text-center mb-32">
          <h4 className="font-semibold text-lg text-primary mb-2">Portfolio</h4>
          <h2 className="font-bold text-dark text-3xl mb-4">Project Terbaru</h2>
          <p className="font-medium text-secondary text-lg w-[32rem] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            enim veniam pariatur, officia architecto consequatur ab praesentium
            ex similique, repellat, amet assumenda rerum ducimus.
          </p>
        </div>

        <div className="grid grid-cols-2 px-28 gap-8">
          <div>
            <img src="/img/1.jpg" alt="satu" className="rounded-lg" />
            <h3 className="font-semibold text-dark text-xl my-4">
              Marwa Aulia Lukman
            </h3>
            <p className="font-medium text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              repellat quisquam tempora laborum accusantium, harum distinctio
              quos voluptatibus molestiae commodi itaque nam quam, numquam
              assumenda ducimus consectetur alias libero cumque.
            </p>
          </div>
          <div>
            <img src="/img/2.jpg" alt="satu" className="rounded-lg" />
            <h3 className="font-semibold text-dark text-xl my-4">
              Marwa Aulia Lukman
            </h3>
            <p className="font-medium text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              repellat quisquam tempora laborum accusantium, harum distinctio
              quos voluptatibus molestiae commodi itaque nam quam, numquam
              assumenda ducimus consectetur alias libero cumque.
            </p>
          </div>
          <div>
            <img src="/img/3.jpg" alt="satu" className="rounded-lg" />
            <h3 className="font-semibold text-dark text-xl my-4">
              Marwa Aulia Lukman
            </h3>
            <p className="font-medium text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              repellat quisquam tempora laborum accusantium, harum distinctio
              quos voluptatibus molestiae commodi itaque nam quam, numquam
              assumenda ducimus consectetur alias libero cumque.
            </p>
          </div>
          <div>
            <img src="/img/4.jpg" alt="satu" className="rounded-lg" />
            <h3 className="font-semibold text-dark text-xl my-4">
              Marwa Aulia Lukman
            </h3>
            <p className="font-medium text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              repellat quisquam tempora laborum accusantium, harum distinctio
              quos voluptatibus molestiae commodi itaque nam quam, numquam
              assumenda ducimus consectetur alias libero cumque.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
