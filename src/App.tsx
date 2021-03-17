import React from "react";
import logo from "./logo.svg";

function App() {
  return (
    <div className="bg-gray-800 text-gray-50 h-screen">
      <header className="text-center space-y-6">
        <img
          src={logo}
          className="mx-auto h-[100px] w-[100px] animate-spin"
          alt="logo"
        />
        <h1 className="text-4xl">Hello Vite + React + TailwindCSS!</h1>
        <p className="italic">
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p className="divide-x divide-gray-50">
          <a
            className="px-4 text-yellow-10 hover:underline"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <a
            className="px-4 text-yellow-10 hover:underline"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>

          <a
            className="px-4 text-yellow-10 hover:underline"
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            TailwindCSS Doc
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
