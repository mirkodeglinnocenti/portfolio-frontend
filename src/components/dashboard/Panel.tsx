import AuthUser from "../../services/AuthUser";

const Panel = () => {
  const { user } = AuthUser();
  return (
    <section className="About bg-color-dark text-color-light py-14 text-center">
      <div className="container px-10 lg:px-32 xl:px-40 2xl:px-60 mx-auto">
        <h3 className="font-bold text-2xl sm:text-3xl mb-5">
          <span className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r  from-primary-color to-secondary-color">
            &lt;
          </span>
          Dashboard
          <span className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r  from-primary-color to-secondary-color">
            /&gt;
          </span>
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <p className="text-xl sm:text-3xl">
            Benvenuto nella tua area riservata <br/>
            <span className="text-lg sm:text-2xl">{user.email}</span>
          </p>
          <img
            src="assets/img/dashboard.svg"
            alt="illustrazione"
            className="w-2/3 md:w-1/2 fill-color-light hover:fill-primary-color duration-200"
          />
        </div>
      </div>
    </section>
  );
};

export default Panel;
