import { Route, Routes } from 'react-router-dom';

import './App.css';

import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"

import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <main className='flex-grow relative h-16'>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
