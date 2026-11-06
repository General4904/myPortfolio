import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar px-[0.5em] w-full flex h-[4em] items-center justify-between">
      <div className="fullname text-lg font-bold min-[1020px]:text-3xl">
        Ibukunoluwa Koyejo
      </div>
      <nav className="hidden min-[1020px]:flex justify-between items-center gap-7 font-bold">
        <a href="#skills">
          <div className="cursor-pointer nav-item">Skills</div>
        </a>
        <a href="#projects">
          <div className="cursor-pointer nav-item">Projects</div>
        </a>
        <a href="#contaact">
          <div className="cursor-pointer nav-item">Contact</div>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
