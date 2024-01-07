import React, { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [uniqueVisitors, setUniqueVisitors] = useState(0);

  useEffect(() => {
    // Retrieve the stored unique visitors count from localStorage
    const storedCount = localStorage.getItem("uniqueVisitors");

    if (storedCount) {
      // If a count is found, parse and set it as the initial value
      setUniqueVisitors(parseInt(storedCount, 10));
    } else {
      // If no count is found, initialize with 0
      setUniqueVisitors(0);
    }

    // Check if the current visitor has visited before by checking a flag in localStorage
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      // If it's a new visitor, increment the unique visitors count
      setUniqueVisitors((prevCount) => {
        // Use the callback version to access the previous state
        const newCount = prevCount + 1;

        // Set a flag in localStorage to mark this visitor as visited
        localStorage.setItem("hasVisited", "true");

        // Update the stored unique visitors count in localStorage
        localStorage.setItem("uniqueVisitors", newCount.toString());

        // Return the new count to update the state
        return newCount;
      });
    }
  }, []); // Empty dependency array to run the effect only on mount

  return (
    <div className="counter">
      {uniqueVisitors}
    </div>
  );
};

export default VisitorCounter;
