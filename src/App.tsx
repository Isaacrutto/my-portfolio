import "./styles.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Attitude from "./components/Attitude";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <Hero />

      <main className="container">
        <About />
        <Skills />
        <Attitude />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
