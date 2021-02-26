import React from "react";

export default function Grid(props) {
  return props.section.map((item, index) => {
    return (
      <div
        className="grid"
        key={index}
        data={`${index}`}
        onClick={(event) => props.changeHandler(event)}
      >
        {props.section[index]}
      </div>
    );
  });
}
