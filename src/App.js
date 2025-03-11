import React from 'react';

export default function HomePage() {
  return (
      <div className="min-h-screen bg-gradient-to-br from-teal-500 to-teal-900 text-white flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold mb-4">Callen Egan</h1>
        <p className="text-xl max-w-xl text-center mb-6">
          I'm a passionate iOS Software Engineer specializing in building performant, scalable, and beautiful mobile applications.
        </p>
        <div className="flex space-x-4">
          <a
              href="#projects"
              className="bg-white text-teal-700 px-6 py-2 rounded-lg shadow-lg font-semibold hover:bg-teal-100 transition"
          >
            View Projects
          </a>
          <a
              href="#contact"
              className="border-2 border-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-teal-700 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
  );
}
