import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Skills from "../components/home/Skills";
import Contacts from "../components/home/Contacts";
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
      <Contacts />
    </div>
  );
};

export default Home;
