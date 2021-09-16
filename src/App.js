import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return(
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar /><About /><Skills /><Projects /><Contact/><Footer/>
    </main>
  );
}