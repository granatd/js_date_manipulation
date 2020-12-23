function getDate(date, format) {
  const dateArr = [...date.trim()];
  const formatArr = [...format.trim()];

  function getFilter(formatChar) {
    return (c, idx) => {
      if (formatArr[idx] === formatChar) {
        return true;
      }
    };
  }

  if (!validateDateStr(date, format)) {
    console.log(`Date str: ${date} is invalid!
Doesn\'t match to specified format: ${format}`);
    return;
  }

  const yearStr = dateArr.filter(getFilter("y")).join("");
  const monthStr = dateArr.filter(getFilter("m")).join("");
  const dayStr = dateArr.filter(getFilter("d")).join("");

  const year = Number(yearStr);
  const month = Number(monthStr) - 1;
  const day = dayStr.length ? Number(dayStr) : 1;

  if (!validateDate([year, month, day])) {
    return false;
  }

  return new Date(year, month, day);
}

function validateDate(arr) {
  const [year, month, day] = arr;

  if (month < 0 || month > 11) {
    console.log("Invalid month!");
    return false;
  }
  if (day < 0 || day > 31) {
    console.log("Invalid day!");
    return false;
  }

  return true;
}

function validateDateStr(date, format) {
  dateTrimmed = date.trim();
  formatTrimmed = format.trim();

  if (dateTrimmed.length !== formatTrimmed.length) {
    return false;
  }

  return [...formatTrimmed].reduce((acc, element, idx) => {
    if (["y", "m", "d"].includes(element)) {
      if (Number(dateTrimmed[idx]) === NaN) {
        return false;
      }
      return acc;
    }

    return acc && dateTrimmed[idx] === element;
  }, true);
}

const date = getDate("2020:12:30", "yyyy:mm:dd");
if (date) {
  console.log(date);
}
