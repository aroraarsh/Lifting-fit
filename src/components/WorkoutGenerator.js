import React, { useState } from 'react';
import axios from 'axios';

const WorkoutGenerator = () => {
    const [muscleGroups, setMuscleGroups] = useState([]);
    const [hasGymAccess, setHasGymAccess] = useState(false);
    const [workout, setWorkout] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [workoutLength, setWorkoutLength] = useState(60);

    const handleMuscleGroupChange = (event) => {
        const { value } = event.target;
        setMuscleGroups((prevMuscleGroups) =>
            prevMuscleGroups.includes(value)
                ? prevMuscleGroups.filter((group) => group !== value)
                : [...prevMuscleGroups, value]
        );
    };

    const handleHasGymAccessChange = (event) => {
        const { checked } = event.target;
        setHasGymAccess(checked);
    };

    const handleGenerateWorkout = async () => {
        setIsLoading(true);
        setErrorMessage('');
        const gpt3Endpoint = 'https://api.openai.com/v1/engines/text-davinci-003/completions';
        const prompt = `Generate a ${workoutLength}-minute workout plan in an easily readable format with every exercise in one line for ${muscleGroups.join(', ')} muscles ${hasGymAccess ? 'with gym access' : 'without gym access'
    }.`;    
        const data = {
            prompt,
            max_tokens: 512,
            temperature: 0.5,
            n: 1,
        };
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer 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`,
        };

        try {
            const response = await axios.post(gpt3Endpoint, data, { headers });
const workoutPlan = response.data.choices[0].text;
const formattedWorkoutPlan = workoutPlan.replace(/([0-20]+\.\s)/g, "\n$1"); // add line breaks before each numbered exercise
setWorkout(formattedWorkoutPlan);
console.log('response:', formattedWorkoutPlan);
        } catch (error) {
            console.error(error);
            console.log(error);
            setErrorMessage('Error generating workout plan. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        
        <div className="max-w-2xl mx-auto p-6" style={{ height: "110vh", overflowY: "scroll" }}>
            <h2 className="text-2xl font-bold mb-6">Workout Generator</h2>
            <form className="mb-6">
                <label className="block mb-2">
                    Select muscle groups:
                    <div className="mt-2">
                        <label className="inline-block mr-4 py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold rounded">
                            <input type="checkbox" value="Chest" onChange={handleMuscleGroupChange} className="mr-2" />
                            Chest
                        </label>

                        <label className="inline-block mr-4 py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold rounded">
                            <input type="checkbox" value="Back" onChange={handleMuscleGroupChange} className="mr-2" />
                            Back
                        </label>
                        <label className="inline-block mr-4 py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold rounded">
                            <input type="checkbox" value="Legs" onChange={handleMuscleGroupChange} className="mr-2" />
                            Legs
                        </label>
                        <label className="inline-block mr-4 py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold rounded">
                            <input type="checkbox" value="Arms" onChange={handleMuscleGroupChange} className="mr-2" />
                            Arms
                        </label>
                        <label className="inline-block mr-4 py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold rounded">
                            <input type="checkbox" value="Shoulders" onChange={handleMuscleGroupChange} className="mr-2" />
                            Shoulders
                        </label>
                        <label className="inline-block mr-4 py-2 mt-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold rounded">
                            <input type="checkbox" value="Abs" onChange={handleMuscleGroupChange} className="mr-2" />
                            Abs
                        </label>
                    </div>
                </label>

                <div className="flex justify-center">
                    <label className="block mb-2">
                        <span className="text-gray-700">Do you have access to a gym?</span>
                        <div className="mt-2">
                            <div className="text-center">
                                <label className="inline-block mr-4">
                                    <input type="radio" name="gymAccess" value="yes" checked={hasGymAccess} onChange={handleHasGymAccessChange} className="mr-2" />
                                    <span className="text-gray-700">Yes</span>
                                </label>
                                <label className="inline-block">
                                    <input type="radio" name="gymAccess" value="no" checked={!hasGymAccess} onChange={handleHasGymAccessChange} className="mr-2" />
                                    <span className="text-gray-700">No</span>
                                </label>
                            </div>

                        </div>
                    </label>
                </div>
                <label className="block mb-2">
  <span className="text-gray-700">How long do you want your workout to be (in minutes)?</span>
  <input
    type="number"
    value={workoutLength}
    onChange={(event) => setWorkoutLength(event.target.value)}
    className="py-2 px-4 border border-gray-400 rounded w-full mt-2"
  />
</label>

                <p><p>
                </p></p>
                <div className="flex justify-center">
                    <button
                        type="button"
                        onClick={handleGenerateWorkout}
                        className="py-2 px-4 bg-teal-600 hover:bg-teal-800 text-white font-bold rounded"
                    >
                        Generate Workout
                    </button>
                </div>
            </form>
            <div className="border border-gray-400 rounded p-4 bg-teal-600 text-white">
                <div className="text-center">
                    <h3 className="font-bold text-2xl mb-2"><p></p>Workout Plan<p></p></h3>
                </div>
                <p className="text-lg">{workout}</p>
            </div>

        </div>
    );
};

export default WorkoutGenerator;
