export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-8 max-w-6xl mx-auto border-b border-zinc-800">
      <span className="text-xl font-bold tracking-wider">
        Ibukunoluwa Koyejo
      </span>
      <div className="space-x-6 text-sm text-zinc-400">
        <a href="#about" className="hover:text-white transition">
          About
        </a>
        <a href="#projects" className="hover:text-white transition">
          Projects
        </a>
        <a href="#contact" className="hover:text-white transition">
          Contact
        </a>
      </div>
    </nav>
  );
}
