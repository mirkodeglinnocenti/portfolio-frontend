import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Skills from "../components/home/Skills";
import Story from "../components/home/Story";
import SocialLine from "../components/home/SocialLine";
import Projects from "../components/home/Projects";

const Home = () => {
  return (
    <div className='bg-color-dark'>
      <Hero />
      <About />
      <Skills />
      <Story/>
      <Projects/>
      <SocialLine/>
    </div>
  );
};

export default Home;
