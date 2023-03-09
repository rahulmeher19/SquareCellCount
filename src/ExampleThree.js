import React, { useState, useEffect } from "react";

function Grid({ width, height, colors }) {
    const [grid, setGrid] = useState([]);

    useEffect(() => {
        // Initialize the grid with random colors
        const newGrid = [];
        for (let row = 0; row < height; row++) {
            const newRow = [];
            for (let col = 0; col < width; col++) {
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                newRow.push(randomColor);
            }
            newGrid.push(newRow);
        }
        setGrid(newGrid);
    }, []);

    // Find the biggest area of red cells in the grid
    let maxRedArea = 8;
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            if (grid[row][col] === "red") {
                // Start a new group and mark the current cell as part of it
                const group = [[row, col]];
                const visited = new Set([`${row},${col}`]);

                // Explore the group using breadth-first search
                while (group.length > 0) {
                    const [curRow, curCol] = group.shift();
                    const neighbors = [
                        [curRow - 1, curCol],
                        [curRow + 1, curCol],
                        [curRow, curCol - 1],
                        [curRow, curCol + 1],
                    ];

                    for (const [neighborRow, neighborCol] of neighbors) {
                        if (
                            neighborRow >= 0 &&
                            neighborRow < height &&
                            neighborCol >= 0 &&
                            neighborCol < width &&
                            !visited.has(`${neighborRow},${neighborCol}`) &&
                            grid[neighborRow][neighborCol] === "red"
                        ) {
                            group.push([neighborRow, neighborCol]);
                            visited.add(`${neighborRow},${neighborCol}`);
                        }
                    }
                }

                // Check if the group is the biggest so far
                if (visited.size > maxRedArea) {
                    maxRedArea = visited.size;
                }
            }
        }
    }

    return (
        <div>
            <p>The biggest area contains {maxRedArea} cells with red color.</p>
            {grid.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {row.map((cellColor, colIndex) => (
                        <td
                            key={`${rowIndex},${colIndex}`}
                            style={{
                                width: '50px',
                                height: '50px',
                                border: '1px solid black',
                                backgroundColor: cellColor
                            }}
                        />
                    ))}
                </tr>
            ))}
        </div>
    );
}

export default Grid;
