import BpmItem from "./BpmItem";
import Card from "../UI/Card";
import classes from "./SavedBpmList.module.css";
import React from "react";

// Interface
interface BpmList {
  id: number;
  value: number;
}

interface PropsValue {
  setList: Function;
  list: BpmList[];
}

function SavedBpmList(props: PropsValue) {
  // Delete BPM from list
  const deleteBpmHandler = (id: string) => {
    // Remove from localStorage
    let updatedList = props.list.filter((item) => item.id !== +id);
    console.log(updatedList);
    props.setList(updatedList);
    localStorage.setItem("bpmList", JSON.stringify(updatedList));
  };

  let bpmList;
  if (props.list !== null && props.list !== undefined) {
    bpmList = props.list.map((bpmElem) => (
      <BpmItem
        key={bpmElem.id}
        id={bpmElem.id.toString()}
        value={bpmElem.value.toString()}
        delete={deleteBpmHandler}
      />
    ));
  }

  return (
    <section className={classes.bpmList}>
      <h2>Saved BPMs</h2>
      <Card>
        <ul>{bpmList}</ul>
      </Card>
    </section>
  );
}

export default SavedBpmList;
