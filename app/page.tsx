import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Agenda from "./components/Agenda";
import Menu from "./components/Menu";
import Catering from "./components/Catering";
import Reviews from "./components/Reviews";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Agenda />
        <Menu />
        <Catering />
        <Reviews />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
