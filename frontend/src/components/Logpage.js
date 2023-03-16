import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useAuthState } from "react-firebase-hooks/auth";


const Logpage = () => {
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
    const [user, loading] = useAuthState(auth);

    const GoogleLogin = async () => {
        try {
            auth.setPersistence('local')
            auth.onAuthStateChanged(user => {
                if (user) {
                    user.getIdToken().then(idToken => {
                        localStorage.setItem('idToken', idToken)
                        localStorage.setItem('user', user)
                    })
                }
            })
            const result = await signInWithPopup(auth, googleProvider);
            console.log(result.user);
            navigate("/reviewList");
        } catch (error) {
            console.log(error);
        }
        navigate("/Homepage")

    };

    // function homelog() {
    //     navigate("/");
    // }

    // function workClick() {
    //     navigate('/workoutgenerator');
    // }

    // function caloriesClick() {
    //     navigate('/calories');
    // }


    return (
        <div className="bg-white" style={{ height: "100vh", overflowY: "scroll" }}>

            <div className="relative isolate px-6 pt-1 lg:px-8">
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
                <div className="mx-auto max-w-2xl pt-20 sm:py-48 lg:py-56">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-normal text-gray-900 sm:text-6xl">
                            Welcome to Lifting fit
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            "Get fit and stay motivated! Log in now to access personalized workout plans and track your progress towards a healthier you."                     </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            {/* <a
                                onClick={workClick}
                                className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Workout Generator
                            </a>
                            <a
                                onClick={caloriesClick}
                                className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Calories Estimator
                            </a> */}
                            <a
                                onClick={GoogleLogin}
                                className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Login
                            </a>
                        </div>

                    </div>
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
            </div>
        </div>
    )
}

export default Logpage