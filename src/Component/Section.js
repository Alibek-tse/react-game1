import React, {useState} from "react";
import { Spring } from "react-spring/renderprops";
import Grid from "./Grid"



export default function Section() {
  const [section, setSection] = useState(Array(9).fill(null));
  const [count, setCount] = useState(0);

  const winnerLine = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const isWinner = (val) => {
    // console.log(val)

    for (let i = 0; i < 8; i++) {
      let line = winnerLine[i];
      if (
        section[line[0]] === val &&
        section[line[1]] === val &&
        section[line[2]] === val
      ) {
        alert(val + "win");
      }
    }
  };
  const xPoint = <p>X</p>;
  const oPoint = <p>O</p>;

  const changeHandler = (event) => {
    console.log(event,'123')

    let data = event.target.getAttribute("data");

    if (section[data] === null) {
      section[data] =
        count % 2 === 0 ? xPoint.props.children : oPoint.props.children;
      setCount((prev) => prev + 1);
      setSection((prev) => [...section]);
    }
    isWinner(count % 2 === 0 ? xPoint.props.children : oPoint.props.children);
  };
  return (
    <Spring
    from={{ opacity: 0, transform: "translate(-4rem)" }}
    to={{ opacity: 1, transform: "translate(-4rem)" }}
    config={{ duration: 4000 }}
  >
    {(props) => <div className="tic-tac-toe" style={props}>
      <Grid section={section} changeHandler={changeHandler}></Grid>
    </div>}
  </Spring>
    
  );
}
