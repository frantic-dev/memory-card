import { useState } from "react";
import "./App.css";
import Images from "./Components/Images";
import Scoreboard from "./Components/Scoreboard";

function App() {
  const [score, setScore] = useState(0)
  const [chosenImages, setchosenImages] = useState([])
  function chooseImage(e) {
    setchosenImages(images => [...images, e.target])
    setScore(score => score + 1)
    console.log(chosenImages)
  }
  return (
    <div>
      <h1>The memory game</h1>
      <Scoreboard score={score} />
      <Images onClick={chooseImage} />
    </div>
  );
}
export default App;

