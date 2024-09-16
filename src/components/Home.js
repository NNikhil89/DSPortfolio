import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="container mx-auto p-6 max-w-4xl text-sm md:text-base">
      {/* Introduction Section */}
      <section className="text-center py-12 rounded-xl shadow-lg mb-3">
        <h1 className="text-3xl md:text-4xl font-bold">Nikhil Nyamatabad</h1>
        <p className="mt-4">
          AI/ML Engineer & Data Scientist | 12+ Years of Experience | Expertise in Finance, Healthcare, Insurance & Retail
        </p>
        <p className="mt-2">
          MS in Artificial Intelligence, Yeshiva University (Expected 2025)
        </p>
        <div className="mt-6">
          <Link to="/projects" className="text-white font-semibold bg-cyan-700 hover:bg-cyan-800 px-4 py-2 rounded-lg">
            Explore My Work
          </Link>
          <Link to="/contact" className="ml-4 text-white font-semibold bg-cyan-700 hover:bg-cyan-800 px-4 py-2 rounded-lg">
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Career Highlights */}
      <div className="bg-gray-100 p-6 md:p-8 rounded-xl shadow-lg">
  <h2 className="text-xl md:text-2xl font-bold mb-4 border-b pb-2 border-gray-300">Career Highlights</h2>
  <ul className="space-y-3">
    <li className="flex items-start">
      <span className="text-cyan-600 mr-2 mt-1">•</span>
      <p>Increased pricing accuracy by 30% and reduced pricing time by 40%, leading to a 15% sales boost for custom-made hearing aids.</p>
    </li>
    <li className="flex items-start">
      <span className="text-cyan-500 mr-2 mt-1">•</span>
      <p>Boosted customer retention rates by 20% with a churn prediction model achieving 85% accuracy.</p>
    </li>
    <li className="flex items-start">
      <span className="text-cyan-600 mr-2 mt-1">•</span>
      <p>Reduced defective product return rates by 25% with computer vision models, saving 200+ labor hours per month.</p>
    </li>
    <li className="flex items-start">
      <span className="text-cyan-600 mr-2 mt-1">•</span>
      <p>Enhanced business operations with AI-driven Insurance and Payment solutions, leading to a threefold profit increase.</p>
    </li>
  </ul>
</div>


      {/* Research Projects */}
      <div className="bg-gray-100 mt-4 p-6 md:p-10 rounded-lg shadow-lg">
  {/* Research Projects */}
  <h2 className="text-xl md:text-2xl font-bold mb-4 border-b pb-2 border-gray-300">Research Projects</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <h3 className="text-lg md:text-xl font-semibold mb-2">Bird Sound Denoising</h3>
      <p>
        Developed a deep learning model for denoising bird sounds using image segmentation techniques in PyTorch.
      </p>
    </div>
    <div>
      <h3 className="text-lg md:text-xl font-semibold mb-2">Dog Heart VHS Score Prediction</h3>
      <p>
        Created an object detection model using EfficientNet for cardiomegaly detection in dogs.
      </p>
    </div>
  </div>
</div>

<div className="bg-gray-100 p-6 mt-4 md:p-5 rounded-lg shadow-lg">
  {/* Technical Skills */}
  <h2 className="text-xl md:text-2xl font-bold border-b pb-2 border-gray-300 mt-3 mb-3">Technical Skills</h2>
  <div className="grid grid-cols-1 gap-8">
    <div>        
        <ul className='space-y-2'>
            <li className="flex items-start">
                <span className="text-cyan-600 mr-2 mt-1">•</span>
                <p>Generative AI, Computer Vision, NLP, Deep Learning</p>
            </li>
            <li className="flex items-start">
                <span className="text-cyan-600 mr-2 mt-1">•</span>
                <p>Python, PyTorch, Tensorflow, MLOps</p>
            </li>  
            <li className="flex items-start">
                <span className="text-cyan-600 mr-2 mt-1">•</span>
                <p>React, Next,js, JavaScript, Node.js</p>
            </li>                       
        </ul>
    </div>
  </div>
</div>
</div>
    
  );
}

export default HomePage;
