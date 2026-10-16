import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Agenda from "./components/Agenda";
import Menu from "./components/Menu";
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
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
