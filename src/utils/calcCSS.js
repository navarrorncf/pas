const calcCSS = (AF, min) => {
  if (min === "(*)") {
    return "blue";
  }

  let diff = AF - min;

  if (diff > 20) {
    return "blue";
  } else if (diff > 10) {
    return "yellow-green";
  } else if (diff > 0) {
    return "orange";
  } else {
    return "red";
  }
};

// module.exports = calcCSS;
export default calcCSS;
