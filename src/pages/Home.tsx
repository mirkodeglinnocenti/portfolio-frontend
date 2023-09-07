import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Skills from "../components/home/Skills";
import Contacts from "../components/home/Contacts";
import Api from "../components/home/Api";

const Home = () => {
  return (
    <div className='bg-color-dark'>
      <Hero />
      <About />
      <Skills />
      <Api/>
      <Contacts />
    </div>
  );
};

export default Home;
