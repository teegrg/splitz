// import React, { useEffect, useState } from "react";

// const VisitorCounter = () => {
//   const [totalVisits, setTotalVisits] = useState(0);

//   useEffect(() => {
//     // Check if the visitor has already visited
//     const hasVisited = localStorage.getItem("hasVisited");

//     if (!hasVisited) {
//       // If it's a new visit, increment the total visits
//       setTotalVisits((prevTotal) => prevTotal + 1);

//       // Set a flag in localStorage to mark this visitor as visited
//       localStorage.setItem("hasVisited", "true");
//     }
//   }, []); // Empty dependency array to run the effect only on mount

//   return (
//     <div className="counter">
//       {totalVisits}
//     </div>
//   );
// };

// export default VisitorCounter;
