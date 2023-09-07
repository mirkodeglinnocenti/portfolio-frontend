const Contacts = () => {
  return (
    <section className="About bg-color-dark text-color-light py-14 text-center sm:text-start">
      <div className="container px-10 lg:px-32 xl:px-40 2xl:px-60 mx-auto">
        <h3 className="font-bold text-2xl sm:text-3xl mb-5">
          <span className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r  from-primary-color to-secondary-color">
            &lt;
          </span>
          Contact
          <span className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r  from-primary-color to-secondary-color">
            /&gt;
          </span>
        </h3>
        <ul>
          <li className="mb-5">
            <a
              href="mailto:deglinnocentimirko@gmail.com"
              className="sm:border-l-2 p-2 border-primary-color"
            >
              <span className="font-bold">email:</span>{" "}
              deglinnocentimirko@gmail.com
            </a>
          </li>
          <li>
            <h3 className="font-bold text-2xl sm:text-3xl mb-5">
              <span className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r  from-primary-color to-secondary-color">
                &lt;
              </span>
              Social
              <span className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r  from-primary-color to-secondary-color">
                /&gt;
              </span>
            </h3>
            <div className="flex justify-center sm:justify-start items-center gap-4">
              <a href="https://github.com/mirkodeglinnocenti" target="blank">
                <img
                  className="w-8"
                  src="/assets/img/github.png"
                  alt="logo di github"
                />
              </a>
              <a href="https://www.linkedin.com/in/mirko-deglinnocenti" target="blank">
                <img
                  className="w-10"
                  src="/assets/img/linkedin.png"
                  alt="logo di linkedin"
                />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contacts;
