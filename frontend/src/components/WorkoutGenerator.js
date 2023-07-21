import React, { useState } from 'react';
import axios from 'axios';
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';

const WorkoutGenerator = () => {
  const [muscleGroups, setMuscleGroups] = useState([]);
  const [hasGymAccess, setHasGymAccess] = useState(false);
  const [workout, setWorkout] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [workoutLength, setWorkoutLength] = useState(60);
  const [showPopup, setShowPopup] = useState(false);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const handleMuscleGroupChange = (event) => {
    const { value } = event.target;
    setMuscleGroups((prevMuscleGroups) =>
      prevMuscleGroups.includes(value)
        ? prevMuscleGroups.filter((group) => group !== value)
        : [...prevMuscleGroups, value]
    );
  };

  const handleGymAccessChange = (value) => {
    setHasGymAccess(value);
  };

  const handleGenerateWorkout = async () => {
    setIsLoading(true);
    setErrorMessage('');
    setWorkout([]);
    setShowPopup(true); // Show the popup immediately

    const gpt3Endpoint = 'https://api.openai.com/v1/engines/text-davinci-003/completions';
    const prompt = `Generate a ${workoutLength}-minute workout plan in a list and easily readable format for ${muscleGroups.join(', ')} muscles ${hasGymAccess ? 'with gym access' : 'without gym access'}. and explain how to do each`;
    const data = {
      prompt,
      max_tokens: 500,
      temperature: 0.5,
      n: 1,
    };
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
    };

    try {
      const response = await axios.post(gpt3Endpoint, data, { headers });
      const workoutPlan = response.data.choices[0].text.split('\n');
      setWorkout(workoutPlan.map(item => <p>{item}</p>));
    } catch (error) {
      console.error(error);
      setErrorMessage('Error generating workout plan. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleTogglePopup = () => {
    setShowPopup(!showPopup);
  };

  if (!user) {
    navigate("/");
  }

    return (

        <div className="max-w-2xl mx-auto p-6" style={{ height: "90vh", overflowY: "hidden" }}>
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                <svg
                    className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
                    viewBox="0 0 1155 678"
                >
                    <path
                        fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                        fillOpacity=".3"
                        d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                    />
                    <defs>
                        <linearGradient
                            id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                            x1="1455.49"
                            x2="-78.208"
                            y1="30.177"  // Adjusted value
                            y2="304.645" // Adjusted value
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#008080">
                                <animate
                                    attributeName="offset"
                                    values="0; 9"
                                    dur="4s"
                                    repeatCount="indefinite"
                                />
                            </stop>
                            <stop offset="1" stopColor="#008080">
                                <animate
                                    attributeName="offset"
                                    values="0; 9"
                                    dur="4s"
                                    repeatCount="indefinite"
                                />
                            </stop>
                        </linearGradient>
                        <linearGradient
                            id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                            x1="3455.49"
                            x2="-78.208"
                            y1="30.177"  // Adjusted value
                            y2="304.645" // Adjusted value
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#007070">
                                <animate
                                    attributeName="offset"
                                    values="0; 4"
                                    dur="4s"
                                    repeatCount="indefinite"
                                />
                            </stop>
                            <stop offset="1" stopColor="#007070">
                                <animate
                                    attributeName="offset"
                                    values="0; 4"
                                    dur="4s"
                                    repeatCount="indefinite"
                                />
                            </stop>
                        </linearGradient>

                    </defs>
                </svg>
            </div>
            <h2 className="text-2xl font-bold mb-6 text-center">Workout Generator</h2>
            <form className="mb-6">
            <br></br>
           

 <span className="block mb-2 text-center font-bold text-3xl">Select the muscle groups</span>
<br></br>
  <div className="flex flex-wrap justify-center mb-6">
    <div className="flex items-center mb-2">
      <button
        type="button"
        value="Chest"
        onClick={handleMuscleGroupChange}
        className={`inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-md px-4 py-2 focus:outline-none mr-2 ${
          muscleGroups.includes('Chest') ? 'bg-teal-600 text-white' : ''
        }`}
      >
        Chest
      </button>
    </div>
    <div className="flex items-center mb-2">
      <button
        type="button"
        value="Back"
        onClick={handleMuscleGroupChange}
        className={`inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-md px-4 py-2 focus:outline-none mr-2 ${
          muscleGroups.includes('Back') ? 'bg-teal-600 text-white' : ''
        }`}
      >
        Back
      </button>
    </div>
    <div className="flex items-center mb-2">
      <button
        type="button"
        value="Legs"
        onClick={handleMuscleGroupChange}
        className={`inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-md px-4 py-2 focus:outline-none mr-2 ${
          muscleGroups.includes('Legs') ? 'bg-teal-600 text-white' : ''
        }`}
      >
        Legs
      </button>
    </div>
    <div className="flex items-center mb-2">
      <button
        type="button"
        value="Biceps"
        onClick={handleMuscleGroupChange}
        className={`inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-md px-4 py-2 focus:outline-none mr-2 ${
          muscleGroups.includes('Biceps') ? 'bg-teal-600 text-white' : ''
        }`}
      >
        Biceps
      </button>
    </div>
  </div>
  <div className="flex flex-wrap justify-center mb-6">
    <div className="flex items-center mb-2">
      <button
        type="button"
        value="Triceps"
        onClick={handleMuscleGroupChange}
        className={`inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-md px-4 py-2 focus:outline-none mr-2 ${
          muscleGroups.includes('Triceps') ? 'bg-teal-600 text-white' : ''
        }`}
      >
        Triceps
      </button>
    </div>
    <div className="flex items-center mb-2">
      <button
        type="button"
        value="Shoulders"
        onClick={handleMuscleGroupChange}
        className={`inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-md px-4 py-2 focus:outline-none mr-2 ${
          muscleGroups.includes('Shoulders') ? 'bg-teal-600 text-white' : ''
        }`}
      >
        Shoulders
      </button>
    </div>
    <div className="flex items-center mb-2">
      <button
        type="button"
        value="Abs"
        onClick={handleMuscleGroupChange}
        className={`inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-md px-4 py-2 focus:outline-none mr-2 ${
          muscleGroups.includes('Abs') ? 'bg-teal-600 text-white' : ''
        }`}
      >
        Abs
      </button>
    </div>
  </div>

  <span className="block mb-2 text-center font-bold text-2xl">Do you have access to a gym?</span>
  <br></br>
  <div className="flex justify-center mb-6">
  <div className="flex items-center">
    <label className="inline-block">
      <input
        type="radio"
        name="gymAccess"
        value="yes"
        checked={hasGymAccess}
        onChange={() => handleGymAccessChange(true)}
        className="hidden"
      />
      <span
        className={`inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-md px-4 py-2 focus:outline-none mr-2 cursor-pointer ${
          hasGymAccess ? 'bg-teal-600 text-white' : ''
        }`}
        onClick={() => handleGymAccessChange(true)}
      >
        Yes
      </span>
    </label>
    <label className="inline-block">
      <input
        type="radio"
        name="gymAccess"
        value="no"
        checked={!hasGymAccess}
        onChange={() => handleGymAccessChange(false)}
        className="hidden"
      />
      <span
        className={`inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-md px-4 py-2 focus:outline-none cursor-pointer ${
          !hasGymAccess ? 'bg-teal-600 text-white' : ''
        }`}
        onClick={() => handleGymAccessChange(false)}
      >
        No
      </span>
    </label>
  </div>
</div>

<br></br>
<div className="flex justify-center mb-6">
  <label className="block bg-gray-200 text-gray-800 font-semibold text-lg rounded-md py-2 px-4 shadow-md hover:bg-gray-300 transition-colors duration-300">
    <span className="block mb-2">How long do you want your workout to be (in minutes)?</span>
    <input
      type="number"
      value={workoutLength}
      onChange={(event) => setWorkoutLength(event.target.value)}
      className="py-2 px-4 border border-gray-400 rounded w-full mt-2 focus:outline-none focus:border-teal-600 bg-white text-gray-800"
    />
  </label>
</div>
</form>

{showPopup && (
  <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-teal-600 rounded-md w-170 max-h-170  shadow-lg">
      <div className="p-9">
        <h3 className="text-2xl font-bold mb-4 text-white">Workout Plan</h3>
        {isLoading ? (
          <div className="flex items-center justify-center h-32 mb-4">
            <div className="loading-indicator">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : (
          <div className="text-lg text-white max-h-80 overflow-y-auto">
            {workout}
          </div>
        )}
      </div>
      <div className="p-4 flex justify-center">
        <button
          type="button"
          onClick={handleTogglePopup}
          className="py-2 px-4 bg-white hover:bg-gray-300 text-teal-600 font-semibold"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}

<div className="flex justify-center mt-4">
  <button
    type="button"
    onClick={handleGenerateWorkout}
    className="py-2 px-6 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-teal-600"
  >
    Generate Workout
  </button>
</div>

    </div>
  );
};

export default WorkoutGenerator;