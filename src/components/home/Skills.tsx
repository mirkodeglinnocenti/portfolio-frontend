import { useState } from "react";

const Skills = () => {
  const [skills] = useState([
    {
      name: "HTML",
      src: "/assets/img/HTML5.png",
      alt: "logo HTML",
    },
    {
      name: "CSS",
      src: "/assets/img/CSS3.png",
      alt: "logo CSS",
    },
    {
      name: "SASS",
      src: "/assets/img/Sass.png",
      alt: "logo SASS",
    },
    {
      name: "Bootstrap",
      src: "/assets/img/bootstrap.png",
      alt: "logo Bootstrap",
    },
    {
      name: "Tailwind",
      src: "/assets/img/HTML5.png",
      alt: "logo Tailwind",
    },
    {
      name: "Javascript",
      src: "/assets/img/HTML5.png",
      alt: "logo Javascript",
    },
    {
      name: "Vue",
      src: "/assets/img/HTML5.png",
      alt: "logo Vue",
    },
    {
      name: "React",
      src: "/assets/img/HTML5.png",
      alt: "logo React",
    },
    {
      name: "Php",
      src: "/assets/img/HTML5.png",
      alt: "logo HTML",
    },
    {
      name: "Laravel",
      src: "/assets/img/HTML5.png",
      alt: "logo Laravel",
    },
    {
      name: "MySQL",
      src: "/assets/img/HTML5.png",
      alt: "logo MySQL",
    },
    {
      name: "PostgreSQL",
      src: "/assets/img/HTML5.png",
      alt: "logo PostgreSQL",
    },
  ]);

  return (
    <section className="Skills bg-color-dark text-color-light py-14 text-center">
      <div className="container px-10 lg:px-20 2xl:px-40 mx-auto">
        <h3 className="font-bold text-2xl sm:text-3xl mb-5">
          <span className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r  from-primary-color to-secondary-color">
            &lt;
          </span>
          Skills
          <span className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r  from-primary-color to-secondary-color">
            /&gt;
          </span>
        </h3>
      </div>
      <div className="container px-5 sm:px-10 lg:px-40 2xl:px-60 mx-auto">
        <div className="grid justify-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {skills.map((skill, index) => {
            return (
              <div
                key={index}
                className="bg-gray-700 font-bold flex flex-col justify-center items-center min-h-[160px] max-h-[250px] aspect-square gap-4 rounded-2xl group hover:bg-gray-600"
              >
                <img
                  className={`${
                    skill.name === "CSS"
                      ? "scale-75 group-hover:scale-100"
                      : "scale-100 group-hover:scale-125"
                  } w-20 transition-transform`}
                  src={skill.src}
                  alt={skill.alt}
                />
                <p>{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
