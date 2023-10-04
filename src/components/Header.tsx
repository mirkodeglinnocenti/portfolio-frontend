import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [navItem] = useState([
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Linguaggi",
      url: "/#skills",
    },
    {
      name: "Esperienza",
      url: "/#story",
    },
    {
      name: "Contatti",
      url: "/#contact",
    },
  ]);

  let [open, setOpen] = useState(false);

  return (
    <header className="py-3 md:py-1 bg-color-dark text-color-light sticky top-0 z-50">
      <div className="container px-4 sm:px-20 mx-auto">
        <nav className="md:flex justify-between items-center">
          <div>
            <a href="/">
              <img src="/assets/img/logo.svg" alt="logo di Mirko" />
            </a>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-2xl absolute top-3 right-6 cursor-pointer md:hidden"
          >
            <FontAwesomeIcon icon={!open ? faBars : faX} />
          </div>
          <div
            className={`${
              open ? "top-15" : "hidden"
            } md:flex gap-4 bg-color-dark text-color-light items-center absolute md:static left-0 w-full md:w-auto md:pl-0 pl-6 sm:pl-32 md:pb-0 pb-6`}
          >
            <ul className="md:flex gap-4 font-bold">
              {navItem.map((item, index) => (
                <li
                  key={index}
                  className="md:py-0 my-6 hover:text-primary-color"
                >
                  {/#/.test(item.url) ? (
                    <a href={item.url} onClick={() => setOpen(!open)}>
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.url}
                      onClick={() => {
                        setOpen(!open);
                        window.scrollTo(0, 0);
                      }}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <Link
              to="/registration"
              className="rounded-xl font-bold px-4 py-2 bg-primary-color text-white hover:text-color-light"
              onClick={() => setOpen(!open)}
            >
              Registrati
            </Link>
            <Link
              to="/login"
              className="rounded-xl font-bold px-4 py-2 ml-2 md:ml-0 bg-primary-color text-white hover:text-color-light"
              onClick={() => setOpen(!open)}
            >
              Accedi
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
