import React from "react";

const ListGroup = (props) => {
  const { items, onItemSelect, selectedItem, textProperty, valueProperty } =
    props;
  return (
    <ul className="list-group">
      {items.map((item) => (
        <i
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
        >
          {item[textProperty]}
        </i>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_.id",
};

export default ListGroup;
