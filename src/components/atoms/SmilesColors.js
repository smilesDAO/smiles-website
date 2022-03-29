const colors = [
  {
    name: "white",
    hex: "#F3F3F3",
  },
  {
    name: "black",
    hex: "#000000",
  },
  {
    name: "brown",
    hex: "#491C0A",
  },
  {
    name: "yellow",
    hex: "#F3E397",
  },
  {
    name: "pink",
    hex: "#C74866",
  },
  {
    name: "pinkLight",
    hex: "#F7C2AC",
  },
  {
    name: "green",
    hex: "#42995E", // changed from this: "#3F945A",
  },
  {
    name: "cream",
    hex: "#F9F6E1",
  },
  {
    name: "orange",
    hex: "#F76C40",
  },
];

// add colors
const SmilesColors = {};
colors.forEach(color => {
  const {hex, name} = color;
  SmilesColors[name] = hex;
})

// add functions
SmilesColors.names = () => colors.map(color => color.name);
SmilesColors.random = () => colors[Math.floor(Math.random() * colors.length)];
SmilesColors.getColorName = (hexCodeStr) => {
  hexCodeStr = (hexCodeStr.startsWith("#") ? "" : "#") + hexCodeStr;
  return colors.find(color => color.hex === hexCodeStr)
}

export default SmilesColors;
