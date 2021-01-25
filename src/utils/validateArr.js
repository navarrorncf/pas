const validateArr = (arr) => {
  let regex = /(li|le|lf)/;
  for (let item of arr) {
    if (!regex.test(item) && isNaN(item * 1)) {
      return false;
    }
  }
  return true;
};

module.exports = validateArr;
