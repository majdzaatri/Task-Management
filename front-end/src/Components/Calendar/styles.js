import moment from "moment"

function isSelected(day, value) {
  return value.isSame(day, "day");
}

export function beforeFirstDay(day,value) {
  const startDay = value.clone().startOf("month");
  const endDay = value.clone().endOf("month");
  return day.isBefore(startDay , "day") || day.isAfter(endDay, "day");
}

function isToday(day) {
  return day.isSame(new Date(), "day");
}


export function gotEvent(day, arr) {
    for(var i=0; i<arr.length; i++){
        if (day.isSame(moment(arr[i].date))){
            return "event-indicator"
        }
      }
    return ""
}

export default function dayStyles(day, value) {
  if (beforeFirstDay(day, value)) return "before";
  if (isSelected(day, value)) return "selected";
  if (isToday(day)) return "today";
  return "";
}
