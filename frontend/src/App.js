import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import WorkoutGenerator from './components/WorkoutGenerator';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Logpage from './components/Logpage';
import OneRepMaxCalculator from './components/OneRepMaxCalculator';
import FitnessPlanner from './components/FitnessPlanner';
import Motivating from './components/Motivating';
import RecipeGenerator from './components/RecipeGenerator';
import Calorie from './components/Calorie';
import About from './components/About';

function App() {
  return (
    <> 
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route index element = {<Logpage />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/WorkoutGenerator" element={<WorkoutGenerator />} />
          <Route path="/FitnessPlanner" element={<FitnessPlanner />} />
          <Route path="/Recipegenerator" element={<RecipeGenerator />} />
          <Route path ="/OnerepMaxCalculator" element={<OneRepMaxCalculator />} />
          <Route path="/calories" element={<Calorie />} />
          <Route path="/motivating" element={<Motivating />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
