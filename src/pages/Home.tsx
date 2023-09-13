import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Skills from "../components/home/Skills";
import Story from "../components/home/Story";

const Home = () => {
  return (
    <div className='bg-color-dark'>
      <Hero />
      <About />
      <Skills />
      <Story/>
    </div>
  );
};

export default Home;
