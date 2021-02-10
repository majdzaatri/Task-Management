import "../../App.css";
import React, { useState, useEffect } from "react";
import moment from "moment";
import buildCalendar from "./build";
import dayStyles, {gotEvent} from "./styles";
import CalendarHeader from "./header"
import axios from 'axios'

export default function Calendar() {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);


  const [arr, setTasksData] = useState([])

const getTasks = () => {
axios.get('/get_task_detail')
.then((response) => {
  setTasksData(response.data)
}).catch(() => {
  alert('Error retrieving data!!!');
});
}

useEffect(() =>{
  getTasks();
}, [])

  


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
