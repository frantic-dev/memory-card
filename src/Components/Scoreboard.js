export default function Scoreboard(props) {
  return (
    <div className="scoreboard">
      <div className="score">score: {props.score} </div>
      <div className="best-score">best score: {props.scores[0]} </div>
    </div>
  );
}
