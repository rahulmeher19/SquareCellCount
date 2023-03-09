import './App.css';

export default function generateSquare(width, height, numColors) {
  const grid = [];
  for (let i = 0; i < height; i++) {
    const row = [];
    for (let j = 0; j < width; j++) {
      row.push(Math.floor(Math.random() * numColors));
    }
    grid.push(row);
  }
  return grid;
}


function largestSameColorArea(grid) {
  if (!grid || grid.length === 0 || grid[0].length === 0) {
    return [0, null];
  }

  const rows = grid.length;
  const cols = grid[0].length;
  let maxArea = 0;
  let maxColor = null;

  for (const color of new Set(grid.flat())) {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (grid[i][j] === color) {
          let area = 0;
          const queue = [[i, j]];
          while (queue.length > 0) {
            const [r, c] = queue.shift();
            if (r >= 0 && r < rows && c >= 0 && c < cols && grid[r][c] === color) {
              area++;
              grid[r][c] = -1;  // mark cell as visited
              queue.push([r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]);
            }
          }
          if (area > maxArea) {
            maxArea = area;
            maxColor = color;
          }
        }
        console.log(color, "color");
      }
    }
  }

  return [maxArea, maxColor];
}
const grid = generateSquare(10, 10, 4);
console.log(grid);
// Output: [[2, 2, 0, 0, 2],
//          [1, 1, 1, 1, 1],
//          [2, 0, 2, 2, 1],
//          [2, 2, 2, 0, 1],
//          [1, 2, 1, 1, 0]]

const [area, color] = largestSameColorArea(grid);
console.log(`Largest same color area: ${area}, color: ${color}`);
// Output: Largest same color area: 10, color: 1
