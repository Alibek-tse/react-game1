import React, { useState } from "react";
import { Transition } from "react-spring/renderprops";
import Grid from "./Grid";
import Swal from "sweetalert2";

export default function Section() {
  const [btnStart, setBtnStart] = useState(false);
  const [section, setSection] = useState(Array(9).fill(null));
  const [res, setRes] = useState(Array(9).fill(null));
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
    let counter = 0;
    for (let i = 0; i < 8; i++) {
      let line = winnerLine[i];
      if (section[i] !== null) {
        counter++
      }
      console.log(counter)
      if (
        res[line[0]] === val &&
        res[line[1]] === val &&
        res[line[2]] === val
      ) {
        Swal.fire(val + " WIN");
        setTimeout(() => {
          setSection(Array(9).fill(null));
          setCount(0);
          setRes(Array(9).fill(null));
        }, 2000);
      } if (counter === 8) {
        Swal.fire('Ничья');
        setTimeout(() => {
          setSection(Array(9).fill(null));
          setCount(0);
          setRes(Array(9).fill(null));
        }, 2000);
      }
    }
  };
  const xPoint = <p className="xpoint">X</p>;
  const oPoint = <p className="opoint">O</p>;

  const changeHandler = (event) => {
    let data = event.target.getAttribute("data");
    if (section[data] === null) {
      section[data] = count % 2 === 0 ? xPoint : oPoint;
      res[data] =
        count % 2 === 0 ? xPoint.props.children : oPoint.props.children;

      setCount((prev) => prev + 1);
      setSection((prev) => [...section]);
      setRes((prev) => [...res]);
    }
    isWinner(count % 2 === 0 ? xPoint.props.children : oPoint.props.children);
  };

  return (
    <div>
      <button className="btn-grad" onClick={() => setBtnStart(!btnStart)}>
        {!btnStart ? "Начать Игру" : "Закончить Игру"}
      </button>
      <Transition
        items={btnStart}
        enter={{ opacity: 1, transform: "translateY(0rem)" }}
        leave={{ opacity: 0, transform: "translateY(-5rem)" }}
        from={{ opacity: 0, transform: "translateY(-5rem)" }}
        config={{ duration: 1000 }}
      >
        {(item) =>
          item &&
          ((props) => (
            <div className="tic-tac-toe" style={props}>
              <Grid section={section} changeHandler={changeHandler}></Grid>
            </div>
          ))
        }
      </Transition>
    </div>
  );
}
