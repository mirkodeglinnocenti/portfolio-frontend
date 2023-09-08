import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const [navItem] = useState([
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Linguaggi",
      url: "#skills",
    },
    {
      name: "Esperienza",
      url: "#story",
    },
    {
      name: "Contatti",
      url: "#contact",
    },
  ]);

  let [open, setOpen] = useState(false);

  return (
    <header className="bg-color-light py-3 md:py-1 text-color-dark sticky top-0 z-50">
      <div className="container px-4 sm:px-20 mx-auto">
        <nav className="md:flex justify-between items-center">
          <div>
            <img src="/assets/img/logo.svg" alt="logo di Mirko" />
          </div>
          <div onClick={()=>setOpen(!open)} className="text-2xl absolute top-3 right-6 cursor-pointer md:hidden">
            <FontAwesomeIcon icon={!open ? faBars : faX} />
          </div>
          <div className={`${open ? "top-15" : "hidden"} md:flex gap-4 items-center absolute md:static left-0 w-full md:w-auto bg-color-light md:pl-0 pl-6 sm:pl-32 md:pb-0 pb-6`}>
            <ul className="md:flex gap-4 font-bold">
              {navItem.map((item, index) => (
                <li key={index} className="md:py-0 my-6 hover:text-primary-color">
                  <a href={item.url}>{item.name}</a>
                </li>
              ))}
            </ul>

            <a href="mailto:deglinnocentimirko@gmail.com" className="rounded-xl font-bold px-4 py-2 bg-gradient-to-r from-primary-color to-secondary-color hover:text-color-light">
              Contattami
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
