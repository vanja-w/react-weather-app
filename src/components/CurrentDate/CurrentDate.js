import React from "react";
import "./CurrentDate.css";

export default function CurrentDate(props) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];

  let dayOfMonth = props.date.getDate();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let month = months[props.date.getMonth()];

  return (
    <div className="CurrentDate">
      <div className="date text-center mb-2">
        {day}, {dayOfMonth} {month}
      </div>
    </div>
  );
}
