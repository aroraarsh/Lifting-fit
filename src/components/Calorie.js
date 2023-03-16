import React, { useState } from 'react';
import axios from 'axios';


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

    const handleGenerateCalorieGoal = async () => {
        setIsLoading(true);
        setErrorMessage('');
        setCalorieGoal(''); // clear the previous calorie goal

        const gpt3Endpoint = 'https://api.openai.com/v1/engines/text-davinci-003/completions';
        const prompt = `Given the current weight of ${currentWeight} lbs, target weight of ${targetWeight} lbs, age of ${age}, height of ${height} inches, gender ${gender}, activity level of ${activityLevel}, and goal to ${goal}, calculate the required daily calorie intake.`;
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

    return (
        <div className="max-w-2xl mx-auto p-6" style={{ height: "150vh", overflowY: "scroll", }}>
            
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
            <h2 className="text-4xl font-bold mb-8 text-center text-gray-700 tracking-wide">
                Calorie Goal Generator
            </h2>
            <form className="mb-6">
                <label className="block mb-4 text-center">
                    <span className="text-gray-700 font-bold mb-2 text-lg tracking-wide">Current Weight (lbs)</span>
                    <input
                        type="number"
                        value={currentWeight}
                        onChange={(event) => setCurrentWeight(event.target.value)}
                        className="border border-gray-400 rounded w-full py-2 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Enter your current weight"
                        aria-label="Current weight in pounds"
                    />
                </label>


                <label className="block mb-4 text-center">
                    <span className="text-gray-700 font-bold mb-2 text-lg tracking-wide">Target Weight (lbs)</span>
                    <input
                        type="number"
                        value={targetWeight}
                        onChange={(event) => setTargetWeight(event.target.value)}
                        className="border border-gray-400 rounded w-full py-2 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Enter your target weight"
                        aria-label="Target weight in pounds"
                    />
                </label>


                <label className="block mb-4 text-center">
                    <span className="text-gray-700 font-bold mb-2 text-lg tracking-wide">Age</span>
                    <input
                        type="number"
                        value={age}
                        onChange={(event) => setAge(event.target.value)}
                        className="border border-gray-400 rounded w-full py-2 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Enter your age"
                        aria-label="Age"
                    />
                </label>


                <label className="block mb-4 text-center">
                    <span className="text-gray-700 font-bold mb-2 text-lg tracking-wide">Height (inches)</span>
                    <input
                        type="number"
                        value={height}
                        onChange={(event) => setHeight(event.target.value)}
                        className="border border-gray-400 rounded w-full py-3 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Enter your height in inches"
                        aria-label="Height in inches"
                    />
                </label>


                <label className="block mb-4 text-center">
                    <span className="text-gray-700 font-bold mb-2 text-lg tracking-wide">Gender</span>
                    <select
                        value={gender}
                        onChange={(event) => setGender(event.target.value)}
                        className="border border-gray-400 rounded w-full py-2 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                        aria-label="Select your gender"
                    >
                        <option value="">-- Select --</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </label>

                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                    <svg
                        className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                        viewBox="0 0 1155 678"
                    >
                        <path
                            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                            fillOpacity=".3"
                            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                        />
                        <defs>
                            <linearGradient
                                id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                                x1="1155.49"
                                x2="-78.208"
                                y1="-500"
                                y2="474.645"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#008080">
                                    <animate
                                        attributeName="offset"
                                        values="0; 1"
                                        dur="4s"
                                        repeatCount="indefinite"
                                    />
                                </stop>
                                <stop offset="1" stopColor="#008080">
                                    <animate
                                        attributeName="offset"
                                        values="0; 1"
                                        dur="4s"
                                        repeatCount="indefinite"
                                    />
                                </stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>


                <label className="block mb-4 text-center">
                    <span className="text-gray-700 font-bold mb-2 text-lg tracking-wide">Activity Level (per week)</span>
                    <select
                        value={activityLevel}
                        onChange={(event) => setActivityLevel(event.target.value)}
                        className="border border-gray-400 rounded w-full py-2 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                        aria-label="Select your activity level per week"
                    >
                        <option value="">-- Select --</option>
                        <option value="sedentary">Sedentary (little or no exercise)</option>
                        <option value="lightly-active">Lightly Active (light exercise or sports 1-3 days per week)</option>
                        <option value="moderately-active">Moderately Active (moderate exercise or sports 3-5 days per week)</option>
                        <option value="very-active">Very Active (hard exercise or sports 6-7 days per week)</option>
                        <option value="extra-active">Extra Active (very hard exercise or sports, physical job or training twice a day)</option>
                    </select>
                </label>


                <label className="block mb-4 text-center">
                    <span className="text-gray-700 font-bold mb-2 text-lg tracking-wide">Goal</span>
                    <div className="relative">
                        <select
                            value={goal}
                            onChange={(event) => setGoal(event.target.value)}
                            className="appearance-none border border-gray-400 rounded-md w-full py-2 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                            aria-label="Select your goal"
                        >
                            <option value="">-- Select --</option>
                            <option value="gain">Gain Weight</option>
                            <option value="lose">Lose Weight</option>
                            <option value="maintain">Maintain Weight</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 2l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                            </svg>
                        </div>
                    </div>
                </label>


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
            <div className="border border-gray-400 rounded p-4 bg-teal-600 text-white mt-2 ">
                <div className="text-center">
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
                <p className="text-lg">{calorieGoal}</p>
                {errorMessage && (
                    <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
                )}
            </div>
        </div>
    );
};

export default Calorie;
