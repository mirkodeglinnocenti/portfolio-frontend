import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

const Story = () => {
  const [isEducation, setIsEducation] = useState(true);

  const [education] = useState([
    {
      title: "Liceo scientifico indirizzo Scienze Applicate",
      subtitle: "E.Balducci Pontassieve ~ 2013 - 2018",
      body: [
        "basi di informatica",
        "basi di programmazione",
        "studio del linguaggio c e c++",
      ],
    },
    {
      title: "Corso Junior Digital Content Specialist",
      subtitle: "Studio AF ~ 2020",
      body: [
        "Conoscenze teoriche e tecniche delle piattaforme web",
        "Progettazione e sviluppo delle piattaforme web",
        "Utilizzo di Wordpress",
        "Panoramica di Google Analytics, Google Ads ed altri siti per la Seo",
      ],
    },
    {
      title: "Corso in Full-Stack Web Development",
      subtitle: "Boolean ~ 2022 - 2023",
      body: [
        "Durata di 700 ore di lezioni ed esercitazioni quotidiane, con obiettivi e scadenze ben definite",
        "3 settimane di progetto finale lavorando in team seguiti da pm",
        "Appreso dei linguaggi frontend e backend, riproducendo funzionalità o aspetto di siti come Netflix, WhatsApp, Spotify, Discord, Portfolio, Dashboard",
      ],
    },
  ]);

  const [experience] = useState([
    {
      title: "Stage ufficio informatico del comune di Reggello",
      subtitle: "Comune di Reggello(FI) ~ 2017",
      body: [
        "Installazione degli ssd in sostituzione agli hard disk",
        "Utilizzo dei vari programmi di Microsoft Office",
        "Assistenza ai vari uffici",
      ],
    },
    {
      title: "Jr. Web Developer - Social Media Manager",
      subtitle:
        "Collaborazioni con prestazione occasionale ~ Settembre 2020 - Giugno 2023",
      body: [
        "Creazione e manutenzione di siti web",
        "Creazione dashboard su Retool",
        "Gestione account social su Instagram e Facebook",
      ],
    },
    {
      title: "Jr. Full Stack Developer Trainee",
      subtitle: "Boolean ~ Novembre 2022 - Giugno 2023",
      body: [
        "Esercizi quotidiani da fare seguendo delle milestone",
        "3 settimane di progetto in team utilizzando Git e Github lavorando su più repository con i branches",
        "Replica siti web",
      ],
    },
    {
      title: "Jr. Front-End Developer",
      subtitle: "Freedom Digital Systems ~ Agosto 2023 - Presente",
      body: [
        "Utilizzo di tecnologie come Tailwind, Typescript, REST API, autenticazioni SPA(cookie, jwt token, oidc), React per costruzione pagine web per il prodotto vetrineincloud.it",
        "Approfondimento di argomenti come i protocolli TCP e UDP, Socket",
        "Lavorato secondo la metodologia AGILE",
        "Utilizzo di VsCode, Git",
      ],
    },
  ]);

  return (
    <section
      id="story"
      className="bg-color-dark text-color-light text-center py-24"
    >
      <div className="container px-10 lg:px-20 2xl:px-40 mx-auto">
        <h3 className="font-bold text-2xl sm:text-3xl mb-5">
          <span className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r  from-primary-color to-secondary-color">
            &lt;
          </span>
          Story
          <span className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r  from-primary-color to-secondary-color">
            /&gt;
          </span>
        </h3>
        <div className="flex justify-center items-center gap-8 mb-5">
          <h6
            onClick={() => setIsEducation(true)}
            className={`${
              isEducation ? "text-primary-color" : ""
            } cursor-pointer font-bold text-xl sm:text-2xl`}
          >
            <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
            Education
          </h6>
          <h6
            onClick={() => setIsEducation(false)}
            className={`${
              !isEducation ? "text-primary-color" : ""
            } cursor-pointer font-bold text-xl sm:text-2xl`}
          >
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
            Experience
          </h6>
        </div>
      </div>
      <div className="container px-10 lg:px-20 2xl:px-40 mx-auto relative">
        <div
          className={`${
            isEducation ? "block" : "hidden"
          } text-left p-5 flex flex-col sm:items-center story-box`}
        >
          {education.map((ed, index) => {
            return (
              <div
                key={index}
                className="my-card mb-5 pb-3 sm:pb-0 border-b-2 sm:border-b-0 border-primary-color sm:right-[128px] sm:even:left-[150px] md:right-[150px] md:even:left-[172px] lg:right-[178px] lg:even:left-[200px] xl:right-[222px] xl:even:left-[244px] 2xl:right-[237px] 2xl:even:left-[260px] sm:w-1/3"
              >
                <div className="head mb-3">
                  <h6 className="text-lg font-bold">{ed.title}</h6>
                  <p className="text-sm text-gray-300">{ed.subtitle}</p>
                </div>
                <div className="body">
                  <ul className="list-disc pl-5">
                    {ed.body.map((el, index) => {
                      return <li key={index}>{el}</li>;
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className={`${
            !isEducation ? "block" : "hidden"
          } text-left p-5 flex flex-col sm:items-center experience-box`}
        >
          {experience.map((ed, index) => {
            return (
              <div
                key={index}
                className="my-card mb-5 pb-3 sm:pb-0 border-b-2 sm:border-b-0 border-primary-color sm:right-[128px] sm:even:left-[150px] md:right-[150px] md:even:left-[172px] lg:right-[178px] lg:even:left-[200px] xl:right-[222px] xl:even:left-[244px] 2xl:right-[237px] 2xl:even:left-[260px] sm:w-1/3"
              >
                <div className="head mb-3">
                  <h6 className="text-lg font-bold">{ed.title}</h6>
                  <p className="text-sm text-gray-300">{ed.subtitle}</p>
                </div>
                <div className="body">
                  <ul className="list-disc pl-5">
                    {ed.body.map((el, index) => {
                      return <li key={index}>{el}</li>;
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Story;
