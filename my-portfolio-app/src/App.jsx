
import './App.css';
import { Footer, Navbar } from './components';


import {Outlet} from "react-router-dom";

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default App;