const Header = () => {
  return (
    <header className="bg-color-light py-4 text-color-dark">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="">MD</div>
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
          <div>
            <button className="rounded-xl font-bold px-4 py-2 bg-gradient-to-r from-primary-color to-secondary-color">
              Contattami
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
