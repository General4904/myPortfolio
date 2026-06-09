import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-8 py-24 md:py-32">
      <Reveal>
        <p className="text-zinc-400 text-sm tracking-widest uppercase mb-3">
          Backend(NodeJS) Developer
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Building minimalist digital experiences.
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed">
          I am a software engineer focused on crafting clean, intentional
          codebases. No fluff, just performance.
        </p>
      </Reveal>
    </section>
  );
}
