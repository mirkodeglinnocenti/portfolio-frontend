import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Skills from "../components/home/Skills";
import Story from "../components/home/Story";
import Api from "../components/home/Api";

const Home = () => {
  return (
    <div className='bg-color-dark'>
      <Hero />
      <About />
      <Skills />
      <Story/>
      <Api/>
    </div>
  );
};

export default Home;
