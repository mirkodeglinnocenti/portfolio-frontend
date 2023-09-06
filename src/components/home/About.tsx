const About = () => {
  return (
    <section className="About bg-color-dark text-color-light py-14">
      <div className="container px-10 lg:px-20 2xl:px-40 mx-auto">
        <h3 className="font-bold text-center text-2xl sm:text-3xl sm:text-start mb-5">
          <span className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r  from-primary-color to-secondary-color">
            &lt;
          </span>
          About
          <span className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r  from-primary-color to-secondary-color">
            /&gt;
          </span>
        </h3>
        <p className="sm:border-l-2 p-2 border-primary-color text-center sm:text-start">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta
          ligula erat, ut consequat tellus ultricies a. Fusce blandit vulputate
          leo, id pharetra ante placerat interdum. Nunc a tempus nibh. Curabitur
          et vulputate massa. Maecenas diam erat, tempus in faucibus id, porta
          non nunc. Duis sed lobortis elit, at varius lacus. Vivamus viverra
          magna elementum justo varius imperdiet. Suspendisse eget nunc metus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          convallis pharetra pharetra. Aenean tortor justo, condimentum in felis
          id, tincidunt laoreet est.
        </p>
      </div>
    </section>
  );
};

export default About;
