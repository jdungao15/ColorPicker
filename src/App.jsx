// Write your Color component here
import { useState } from "react";
import Color from "../components/Color/Color";
const App = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const selectColorHandler = (color) => {
    setSelectedColor(color);
  };
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color
          selectedColor={selectedColor}
          selectColorHandler={selectColorHandler}
          color="red"
        ></Color>
        <Color
          selectedColor={selectedColor}
          selectColorHandler={selectColorHandler}
          color="blue"
        ></Color>
        <Color
          selectedColor={selectedColor}
          selectColorHandler={selectColorHandler}
          color="green"
        ></Color>
      </div>
    </div>
  );
};

export default App;
