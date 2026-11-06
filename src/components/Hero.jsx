import "../styles/hero.css";

const Hero = () => {
  return (
    <div className="hero px-[0.5em] py-[2em] w-full">
      <h1 className="text-5xl font-bold mb-4">Koyejo Ibukunoluwa Joshua</h1>
      <h3 className="text-xl mb-4">Fullstack web developer</h3>
      <p className="mb-4">
        I design, build and ship complete web applications, from the interface
        people use to the server and database behind it.
      </p>
      <div className="buttons w-full flex justify-between items-center gap-2">
        <a
          href="#projects"
          className="see-projects-button cursor-pointer h-[3em] font-bold text-md px-2 w-[45%]"
        >
          <button className="w-full h-full">See my projects</button>
        </a>
        <a
          href="#contact"
          className="contact-button cursor-pointer h-[3em] w-[45%] font-bold"
        >
          <button className="w-full h-full">Get in touch</button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
