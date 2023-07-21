import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen" style={{ overflowY: 'hidden' }}>
    <div className="flex-grow relative px-6 py-10 sm:px-8">
       <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-90">
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
      <div className="container mx-auto p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold pt-10">About Me</h1>
        </div>
        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Left Column with Text */}
          <div className="w-full md:w-1/2 md:pr-8">
          <p className="text-lg mb-6 leading-relaxed">
              Hey there! I'm Arsh, a fitness enthusiast, computer science major, and part-time DJ on a mission to help people unlock their potential through the power of fitness. Balancing multiple passions in life isn't easy, but it's all about finding harmony and making every moment count.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              As a computer science major, I thrive on solving complex problems and constantly exploring the digital world. It's a field that challenges me and fuels my curiosity, pushing me to be creative and innovative.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              By night, I don the DJ hat, immersing myself in the world of music and creating unforgettable experiences for party-goers. Music is my outlet for self-expression, and the energy on the dance floor ignites my passion for connecting with others.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              Amidst these exciting pursuits, fitness remains my rock—a grounding force that keeps me centered and focused. I've learned to manage my time efficiently, making room for workouts and self-care, no matter how hectic life gets.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              Over the past 2.5 years, I've accomplished something I once thought impossible—I've gained 30 lbs of muscle. While juggling my various interests, I've come to appreciate the power of discipline and consistency, both in my fitness journey and in life as a whole.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              My primary goal with this website is to provide a platform and a haven for those who, like me, have busy lives but aspire to embrace fitness. I want to be your virtual fitness companion, guiding you through workouts, offering tips, and empowering you to create your own fitness journey.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              Whether you're a fellow student, a music lover, or simply someone looking to improve your well-being, I'm here to support you. Let's strike a balance, pursue our passions, and stay committed to a fit and fulfilling life.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              Let's embark on this fitness journey together—strong, motivated, and determined to rise above. Welcome to our fitness community!
            </p>
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
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
              className="w-2/3 h-auto rounded-lg shadow"
              src="/images/after.jpg"
              alt="Image 2"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
