import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import WorkoutGenerator from './components/WorkoutGenerator';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Calorie from './components/Calorie';

function App() {
  return (
    <> 
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route index element={<Homepage/>} />
          <Route path="/" element={<Homepage />} />
          <Route path="/WorkoutGenerator" element={<WorkoutGenerator />} />
          <Route path="/calories" element={<Calorie />} />
          < Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </>
  );
}

 
export default App;
