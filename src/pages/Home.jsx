import React, { useState, useEffect } from 'react';
import Members from "../components/Members";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const texts = ["नमस्ते", "Hello", "Ola", " བཀྲ་ཤིས་བདེ་ལེགས"]; // Declare texts before useEffect

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length); // Use modulo to cycle through the words
    }, 2000);

    return () => clearTimeout(timeout);
  }, [currentIndex, texts.length]); // Update dependency array

  return (
    <div className="home">
      <Members />
      <div className="transform-container">
        <div className="transform-wrapper">
          <div className="transform-word">
            {texts[currentIndex]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
