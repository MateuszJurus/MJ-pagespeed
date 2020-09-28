import React from "react";
import StorageItemList from "../components/storageItemList/StorageItemList";

const Scores = () => {

  const storage = {...localStorage};
  const items = [];

  for(let i = 0; i < Object.keys(storage).length; i++) {
    items.push(<StorageItemList storage={storage} key={i} item={Object.keys(storage)[i]} />)
  }

  

  //for ()

  return (
    <div className="main">
      {items}
    </div>
  );
}

export default Scores;
