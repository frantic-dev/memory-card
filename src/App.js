import { useState } from "react";
import "./App.css";
import Images from "./Components/Images";
import Scoreboard from "./Components/Scoreboard";

function App() {
  const [score, setScore] = useState(0);
  const [chosenImages, setChosenImages] = useState([]);
  const [scores, setScores] = useState([0]);
  function restartGame() {
    setScores((scores) => [...scores, score].sort((a, b) => b - a));
    setScore(0);
    setChosenImages([]);
  }
  function chooseImage(e) {
    if (chosenImages.some((image) => image === e.target.src)) {
      restartGame();
    } else {
      setChosenImages((images) => [...images, e.target.src]);
      setScore((score) => score + 1);
    }
  }
  return (
    <div>
      <h1>The memory game</h1>
      <Scoreboard score={score} scores={scores} />
      <Images onClick={chooseImage} />
    </div>
  );
}
export default App;

