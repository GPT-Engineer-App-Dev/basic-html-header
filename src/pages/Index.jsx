import React from "react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="bg-blue-600 text-white w-full py-6">
        <h1 className="text-4xl font-bold text-center">Welcome to My Website</h1>
        <p className="text-xl text-center mt-2">Your one-stop solution for all things web</p>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <p className="text-gray-700 text-lg">This is the main content of the page.</p>
      </main>
    </div>
  );
};

export default Index;