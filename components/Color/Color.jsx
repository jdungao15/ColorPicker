const Color = ({ selectedColor, color, selectColorHandler }) => {
  return (
    <div
      className={selectedColor === color ? `${color} selected` : color}
      onClick={() => selectColorHandler(color)}
    ></div>
  );
};

export default Color;
