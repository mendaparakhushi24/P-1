import React from "react";
import Welcome from "./Component/Welcome";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 flex items-center justify-center p-6">

      <div className="w-full max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-8">
         

          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3">
            React Development
          </h1>

          <p className="text-gray-400 mt-3">
            JSX • Functional Components • Tailwind CSS
          </p>
        </div>

        {/* Welcome Component */}
        <Welcome />

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          Created with React & Tailwind CSS
        </div>

      </div>

    </div>
  );
}

export default App;