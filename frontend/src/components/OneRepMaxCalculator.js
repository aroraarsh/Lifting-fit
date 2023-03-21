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
    <div className="flex items-center justify-center h-screen max-w-2xl mx-auto p-4 " style={{ height: "120vh", overflowY: "scroll" }}>
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
    <div className="bg-teal-400 bg-opacity-25 border border-teal-400 rounded-md p-8">
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
      <h1 className="text-4xl font-bold mb-8 text-teal-600">One Rep Max Calculator</h1>
      <form>
        <label>
          Weight Lifted (in pounds):
          <input
            className="border border-gray-400 rounded-md py-2 px-4 w-64 mb-4"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
        <br />
        <label>
          Number of Reps:
          <input
            className="border border-gray-400 rounded-md py-2 px-4 w-64 mb-4"
            type="number"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
          />
        </label>
        <br />
        <button
          className="bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors duration-300"
          type="button"
          onClick={calculateOneRepMax}
        >
          Calculate One Rep Max
        </button>
      </form>
      {oneRepMax > 0 && (
        <div className="mt-8">
          <p className="text-xl font-bold mb-2">
            Your estimated one rep max is {oneRepMax} pounds.
          </p>
        </div>
      )}
    </div>
  </div>
  
  );
}

export default OneRepMaxCalculator;
