import React from "react";

function Contact() {
  return (
    <section id="contact">
      <div className="pt-36 pb-16">
        <div className="text-center mb-16">
          <h4 className="text-primary font-semibold text-2xl">Contact</h4>
          <h2 className="font-bold text-dark text-5xl my-4">Hubungi Kami</h2>
          <p className="font-medium text-lg text-secondary w-[36rem] mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni rem
            laudantium similique quas!
          </p>
        </div>

        <form>
          <div className="w-full lg:w-2/3 mx-auto">
            <div className="w-full px-4 mb-8">
              <label htmlFor="name" className="font-bold text-primary">
                Nama
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:ring-primary focus:ring-1 focus:border-primary focus:outline-none"
              />
            </div>
            <div className="w-full px-4 mb-8">
              <label htmlFor="email" className="font-bold text-primary">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:ring-primary focus:ring-1 focus:border-primary focus:outline-none"
              />
            </div>
            <div className="w-full px-4 mb-8">
              <label htmlFor="pesan" className="font-bold text-primary">
                Pesan
              </label>
              <textarea
                typeof="pesan"
                id="pesan"
                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:ring-primary focus:ring-1 focus:border-primary focus:outline-none h-32"
              />
            </div>
            <div>
              <button className="font-semibold text-white bg-primary py-3 px-8 rounded-full hover:opacity-80 hover:shadow-lg w-full transition duration-500">
                Kirim
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
