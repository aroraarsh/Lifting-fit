import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';

const Motivating = () => {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [user, loadingUser] = useAuthState(auth);
  const navigate = useNavigate();
  const [suffix, setSuffix] = useState(Math.floor(Math.random() * 1000)); // generate a random number between 0 and 1000

  const gpt3Endpoint = 'https://api.openai.com/v1/engines/text-davinci-003/completions';
  const prompt = `Generate a different inspiring quote everytime to help someone push through a tough workout at the gym ${suffix}`;
  const data = {
    prompt,
    max_tokens: 100,
    temperature: 0.5,
    n: 1,
  };
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
  };
  
  const fetchQuote = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(gpt3Endpoint, data, { headers });
      setQuote(response.data.choices[0].text);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
    setSuffix(Math.floor(Math.random() * 1000)); // generate a new random number for the next quote
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="max-w-2xl mx-auto my-8 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-teal-600">Motivation</h2>
      <div className="flex justify-between">
        <div className="text-black">{isLoading ? 'Loading...' : quote}</div>
        <button
          className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded"
          onClick={fetchQuote}
          disabled={isLoading}
        >
          Generate Quote
        </button>
      </div>
    </div>
  );
};

export default Motivating;
