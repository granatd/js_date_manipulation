function getDate(date, format) {
  let dateArr = [...date];
  let formatArr = [...format];

  function getFilter(formatChar) {
    return (c, idx) => {
      if (formatArr[idx] === formatChar) {
        return true;
      }
    };
  }

  let yearArr = dateArr.filter(getFilter("y"));
  let monthArr = dateArr.filter(getFilter("m"));
  let dayArr = dateArr.filter(getFilter("d"));

  let toStrHandler = (str, c) => str + c;

  let yearStr = yearArr.reduce(toStrHandler);
  let monthStr = monthArr.reduce(toStrHandler);
  let dayStr = dayArr.reduce(toStrHandler);

  return new Date(Number(yearStr), Number(monthStr) - 1, Number(dayStr));
}

console.log(getDate("2020:12:21", "yyyy:mm:dd"));
