import Reveal from "./Reveal";

const PROJECT_LIST = [
  {
    title: "Project Alpha",
    desc: "A React web application engineered for efficiency.",
    link: "#",
  },
  {
    title: "Project Beta",
    desc: "An API engine built using Node and cloud infrastructure.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-8 py-16 border-t border-zinc-900"
    >
      <Reveal>
        <h2 className="text-2xl font-bold tracking-tight mb-12">
          Selected Work
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECT_LIST.map((proj, idx) => (
            <div
              key={idx}
              className="group border border-zinc-800 p-8 rounded-lg hover:border-white transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                {proj.desc}
              </p>
              <a
                href={proj.link}
                className="text-sm font-medium underline underline-offset-4 group-hover:text-zinc-300"
              >
                View Repository Code &rarr;
              </a>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
