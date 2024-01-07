import React, { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [uniqueVisitors, setUniqueVisitors] = useState(0);

  useEffect(() => {
    // Retrieve the stored unique visitors count from localStorage
    const storedCount = localStorage.getItem("uniqueVisitors");

    if (storedCount) {
      setUniqueVisitors(parseInt(storedCount, 10));
    } else {
      // If no count is found, initialize with 0
      setUniqueVisitors(0);
    }

    // Check if the current visitor has visited before by checking a flag in localStorage
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      // If it's a new visitor, increment the unique visitors count
      setUniqueVisitors((prevCount) => prevCount + 1);

      // Set a flag in localStorage to mark this visitor as visited
      localStorage.setItem("hasVisited", "true");

      // Update the stored unique visitors count in localStorage
      localStorage.setItem("uniqueVisitors", (uniqueVisitors + 1).toString());
    }
  }, [uniqueVisitors]); // Include uniqueVisitors in the dependency array

  return (
    <div className="counter">
        {uniqueVisitors}
    </div>
  );
};

export default VisitorCounter;

