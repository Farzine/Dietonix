import React from 'react';
import Navbar from '../Components/Navbar';
import HeroPic1 from '../Assets/HeroPic1.jpg';

const LandingPage = () => {
  return (
    <div>
      <Navbar />

      <section id="hero" className="relative w-full h-screen">
     
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${HeroPic1})`,
            filter: 'blur(8px)', 
          }}
        ></div>

        
        <div className="relative z-10 flex items-center justify-center h-full px-4 text-white">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold sm:text-6xl md:text-7xl text-white">
              Unlock Your Health with AI-Powered Diet Plans
            </h1>
            <p className="text-lg sm:text-xl text-white">
              Track your progress, get personalized meal plans, and achieve your fitness goals with ease. Start today!
            </p>
            <a
              href="#cta"
              className="inline-block px-8 py-3 bg-blue-600 text-lg font-semibold text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900">Key Features</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-500 p-6 rounded-full text-white">
                <i className="fas fa-chart-line text-4xl"></i>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Personalized Plans</h3>
              <p className="mt-4 text-gray-600">Get customized meal and workout plans based on your goals, preferences, and dietary needs.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-green-500 p-6 rounded-full text-white">
                <i className="fas fa-utensils text-4xl"></i>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Nutrition Tracking</h3>
              <p className="mt-4 text-gray-600">Track your calories, macronutrients, and overall nutrition to stay on top of your health.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-purple-500 p-6 rounded-full text-white">
                <i className="fas fa-heartbeat text-4xl"></i>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Progress Tracking</h3>
              <p className="mt-4 text-gray-600">Monitor your progress with real-time data and insights to keep you motivated.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">What Our Users Say</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-lg text-gray-700">"I love how easy it is to stick to my diet now. The personalized meal plans make it effortless to stay healthy!"</p>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Abid Hasan Rifat</h3>
              <p className="text-gray-500">Fitness Enthusiast</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-lg text-gray-700">"Tracking my progress has never been more motivating. I can see the improvements each week!"</p>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Al Feza Farzine</h3>
              <p className="text-gray-500">Health Coach</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-lg text-gray-700">"The AI-powered suggestions have made my diet planning much more efficient and enjoyable!"</p>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Emran Ahmed Emon</h3>
              <p className="text-gray-500">Dietitian</p>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold sm:text-5xl">Ready to Transform Your Health?</h2>
          <p className="mt-4 text-lg sm:text-xl">Start your journey today and let AI help you achieve your fitness and diet goals.</p>
          <a
            href="#get-started"
            className="mt-6 inline-block px-8 py-3 bg-white text-lg font-semibold text-blue-600 rounded-lg shadow-md hover:bg-gray-200 focus:outline-none"
          >
            Get Started Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
