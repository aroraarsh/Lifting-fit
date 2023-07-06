import { useState } from 'react';
import axios from 'axios';

const RecipeGenerator = () => {
    const [goal, setGoal] = useState('');
    const [allergies, setAllergies] = useState('');
    const [isVegetarian, setIsVegetarian] = useState(false);
    const [recipe, setRecipe] = useState(null);
  
    const generateRecipe = async () => {
        setRecipe(null);
        const gpt3Endpoint = 'https://api.openai.com/v1/engines/text-davinci-003/completions';
      const prompt = `Generate a recipe without instructions but with name of the dish in an easily readable format for a ${goal} meal that is ${isVegetarian ? 'vegetarian' : 'non-vegetarian'} and does not contain ${allergies}, and give the total amount of calories`;
      const data = {
        prompt,
        max_tokens: 500,
        temperature: 0.7,
        n: 1,
        stop: '.',
      };
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
      };
  
    try {
        const response = await axios.post(gpt3Endpoint, data, { headers });
        const { data: { choices } } = response;
        const recipeText = choices[0].text;
    
        // Split recipe by newline
        const recipeLines = recipeText.split('\n');
    
        // Extract calories from recipe
        const regex = /Calories: ([\d,]+)/g;
        const match = regex.exec(recipeText);
        const calories = match && match[1];
    
        setRecipe({
          lines: recipeLines,
          calories,
        });
      } catch (error) {
        console.error(error);
      }
    };
  

    return (
        <div className="flex items-center justify-center h-screen bg-teal-600">
          <div className="bg-white rounded-lg shadow-md p-6 space-y-6 w-full max-w-md overflow-y-auto" style={{ maxHeight: "80vh" }}>
            <h2 className="text-xl font-bold text-teal-600">Recipe Generator</h2>
            <div className="space-y-2">
              <label className="block font-semibold text-teal-600">
                Goal:
                <select
                  className="block w-full rounded border-gray-400 py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                >
                  <option value="">-- Select Goal --</option>
                  <option value="bulking up">Bulk Up</option>
                  <option value="losing weight">Lose Weight</option>
                </select>
              </label>
              <label className="block font-semibold text-teal-600">
                Allergies:
                <input
                  type="text"
                  className="block w-full rounded border-gray-400 py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  value={allergies}
                  onChange={(e) => setAllergies(e.target.value)}
                />
              </label>
              <label className="block font-semibold text-teal-600">
                Vegetarian:
                <input
                  type="checkbox"
                  className="rounded border-gray-400 py-2 px-3 mt-1 ml-2 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  checked={isVegetarian}
                  onChange={(e) => setIsVegetarian(e.target.checked)}
                />
              </label>
            </div>
            <button
              className="block bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              onClick={generateRecipe}
            >
              Generate Recipe
            </button>
            {recipe && (
              <div>
                <h3 className="text-lg font-semibold text-teal-600">Recipe</h3>
                {recipe.lines.map((line, index) => (
                  <p key={index} className="my-2">{line}</p>
                ))}
                {/* <p className="font-semibold">Calories: {recipe.calories}</p> */}
              </div>
            )}
          </div>
        </div>
      ); 
};

export default RecipeGenerator
