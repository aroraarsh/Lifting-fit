import { useState } from 'react';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';

const OneRepMaxCalculator = () => {
  const [weight, setWeight] = useState(0);
  const [reps, setReps] = useState(0);
  const [oneRepMax, setOneRepMax] = useState(0);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  function calculateOneRepMax() {
    const calculatedOneRepMax = Math.round(weight / (1.0278 - 0.0278 * reps));
    setOneRepMax(calculatedOneRepMax);
  }

  if (!user) {
    navigate("/");
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h1 className="text-3xl font-bold mb-6 text-teal-600">One Rep Max Calculator</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-2">Weight Lifted (in pounds):</label>
            <input
              className="border border-gray-400 rounded-md py-2 px-4 w-full"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Number of Reps:</label>
            <input
              className="border border-gray-400 rounded-md py-2 px-4 w-full"
              type="number"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
            />
          </div>
          <button
            className="bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors duration-300 w-full"
            type="button"
            onClick={calculateOneRepMax}
          >
            Calculate One Rep Max
          </button>
        </form>
        {oneRepMax > 0 && (
          <div className="mt-6">
            <p className="text-xl font-bold mb-2">Your estimated one rep max is {oneRepMax} pounds.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default OneRepMaxCalculator;