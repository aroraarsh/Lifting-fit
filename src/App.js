import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import WorkoutGenerator from './components/WorkoutGenerator';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';

function App() {
  return (
    <>
      
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route index element={<Homepage/>} />
          <Route path="/" element={<Homepage />} />
          <Route path="/WorkoutGenerator" element={<WorkoutGenerator />} />
          < Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

 
export default App;
