const Header = () => {
  return (
    <header className="bg-color-light py-4 text-color-dark sticky top-0 z-50">
      <div className="container px-4 sm:px-20 mx-auto">
        <nav className="flex justify-between items-center">
          <div>MD</div>
          <div className="flex gap-4 items-center">
            <ul className="flex gap-4 font-bold">
              <li>
                <a href="#">Home</a>
              </li>
              <li className="">
                <a href="#">Linguaggi</a>
              </li>
              <li>
                <a href="#">Esperienza</a>
              </li>
              <li>
                <a href="#">Contatti</a>
              </li>
            </ul>

            <button className="rounded-xl font-bold px-4 py-2 bg-gradient-to-r from-primary-color to-secondary-color">
              Contattami
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
