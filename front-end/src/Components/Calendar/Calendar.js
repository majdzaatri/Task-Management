import "../../App.css";
import React, { useState, useEffect } from "react";
import moment from "moment";
import buildCalendar from "./build";
import dayStyles, {gotEvent} from "./styles";
import CalendarHeader from "./header"

export default function Calendar() {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);


  
const arr = [
    {
    id: 1,
    name: "Do laundry",
    title: "Task 1",
    priority: 5,
    category: "red",
    date: "Jan 06 2021"
    },
    {
    id: 2,
    name: "Buy milk",
    title: "Task 2",
    priority: 2,
    category: "red",
    date: "Jan 10 2021"
    },
    { id: 3, name: "task", title: "Task 3", priority: 4, category: "blue", date: "Jan 15 2021" },
    { id: 4, name: "Test", title: "Test", priority: 1, category: "green", date: "Jan 17 2021" }
]


  return (
    <div className="calendar">
     <CalendarHeader value={value} setValue={setValue} />
      <div className="body">
        <div className="day-names">
          {
            ["s", "m", "t", "w", "t", "f", "s"].map((d, index) => <div key={index} className="week">{d}</div>)
          }
        </div>
        {calendar.map((week, index) => (
          <div key={index}>
            {week.map((day) => (
              <div key={day} className="day" onClick={() => setValue(day)}>
              {gotEvent(day,arr)?
                <div className={gotEvent(day, arr)}></div>:null
              }        
                <div className={dayStyles(day, value)}>
                  {day.format("D").toString()}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
