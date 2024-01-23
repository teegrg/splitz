import React, { useState, useEffect } from 'react';
import Members from "../components/Members";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 4); // Use modulo to cycle through the words
    }, 2000);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <div className="home">
      <Members />
      <div className="transform-container">
        {["Namaste", "Hello", "Ola", "こんにちは"].map((text, index) => (
          <div key={index} className={`transform-word ${index === currentIndex ? 'visible' : 'hidden'}`}>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
