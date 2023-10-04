const Projects = () => {
  const Projects = [
    {
      title: "Portfolio - Front-End",
      description:
        "Qui potrai trovare il codice della parte Front-End, ho utilizzato TypeScript, React e Tailwind.",
      url: "https://github.com/mirkodeglinnocenti/portfolio-frontend",
    },
    {
      title: "Portfolio - Back-End",
      description:
        "Qui potrai trovare il codice della parte Back-End che ho utilizzato per creare un database e delle Api per gestire l'autenticazione con il jwt token, ho utilizzato Laravel,Php.",
      url: "https://github.com/mirkodeglinnocenti/portfolio",
    },
    {
      title: "Spotify clone",
      description:
        "Clone della pagina di Spotify in HTML e CSS senza gestione del responsive, esercizio per lavorare con un'altezza di 100vh e allenarmi con gli effetti hover dei vari pulsanti.",
      url: "https://mirkodeglinnocenti.github.io/html-css-spotifyweb/",
    },
    {
      title: "Discord clone",
      description:
        "Clone della pagina di discord in HTML e CSS senza gestione del responsive, è una delle prime pagine che ho replicato.",
      url: "https://mirkodeglinnocenti.github.io/htmlcss-discord/",
    },
    {
      title: "Freelance Portfolio",
      description:
        "Replica di un sito web di un freelance, ho utilizzato Vite con Vue, creando componenti che si ripetono nella pagina.",
      url: "https://freelanceportfolio-plum.vercel.app/",
    },
    {
      title: "Prima pagina responsive con Bootstrap",
      description: "Esercizio per studiare Bootstrap lato responsive.",
      url: "https://mirkodeglinnocenti.github.io/html-css-bootstrap-freelancer/",
    },
  ];
  return (
    <section className="About bg-color-dark text-color-light py-14 text-center sm:text-start">
      <div className="container px-10 lg:px-32 xl:px-40 2xl:px-60 mx-auto">
        <h3 className="font-bold text-2xl sm:text-3xl mb-5">
          <span className="font-extrabold text-2xl text-primary-color">
            &lt;
          </span>
          Projects
          <span className="font-extrabold text-2xl text-primary-color">
            /&gt;
          </span>
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {Projects.map((project, index) => {
            return (
              <a target="blank" href={project.url}>
                <div className="p-10 border-2 border-primary-color border-solid cursor-pointer duration-500 hover:translate-y-[-10px] group h-full">
                  <div key={index} className="flex gap-2 items-center mb-2">
                    <img
                      className="w-10"
                      src="./assets/img/folder-cloud.svg"
                      alt="folder cloud"
                    />
                    <p className="text-lg font-semibold group-hover:text-primary-color">
                      {project.title}
                    </p>
                  </div>
                  <div className="text-left">
                    <p className="italic">{project.description}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
