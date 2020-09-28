import React from "react";

const StorageItem = props => {

  return (
  <div className="item panel">
    <p className="item__url">Score: {Math.round(JSON.parse(props.item[1]))}</p>
    <p className="item__url">Load speed: {props.item[2]}</p>
    <p className="item__url"><img width="300" src={props.item[3]} alt={props.item[0]} /></p>
  </div>
  );
}

export default StorageItem;
