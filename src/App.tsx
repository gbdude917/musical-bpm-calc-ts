import React, { Fragment, useState } from "react";
import Header from "./Components/Header/Header";
import Bpm from "./Components/MusicalBpm/Bpm";
import SavedBpmList from "./Components/MusicalBpm/SavedBpmList";

// Interface
interface DataValues {
  id: number;
  value: number;
}

// let DATA = [
//   {
//     id: 4,
//     value: 213,
//   },
// ];

let DATA: DataValues[];
if (localStorage.getItem("bpmList") !== null) {
  DATA = JSON.parse(localStorage.getItem("bpmList") || "");
} else {
  localStorage.setItem("bpmList", JSON.stringify([]));
}

function App() {
  const [list, setList] = useState(DATA);

  // console.log(JSON.parse(localStorage.getItem("bpmList")));
  return (
    <Fragment>
      <Header />
      <main>
        <Bpm setList={setList} list={list} />
        <SavedBpmList setList={setList} list={list} />
      </main>
    </Fragment>
  );
}

export default App;
