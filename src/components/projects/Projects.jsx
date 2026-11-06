import ProjectSet from "./ProjectSet";
import "../../styles/projects.css";
import fabricKingpin from "../../assets/projects/fabric-kingpin.png";
import jossyBiomedical from "../../assets/projects/jossy-biomedical.png";
import egbaalakeradio from "../../assets/projects/egbaalake-radio.png";

const Projects = () =>
  // imgSrc,
  // imgAlt,
  // projectName,
  // desc,
  //   liveURL,
  //   githubURL,
  //   toolsUsed,
  {
    return (
      <div className="projects px-[0.5em] w-full py-[2em]">
        <h2 id="projects" className="text-3xl mb-[1em]">
          Projects
        </h2>

        <div className="project-set w-full">
          <ProjectSet>
            <div className="project-image w-full min-[1020px]:w-[50%] h-[15em] mb-3">
              <img
                src={fabricKingpin}
                className="w-full h-full border-transparent"
                // alt={imgAlt}
              />
            </div>
            <div className=" flex flex-col gap-5">
              <h3 className="text-2xl mb-2">Fabric Kingpin</h3>
              <p className="project-description">
                An e-commerce website built for a fabric store
              </p>

              <div className="tools-used flex gap-5">
                {/* <div className="tool rounded-4xl p-2">React</div> */}
                <div className="tool rounded-4xl p-2">Node.js</div>
                <div className="tool rounded-4xl p-2">MongoDB</div>
              </div>

              <div className="links flex gap-5">
                <a href="https://fabric-kingpin.onrender.com/" target="_blank">
                  <span className="link live-site pb-2 transition">
                    Live site
                  </span>
                </a>
                <a
                  href="https://github.com/General4904/fabric_kingpin"
                  target="_blank"
                >
                  <span className="link source-code pb-2 transition">
                    Source code
                  </span>
                </a>
              </div>
            </div>
          </ProjectSet>
          <ProjectSet>
            <div className="project-image w-full min-[1020px]:w-[50%] h-[15em] mb-3">
              <img
                src={jossyBiomedical}
                className="w-full h-full border-transparent"
                // alt={imgAlt}
              />
            </div>
            <div className=" flex flex-col gap-5">
              <h3 className="text-2xl mb-2">
                Jossy Biomedical Engineering & Scientific Instrumentation
              </h3>
              <p className="project-description">
                An application for a biomedical engineering firm
              </p>

              <div className="tools-used flex gap-5">
                {/* <div className="tool rounded-4xl p-2">React</div> */}
                <div className="tool rounded-4xl p-2">Node.js</div>
                <div className="tool rounded-4xl p-2">Express JS</div>
                <div className="tool rounded-4xl p-2">MongoDB</div>
              </div>

              <div className="links flex gap-5">
                <a
                  href="https://jossy-biomedical.onrender.com/"
                  target="_blank"
                >
                  <span className="link live-site pb-2 transition">
                    Live site
                  </span>
                </a>
                <a
                  href="https://github.com/General4904/jossy-biomedical"
                  target="_blank"
                >
                  <span className="link source-code pb-2 transition">
                    Source code
                  </span>
                </a>
              </div>
            </div>
          </ProjectSet>
          <ProjectSet>
            <div className="project-image w-full min-[1020px]:w-[50%] h-[15em] mb-3">
              <img
                src={egbaalakeradio}
                className="w-full h-full border-transparent"
                // alt={imgAlt}
              />
            </div>
            <div className=" flex flex-col gap-5">
              <h3 className="text-2xl mb-2">Egbaalake Radio</h3>
              <p className="project-description">
                An application for an online radio station
              </p>

              <div className="tools-used flex gap-5">
                <div className="tool rounded-4xl p-2">Tailwind CSS</div>
                <div className="tool rounded-4xl p-2">Node.js</div>
                {/* <div className="tool rounded-4xl p-2">MongoDB</div> */}
              </div>

              <div className="links flex gap-5">
                <a href="https://egbaalake.vercel.app/" target="_blank">
                  <span className="link live-site pb-2 transition">
                    Live site
                  </span>
                </a>
                <a
                  href="https://github.com/General4904/egbaAlakeRadio"
                  target="_blank"
                >
                  <span className="link source-code pb-2 transition">
                    Source code
                  </span>
                </a>
              </div>
            </div>
          </ProjectSet>

          {/* <ProjectSet
          projectName="Project name"
          desc="One or two sentences on the problem, what you built and the result."
        /> */}
        </div>
      </div>
    );
  };

export default Projects;
