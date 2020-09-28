import React from "react";
import StorageItem from "../storageItem/StorageItem";

import "./storageItemList.scss";

const StorageItemList = props => {

  const items = [];
  for(let i = 0; i < Object.keys(JSON.parse(props.storage[props.item])).length; i++) {
    items.push(<StorageItem item={JSON.parse(props.storage[props.item])[i+1]} key={i} />)
  }

  return (
    <div>
      <h1 className="storage__header">{Object.values(JSON.parse(props.storage[props.item]))[0][0]}</h1>
      <div className="storage__list">
        {items}
      </div>
    </div>
  );
}

export default StorageItemList;
