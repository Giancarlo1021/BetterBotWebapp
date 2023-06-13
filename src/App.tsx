// /* App.tsx */

// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./components/HomePage";
// import MarquisSetup from "./components/Factions/Marquis/MarquisSetup";
// import MarquisTurn from "./components/Factions/Marquis/MarquisTurn";

// const App: React.FC = () => {
//   const [items, setItems] = useState<string[]>([]);
//   const [difficulty, setDifficulty] = useState("");
//   const [traits, setTraits] = useState<string[]>([]);

//   const handleAddItem = (item: string) => {
//     setItems((prevItems) => [...prevItems, item]);
//   };

//   const handleDifficultyChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setDifficulty(event.target.value);
//   };

//   const handleTraitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { value, checked } = event.target;
//     if (checked) {
//       setTraits((prevTraits) => [...prevTraits, value]);
//     } else {
//       setTraits((prevTraits) => prevTraits.filter((trait) => trait !== value));
//     }
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage handleAddItem={handleAddItem} />} />
//         <Route
//           path="/item/1"
//           element={
//             <MarquisSetup
//               items={items}
//               handleAddItem={function (item: string): void {
//                 throw new Error("Function not implemented.");
//               }}
//               handleDifficultyChange={function (
//                 event: React.ChangeEvent<HTMLInputElement>
//               ): void {
//                 throw new Error("Function not implemented.");
//               }}
//             />
//           }
//         />
//         <Route
//           path="/item/1a"
//           element={
//             <MarquisTurn
//               items={items}
//               handleAddItem={handleAddItem}
//               traits={traits}
//               difficulty={difficulty}
//               pageChildren={undefined}
//             />
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import MarquisSetup from "./components/Factions/Marquis/MarquisSetup";
import MarquisTurn from "./components/Factions/Marquis/MarquisTurn";

const App: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);
  const [difficulty, setDifficulty] = useState<string>(""); // Declare a new state for difficulty

  const handleAddItem = (item: string) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  // Define the handler function for difficulty level changes
  const handleDifficultyChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDifficulty(event.target.value);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage handleAddItem={handleAddItem} />} />
        <Route
          path="/item/1"
          element={
            <MarquisSetup
              items={items}
              handleAddItem={handleAddItem}
              handleDifficultyChange={handleDifficultyChange}
            />
          }
        />
        <Route
          path="/item/1a"
          element={
            <MarquisTurn
              items={items}
              handleAddItem={handleAddItem}
              pageChildren={undefined}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
