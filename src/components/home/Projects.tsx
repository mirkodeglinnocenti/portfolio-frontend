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
      title: "Dashboard responsive con Bootstrap",
      description:
        "Creata una dashboard con bootstrap per allenamento lato responsive",
      url: "https://mirkodeglinnocenti.github.io/html-css-bootstrap-dashboard/",
    },
    {
      title: "Riproduzione di WhatsApp semplificata",
      description:
        "In questa riproduzione è possibile mandare dei messaggi diversi per ogni singolo contatto e ricevere una risposta automatica dopo pochi secondi",
      url: "https://mirkodeglinnocenti.github.io/vue-boolzapp/",
    },
    {
      title: "Catalogo di film e serie tv tramite ricerca",
      description:
        "In questo progetto è stata riprodotta una ricerca tramite il titolo del film o serie tv inserito facendo delle chiamate api",
      url: "https://boolflix-three.vercel.app/",
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
              <a key={index} target="blank" href={project.url}>
                <div className="p-10 border-2 border-primary-color border-solid cursor-pointer duration-500 hover:translate-y-[-10px] group h-full">
                  <div className="flex gap-2 items-center mb-2">
                    <svg
                      className="w-10 stroke-primary-color"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M12.9524 11.8852C13.1907 11.8072 13.4471 11.7647 13.7143 11.7647C13.9762 11.7647 14.2277 11.8055 14.462 11.8806M10.0465 12.8533C9.939 12.8338 9.82793 12.8235 9.71429 12.8235C8.76751 12.8235 8 13.5346 8 14.4118C8 15.2889 8.76751 16 9.71429 16H13.7143C14.9767 16 16 15.0519 16 13.8824C16 12.9554 15.3572 12.1676 14.462 11.8806M10.0465 12.8533C9.95482 12.6242 9.90476 12.3763 9.90476 12.1176C9.90476 10.9481 10.9281 10 12.1905 10C13.3664 10 14.3348 10.8226 14.462 11.8806M10.0465 12.8533C10.2722 12.8944 10.4821 12.9765 10.6667 13.091"
                          stroke="{var(--primary-color)}"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />{" "}
                        <path
                          d="M22 11.7979C22 9.16554 22 7.84935 21.2305 6.99383C21.1598 6.91514 21.0849 6.84024 21.0062 6.76946C20.1506 6 18.8345 6 16.2021 6H15.8284C14.6747 6 14.0979 6 13.5604 5.84678C13.2651 5.7626 12.9804 5.64471 12.7121 5.49543C12.2237 5.22367 11.8158 4.81578 11 4L10.4497 3.44975C10.1763 3.17633 10.0396 3.03961 9.89594 2.92051C9.27652 2.40704 8.51665 2.09229 7.71557 2.01738C7.52976 2 7.33642 2 6.94975 2C6.06722 2 5.62595 2 5.25839 2.06935C3.64031 2.37464 2.37464 3.64031 2.06935 5.25839C2 5.62595 2 6.06722 2 6.94975M21.9913 16C21.9554 18.4796 21.7715 19.8853 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V11"
                          stroke="{var(--primary-color)}"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />{" "}
                      </g>
                    </svg>
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
