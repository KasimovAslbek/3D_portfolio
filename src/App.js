import Contact from './components/Contact';
import Hero from './components/Hero';
import Who from './components/Who';
import Works from './components/Works';
import './index.css';


function App() {
  return (
    <div className=" h-screen snap-y snap-mandatory scroll-smooth overflow-y-auto scrollbar text-white bg-mainbg">
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
    </div>
  );
}

export default App;
