import React, { useState } from "react";
import "./Center.css";
import "antd/dist/antd.css";
import Accordian from "./UI/Accordian";
import Tabs from "./UI/Tab";
import Calendar from "./UI/Calendar";
import TodayIcon from "@material-ui/icons/Today";
import { Line } from "react-chartjs-2";
import { Popover } from "antd";

const Center = () => {
  const [visible, setVisible] = useState(false);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  console.log("start:", start);
  console.log("end:", end);
  //get date month and year from calendar
  let rangeStart = String(start).split(" ");
  let rangeEnd = String(end).split(" ");
  let yearStart = Number(rangeStart[3]);
  let yearEnd = Number(rangeEnd[3]);
  let dateStart = Number(rangeStart[2]);
  let dateEnd = Number(rangeEnd[2]);
  let monthStart = rangeStart[1];
  let monthEnd = rangeEnd[1];
  let labelRange = [];
  let dateRange = Number(dateEnd) - Number(dateStart);
  if (dateStart) {
    for (let i = dateStart; i <= dateEnd; i++) {
      labelRange.push(i);
    }
  }
  //popup calendar
  const handleVisibleChange = () => {
    setVisible((prev) => !prev);
  };
  // add date informations to graph
  const data = {
    labels: labelRange,
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Second dataset",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#742774",
      },
    ],
  };
  return (
    <div>
      <Accordian />
      <Tabs />
      <h1 style={{ float: "left", display: "inline-block" }}>Analytics</h1>
      <div className="headContainer">
        <div className="calendarContainer">
          <Popover
            content={
              <Calendar
                className="calendar"
                setStart={setStart}
                setEnd={setEnd}
              />
            }
            title="Calendar"
            trigger="click"
            visible={visible}
            onVisibleChange={handleVisibleChange}
          >
            <button>
              <div style={{ display: "flex" }}>
                <div>
                  <TodayIcon style={{ fontSize: "40px", color: "blue" }} />
                </div>
                <span>Calendar</span>
              </div>
            </button>
          </Popover>
        </div>
        <div className="headings">
          <span id="vl">
            Heading1 <br /> 25,400
          </span>
          <span id="vl">
            Heading2 <br /> 12,360
          </span>
          <span id="vl">
            Heading3 <br /> 8,657
          </span>
          <span>
            Heading4 <br /> 15,400
          </span>
        </div>
      </div>
      <div className="chartLine">
        <Line data={data} />
      </div>
    </div>
  );
};

export default Center;
