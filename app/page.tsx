import About from "./components/About";
import Blog from "./components/Blog";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Clients />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
