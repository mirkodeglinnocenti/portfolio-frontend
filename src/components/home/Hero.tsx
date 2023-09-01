const Hero = () => {
  return (
    <section className="Hero bg-color-dark text-color-light">
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-[calc(100vh-72px)]">
          <div className="w-1/2">
            <p className="text-7xl">Hello,</p>
            <h1 className="text-7xl font-bold mb-4">
              I&apos;m Mirko Degl&apos;Innocenti
            </h1>
            <h3 className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r  from-primary-color to-secondary-color">Jr. Front-End Developer</h3>
          </div>
          <div className="w-1/2 flex justify-center">
            <img
              className="w-1/2"
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
