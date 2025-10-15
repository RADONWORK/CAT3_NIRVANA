import React, { useState } from "react";
import "./Hero.css";
import Events from "./Events";
import Navbar from "./Navbar";

function Hero() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // You can uncomment and use this if needed later
  // const events = [
  //   { name: "Rock Night", desc: "Feel the rhythm and energy as bands battle it out under the stars." },
  //   { name: "Mono-Act", desc: "One stage. One performer. Infinite emotions." },
  //   { name: "Dance Off", desc: "Groove, spin, and own the floor in the ultimate dance showdown." },
  //   { name: "Open Mic", desc: "Sing, rhyme, or tell your story – the spotlight is yours." },
  //   { name: "Art Corner", desc: "Express creativity through brushes, pixels, or pure imagination." },
  //   { name: "Tech Quiz", desc: "Put your tech knowledge to the test in fast-paced quiz rounds." },
  // ];

  return (
    <>
      <Navbar />
      <div className="hero-container">
        <h1 className="hero-title">Welcome to CAT3 Nirvana</h1>
        <p className="hero-subtitle">Experience the future of Parichay 2025</p>
        {/* Add any hero visuals or buttons here */}
      </div>
      <Events />
    </>
  );
}

export default Hero;
