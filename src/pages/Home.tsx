import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Skills from "../components/home/Skills";
import Api from "../components/home/Api";

const Home = () => {
  return (
    <div className='container px-5 bg-color-dark'>
      <Hero />
      <About />
      <Skills />
      <Api/>
    </div>
  );
};

export default Home;
