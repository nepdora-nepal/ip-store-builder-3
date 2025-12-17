import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900 via-transparent to-indigo-900 opacity-20"></div>
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-600/30 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/30 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="flex items-center justify-center gap-2 mb-6 text-xl text-indigo-300 font-medium">
          <Sparkles className="w-6 h-6 text-indigo-400" />
          Unleash the power of AI
        </p>
        <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-indigo-400 to-purple-500">
          Connect Deeper with AI-Powered CRM
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Lovable.ai helps you understand your customers like never before,
          fostering loyalty and driving growth through intelligent interactions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="group relative flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center gap-2">
              Learn More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
          <button className="group flex items-center gap-2 px-8 py-3 rounded-full border-2 border-indigo-500 text-indigo-300 font-bold text-lg hover:bg-indigo-500/20 hover:border-indigo-400 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
