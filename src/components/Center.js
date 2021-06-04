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
  const [count, setCount] = useState(0);
  //console.log("start:", start);
  //console.log("end:", end);
  /////get date month and year from calendar//////
  let rangeStart = String(start).split(" ");
  let rangeEnd = String(end).split(" ");
  let yearStart = Number(rangeStart[3]);
  let yearEnd = Number(rangeEnd[3]);
  let dateStart = Number(rangeStart[2]);
  let dateEnd = Number(rangeEnd[2]);
  let monthStart = rangeStart[1];
  let monthEnd = rangeEnd[1];
  let labelRange = [];
  let differentMonth = [];
  let dateRange = Number(dateEnd) - Number(dateStart);

  // console.log("count", count);
  // console.log("startMonth", monthStart);
  // console.log("endMonth", monthEnd);

  if (count >= 2 && monthStart === monthEnd) {
    for (let i = dateStart; i <= dateEnd; i++) {
      labelRange.push(`${monthStart}${i}`);
    }
  }

  let monthCheck = monthStart !== monthEnd;
  if (count >= 2 && monthCheck) {
    for (let i = dateStart; i <= 30; i++) {
      differentMonth.push(`${monthStart}${i}`);
    }
    for (let i = 1; i <= dateEnd; i++) {
      differentMonth.push(`${monthEnd}${i}`);
    }
    labelRange = differentMonth;
  }
  //////popup calendar///////
  const handleVisibleChange = () => {
    setVisible((prev) => !prev);
  };
  // add date informations to graph///////
  const data = {
    labels: labelRange,
    datasets: [
      {
        label: "Type 1",
        data: [
          73, 63, 85, 81, 64, 65, 73, 75, 87, 90, 95, 80, 68, 45, 84, 90, 80,
          70, 80, 90, 70, 87, 53, 83, 85, 63, 78, 73, 90, 90,
        ],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Type 2",
        data: [
          63, 45, 85, 61, 74, 76, 67, 86, 96, 75, 85, 64, 58, 77, 54, 78, 65,
          89, 75, 54, 87, 58, 64, 90, 53, 90, 80, 75, 85, 80,
        ],
        fill: false,
        borderColor: "#742774",
      },
      {
        label: "Type 3",
        data: [
          53, 45, 75, 61, 74, 76, 87, 66, 86, 75, 95, 64, 68, 77, 74, 78, 65,
          89, 75, 64, 77, 88, 64, 70, 63, 70, 80, 85, 65, 70,
        ],
        fill: false,
        borderColor: "#FFA833",
      },
    ],
  };
  return (
    <div>
      <Accordian />
      <Tabs />

      <h2 className="analytic">Analytics</h2>
      <div className="headContainer">
        <div className="calendarContainer">
          <Popover
            content={
              <Calendar
                className="calendar"
                setStart={setStart}
                setEnd={setEnd}
                setCount={setCount}
                count={count}
              />
            }
            placement="bottom"
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
