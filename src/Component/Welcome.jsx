import React from "react";

function Welcome() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8 md:p-12">

      {/* Decorative circles */}
      <div className="absolute -top-16 -right-16 w-40 h-40 bg-purple-500/30 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl"></div>

      <div className="relative z-10">

        {/* Icon */}
        <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg">
        
        </div>

        {/* Welcome Text */}
        <div className="text-center mt-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Welcome to React!
          </h2>

          <p className="text-gray-300 mt-4 max-w-2xl mx-auto leading-7">
            This is my first React application built using JSX and
            functional components. Tailwind CSS is used to create
            this modern and responsive design.
          </p>
        </div>

       
     
      </div>
    </div>
  );
}

export default Welcome;