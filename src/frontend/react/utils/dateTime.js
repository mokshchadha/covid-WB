const getDate = (t) => {
  const dateStr = new Date(t).toDateString();
  const date = dateStr.replace("2021", "");
  return `${new Date(t).toLocaleTimeString()}, ${date}`;
};

module.exports = { getDate };
