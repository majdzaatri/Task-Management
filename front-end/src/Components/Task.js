import React from "react";
var dateFormat = require("dateformat");


export default function Task({
  selected,
  id,
  changeColor,
  title,
  name,
  taskPriority,
  category,
  date,
  status,
  categoryDetails
}) {
  let stars = [];

  for (let i = 0; i < taskPriority; i++)
    stars.push(
      <i className="fa fa-star" aria-hidden="true" key={i}>
        *
      </i>
    );

  return (
    <div style={{backgroundColor: category ,borderRadius: 10}}>
      <div className="block" onClick={() => {
        changeColor(id,title,name,taskPriority,category,date,status,categoryDetails);
      }}>
        <div
          className={`task ${
            selected === id ? "selectedTask" : "unselectedTask"
          }`}
          id={id}
          style={{ color: selected === id ? "" : "" }}
        >
          <h1>{title}</h1>
          {/* <h3>{name}</h3> */}
          <div>{stars}<br></br> {dateFormat(new Date(date), "dd/mm/yyyy")}</div>
        </div>
      </div>
    </div>
  );
}
