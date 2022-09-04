import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "./DraggableColorBox";

function DraggableColorList(props) {
  const { colors, removeColor } = props;
  return (
    <div style={{ height: "100%" }}>
      {colors.map((color, i) => (
        <DraggableColorBox
          index={i}
          key={color.name}
          color={color.color}
          name={color.name}
          handleClick={removeColor}
        ></DraggableColorBox>
      ))}
    </div>
  );
}

export default SortableContainer(DraggableColorList);
