import React, { useState } from "react";
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";
import "./Calendar.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const Calendar = ({ setStart, setEnd, setCount, count }) => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  return (
    <div>
      <DateRangePicker
        onChange={(item) =>
          setState(
            [item.selection],
            setStart(item.selection.startDate),
            setEnd(item.selection.endDate),
            setCount(count + 1)
          )
        }
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={state}
        direction="horizontal"
      />
    </div>
  );
};
export default Calendar;
