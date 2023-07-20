import React, { useState } from 'react';
import axios from 'axios';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';



const Calorie = () => {
    const [currentWeight, setCurrentWeight] = useState('');
    const [targetWeight, setTargetWeight] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [gender, setGender] = useState('');
    const [activityLevel, setActivityLevel] = useState('');
    const [goal, setGoal] = useState('');
    const [calorieGoal, setCalorieGoal] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isValidForm, setIsValidForm] = useState(false);
    const [user, loading] = useAuthState(auth);
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();



    const handleGenerateCalorieGoal = async () => {
        setIsLoading(true);
        setErrorMessage('');
        setCalorieGoal('');
        setShowPopup(true); // clear the previous calorie goal

        const gpt3Endpoint = 'https://api.openai.com/v1/engines/text-davinci-003/completions';
        const prompt = `Given the current weight of ${currentWeight} lbs, target weight of ${targetWeight} lbs, age of ${age}, height of ${height} Centimeters, gender ${gender}, activity level of ${activityLevel}, calculate the required daily calorie intake and only show the amount of calories required daily.`;
        const data = {
            prompt,
            max_tokens: 512,
            temperature: 0.5,
            n: 1,
        };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
        };

        try {
            const response = await axios.post(gpt3Endpoint, data, { headers });
            const calorieGoalText = response.data.choices[0].text;
            setCalorieGoal(calorieGoalText);
        } catch (error) {
            console.error(error);
            setErrorMessage('Error generating calorie goal. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    if(!user){
        navigate("/");
    }

    

    return (
        <div className="max-w-md mx-auto p-6">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-700 tracking-wide">
            Calorie Goal Generator
          </h2>
          <form className="space-y-6">
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">
      Current Weight (lbs)
    </label>
    <input
      type="number"
      value={currentWeight}
      onChange={(event) => setCurrentWeight(event.target.value)}
      className="border border-gray-400 rounded w-full py-2 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500"
      placeholder="Enter your current weight"
      aria-label="Current weight in pounds"
    />
  </div>

  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">
      Target Weight (lbs)
    </label>
    <input
      type="number"
      value={targetWeight}
      onChange={(event) => setTargetWeight(event.target.value)}
      className="border border-gray-400 rounded w-full py-2 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500"
      placeholder="Enter your target weight"
      aria-label="Target weight in pounds"
    />
  </div>

  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">
      Age
    </label>
    <input
      type="number"
      value={age}
      onChange={(event) => setAge(event.target.value)}
      className="border border-gray-400 rounded w-full py-2 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500"
      placeholder="Enter your age"
      aria-label="Age"
    />
  </div>

  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">
      Height (in cm)
    </label>
    <input
      type="number"
      value={height}
      onChange={(event) => setHeight(event.target.value)}
      className="border border-gray-400 rounded w-full py-3 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500"
      placeholder="Enter your height in inches"
      aria-label="Height in inches"
    />
  </div>

  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">
      Gender
    </label>
    <div className="relative">
      <select
        value={gender}
        onChange={(event) => setGender(event.target.value)}
        className="appearance-none border border-gray-400 rounded-md w-full py-2 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500"
        aria-label="Select your gender"
      >
        <option value="">-- Select --</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 2l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </svg>
      </div>
    </div>
  </div>

  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">
      Activity Level (per week)
    </label>
    <div className="relative">
      <select
        value={activityLevel}
        onChange={(event) => setActivityLevel(event.target.value)}
        className="appearance-none border border-gray-400 rounded-md w-full py-2 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500"
        aria-label="Select your activity level per week"
      >
        <option value="">-- Select --</option>
        <option value="sedentary">Sedentary (little or no exercise)</option>
        <option value="lightly-active">Lightly Active (light exercise or sports 1-3 days per week)</option>
        <option value="moderately-active">Moderately Active (moderate exercise or sports 3-5 days per week)</option>
        <option value="very-active">Very Active (hard exercise or sports 6-7 days per week)</option>
        <option value="extra-active">Extra Active (very hard exercise or sports, physical job or training twice a day)</option>
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 2l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </svg>
      </div>
    </div>
  </div>

  

  <div className="flex justify-center">
    <button
      type="button"
      onClick={handleGenerateCalorieGoal}
      className="py-2 px-4 bg-teal-600 hover:bg-teal-800 text-white font-bold rounded"
    >
      Generate Calorie Goal
    </button>
  </div>
</form>
 <br></br>
    
 {showPopup && (
  <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
    <div className="max-w-sm mx-auto p-6 bg-teal-600 rounded-lg shadow-lg">
      <div className="text-center text-white">
        <h3 className="font-bold text-2xl mb-2">Calorie Goal:</h3>
      </div>
      <div className="loading">
        {isLoading && (
          <div className="loading-indicator">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </div>
      <p className="text-lg text-white">{calorieGoal}</p>
      {errorMessage && (
        <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
      )}
      <div className="flex justify-center mt-4">
        <button
          type="button"
          onClick={() => setShowPopup(false)} // Close the popup
          className="py-2 px-4 bg-white hover:bg-gray-300 text-teal-600 font-bold rounded"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}

    </div>
 );
};

export default Calorie;
