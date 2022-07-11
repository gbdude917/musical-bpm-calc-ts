import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import classes from "./BpmItem.module.css";

// Interfaces
interface PropsValue {
  key: number;
  id: string;
  value: string;
  delete: (id: string) => void;
}

function BpmItem(props: PropsValue) {
  return (
    <li id={props.id} key={props.value} className={classes.list}>
      <h3>{props.value}</h3>
      <div className={classes.icons}>
        <button onClick={() => props.delete(props.id)} className={classes.btn}>
          <FontAwesomeIcon icon={faTrash} className={classes.faIcons} />
        </button>
      </div>
    </li>
  );
}

export default BpmItem;
