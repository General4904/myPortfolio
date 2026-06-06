import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black scroll-smooth antialiased">
      <Navbar />
      <main>
        <Hero />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}

export default App;
