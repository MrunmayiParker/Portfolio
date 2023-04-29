import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';
import Contact from './components/contact/Contact';
import Testimonials from './components/testimonials/Testimonials';
import './app.scss';
import { useState } from "react";
import Menu from './components/menu/Menu';

function App() {
  const[menuOpen,setMenuOpen] = useState(false)  // inital state of the menu is off
  return (
    <div className="App">
      {/* <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="sections">
            <Intro />
            <Portfolio />
            <Works />
            <Testimonials />
            <Contact />
        </div>
        

    </div>
  );
}

export default App;
