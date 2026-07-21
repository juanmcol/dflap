export const onClickInputHandler = (input, data, limit) => {
  let filter = "";
  for (const char of input) {
    if (data.includes(char.toUpperCase())) {
      filter += char.toUpperCase();
    } else {
      filter += "?";
    }
  }
  
  let words = filter.split(" ");
  console.log(words);
  words = words.filter(word => word !== "");
  
  const grid = [];
  let row = "";

  for (let i = 0; i < words.length; ++i) {
    console.log(words[i]);
    if (row.length === 0) {
      row = words[i];
    } else if (row.length + words[i].length < limit) {
      row += " " + words[i];
    } else {
      grid.push(row.split(""));
      row = words[i];
    }

    if (!words[i + 1]) {
      grid.push(row.split(""));
    }
  }

  return grid;
}