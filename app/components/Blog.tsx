import React from "react";

function Blog() {
  return (
    <section id="blog">
      <div className="bg-slate-100 pt-36 pb-32">
        <div className="text-center mb-16">
          <h4 className="text-primary font-semibold text-2xl">Blog</h4>
          <h2 className="font-bold text-dark text-5xl my-4">Tulisan Terkini</h2>
          <p className="font-medium text-lg text-secondary w-[36rem] mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni rem
            laudantium similique quas!
          </p>
        </div>

        <div className="grid grid-cols-3 px-32 gap-8">
          <div
            id="programming"
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="programming"
              className="mb-4"
            />

            <div className="py-6 px-8">
              <h3>
                {" "}
                <a
                  href="#"
                  className="block font-semibold text-xl text-dark hover:text-primary mb-3"
                >
                  Tips Belajar Programming
                </a>
              </h3>
              <p className="text-secondary font-medium mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                ratione.
              </p>
              <a
                href="#"
                className="font-medium text-white text-sm bg-primary py-2 px-4 rounded-lg hover:opacity-80 mb-6"
              >
                Baca Selengkapnya
              </a>
            </div>
          </div>
          <div
            id="teknologi"
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src="https://media.istockphoto.com/id/1291611528/id/foto/keyboard-hitam-dengan-lampu-led-pelangi.jpg?s=612x612&w=0&k=20&c=qR5hWdEQ5rWNCLMTXfDNqe7bG5Y2epKlS0ywHNHvVTk="
              alt="keyboard mechanical"
              className="mb-4"
            />

            <div className="py-6 px-8">
              <h3>
                {" "}
                <a
                  href="#"
                  className="block font-semibold text-xl text-dark hover:text-primary mb-3"
                >
                  Review Keyboard Mechanical
                </a>
              </h3>
              <p className="text-secondary font-medium mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                ratione.
              </p>
              <a
                href="#"
                className="font-medium text-white text-sm bg-primary py-2 px-4 rounded-lg hover:opacity-80 mb-6"
              >
                Baca Selengkapnya
              </a>
            </div>
          </div>
          <div
            id="gaming"
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src="https://media.istockphoto.com/id/1414962062/id/foto/pc-di-rumah-dengan-game-penembak-diluncurkan-fps-mengalami-realitas-virtual.jpg?s=612x612&w=0&k=20&c=hLfvhlPcU0j5y0v44Ryb-a8XtKmVlB_gZSo-1GNKDOE="
              alt="pc gaming"
              className="mb-4"
            />

            <div className="py-6 px-8">
              <h3>
                <a
                  href="#"
                  className="block font-semibold text-xl text-dark hover:text-primary mb-3"
                >
                  Review PC Gaming
                </a>
              </h3>
              <p className="text-secondary font-medium mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                ratione.
              </p>
              <a
                href="#"
                className="font-medium text-white text-sm bg-primary py-2 px-4 rounded-lg hover:opacity-80 mb-6"
              >
                Baca Selengkapnya
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
