import React, { useState } from "react";
import classes from "./Bpm.module.css";

// Interfaces
interface BpmList {
  id: number;
  value: number;
}

interface PropsValues {
  setList: Function;
  list: BpmList[];
}

let lastTapSeconds = 0;
let bpm = 0;
let total = 0;
let count = -1;

function Bpm(props: PropsValues) {
  const [curBpm, setCurBpm] = useState(0);

  // Calculate BPM
  const calculationHandler = (): void => {
    let tapSeconds = new Date().getTime();

    // Initialize first tap
    if (count === -1 && lastTapSeconds === 0) {
      count += 1;
      lastTapSeconds = tapSeconds;
    } else {
      count += 1;
      bpm = (1 / ((tapSeconds - lastTapSeconds) / 1000)) * 60;
      lastTapSeconds = tapSeconds;

      // Used to create average
      total = total + bpm;

      setCurBpm(Math.floor(total / count));
    }
  };

  // Reset Calculation to -
  const resetHandler = () => {
    lastTapSeconds = 0;
    bpm = 0;
    total = 0;
    count = -1;
    setCurBpm(0);
  };

  // Save list Bpm to list
  const saveHandler = () => {
    if (curBpm === 0) {
      return;
    } else {
      const newBpm = { id: props.list.length + 1, value: curBpm };
      props.setList((prevList: BpmList[]) => [...prevList, newBpm]);

      // Update local storage
      let existingList = JSON.parse(localStorage.getItem("bpmList") || "");
      existingList.push(newBpm);

      localStorage.setItem("bpmList", JSON.stringify(existingList));
    }
  };

  return (
    <section className={classes.calculator}>
      <h2>{curBpm === 0 ? "Start Clicking the Button!" : ""}</h2>

      {/* BPM calculation output */}
      <div className={classes.valueField}>{curBpm === 0 ? "-" : curBpm}</div>

      <div className={classes.buttons}>
        <button onClick={calculationHandler} className={classes.btn}>
          Click Me!
        </button>
        <div>
          <button onClick={saveHandler} className={classes.subBtn}>
            Save BPM
          </button>
          <button onClick={resetHandler} className={classes.subBtn}>
            Reset
          </button>
        </div>
      </div>
    </section>
  );
}

export default Bpm;
