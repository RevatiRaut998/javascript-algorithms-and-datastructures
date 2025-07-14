// Character used to draw the pyramid
const character = "#";

// Builds a single centered row of the pyramid
function padRow(rowNumber, rowCount) {
  const spaces = " ".repeat(rowCount - rowNumber);
  const chars = character.repeat(2 * rowNumber - 1);
  return spaces + chars + spaces;
}

// Builds the full pyramid
function buildPyramid(count) {
  const rows = [];

  for (let i = 1; i <= count; i++) {
    rows.push(padRow(i, count));
  }

  return rows.join("\n");
}

// Example usage:
const pyramid = buildPyramid(8);
console.log(pyramid);
