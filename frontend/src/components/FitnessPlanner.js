import { useState } from 'react';
import axios from 'axios';
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';


const FitnessPlanner = () => {
    const [goal, setGoal] = useState('');
    const [cardio, setCardio] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [workoutPlan, setWorkoutPlan] = useState([]);

    const [numDays, setNumDays] = useState(3);
    const [intensity, setIntensity] = useState('medium');
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    const handleGoalChange = (event) => {
        setGoal(event.target.value);
    };

    const handleCardioChange = (event) => {
        setCardio(event.target.checked);
    };

    const handleNumDaysChange = (event) => {
        setNumDays(event.target.value);
    };

    const handleIntensityChange = (event) => {
        setIntensity(event.target.value);
    };

    const handleGenerateClick = async () => {
        setIsLoading(true);
        setWorkoutPlan('');
        try {
            const gpt3Endpoint = 'https://api.openai.com/v1/engines/text-davinci-003/completions';
            const prompt = `Generate a ${numDays}-day ${intensity} intensity workout plan, with sets and reps , with each day focused on a specific muscle group and at least 7 workouts per group, for someone who wants to ${goal}${cardio ? ' and do cardio' : ''}`;

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

            const response = await axios.post(gpt3Endpoint, data, { headers });
            const workoutPlan = response.data.choices[0].text;
            setWorkoutPlan(workoutPlan.split('\n'));
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    if (!user) {
        navigate("/");
    }

    return (
        <div className="max-w-2xl mx-auto my-8 p-8 bg-white rounded-lg shadow-lg" style={{ height: "180vh", overflowY: "scroll" }}>
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
            <h2 className="text-2xl font-bold mb-4 text-teal-600">Fitness Planner</h2>
            <div className="mb-4">
                <label htmlFor="goal" className="block font-medium mb-2 text-black">What is your fitness goal?</label>
                <select id="goal" className="form-select w-full bg-gray-100 text-black border-2 border-teal-600 py-2 px-3 rounded-lg" value={goal} onChange={handleGoalChange}>
                    <option value="">Select a goal</option>
                    <option value="gain weight">Gain weight</option>
                    <option value="get toned">Get toned</option>
                    <option value="lose weight">Lose weight</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="cardio" className="flex items-center cursor-pointer text-black">
                    <input type="checkbox" id="cardio" className="form-checkbox text-teal-600" checked={cardio} onChange={handleCardioChange} />
                    <span className="ml-2">Include cardio in your workout plan?</span>
                </label>
            </div>
            <div className="mb-4">
                <label htmlFor="days" className="block font-medium mb-2 text-black">How many days per week do you want to work out?</label>
                <select id="days" className="form-select w-full bg-gray-100 text-black border-2 border-teal-600 py-2 px-3 rounded-lg" value={numDays} onChange={handleNumDaysChange}>
                    <option value="">Select a number of days</option>
                    <option value="3">3 days</option>
                    <option value="4">4 days</option>
                    <option value="5">5 days</option>
                    <option value="6">6 days</option>
                    <option value="7">7 days</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="intensity" className="block font-medium mb-2 text-black">How intense do you want your workouts to be?</label>
                <select id="intensity" className="form-select w-full bg-gray-100 text-black border-2 border-teal-600 py-2 px-3 rounded-lg" value={intensity} onChange={handleIntensityChange}>
                    <option value="">Select an intensity level</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
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
            <div className="text-center">
                <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg" onClick={handleGenerateClick}>Generate workout plan</button>
            </div>
            <div className="relative mt-6">
                {isLoading && (
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                        <div className="w-8 h-8 border-4 border-t-4 border-teal-600 rounded-full animate-spin"></div>
                    </div>
                )}
            </div>



            {workoutPlan.length > 0 && (
                <div className="mt-4">
                    <h3 className="text-lg font-bold pt-4 mt-4 text-black">Workout Plan:</h3>
                    {workoutPlan.map((line, index) => (
                        <p key={index} className="text-black">{line}</p>
                    ))}

                </div>
            )}
        </div>
    );


}

export default FitnessPlanner;
