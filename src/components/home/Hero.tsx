const Hero = () => {
  return (
    <section className="Hero bg-color-dark text-color-light">
      <div className="container md:px-10 lg:px-20 2xl:px-40 mx-auto">
        <div className="flex flex-col sm:flex-row justify-center items-center h-[65vh] sm:h-[calc(100vh-72px)]">
          <div className="sm:w-1/2 px-20 sm:pr-0 text-center sm:text-start">
            <p className="text-2xl sm:text-4xl lg:text-5xl xl:text-7xl">Hello,</p>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold mb-2 sm:mb-4">
              I&apos;m Mirko Degl&apos;Innocenti
            </h1>
            <h4 className="font-extrabold text-lg sm:text-xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r  from-primary-color to-secondary-color">
              Jr. Front-End Developer
            </h4>
          </div>
          <div className="sm:w-1/2 flex justify-center xl:justify-end order-first sm:-order-none sm:mb-0 mb-5">
            <img
              className="w-1/2 sm:w-2/3"
              src="/assets/img/profile-pic-tonda.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
