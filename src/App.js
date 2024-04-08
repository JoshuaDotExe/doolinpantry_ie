import { Route, Routes } from 'react-router-dom';

import './App.css';

import Home from "./pages/Home"
import Geopark from "./pages/Geopark"
import Sustainability from "./pages/Sustainability"
import Contact from "./pages/Contact"

import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar></Navbar>
      <main className='flex h-full relative overflow-y-auto no-scrollbar'>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/sustainability" element={<Sustainability/>} />
            <Route path="/geopark" element={<Geopark/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
