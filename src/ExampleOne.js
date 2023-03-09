import React, { useState, useEffect } from 'react';

const COLORS = ['purple', 'green', 'red', 'blue'];

const Grid = () => {
    const [cells, setCells] = useState([]);

    useEffect(() => {
        const grid = [];

        // Create the grid with empty cells
        for (let i = 0; i < 10; i++) {
            const row = [];
            for (let j = 0; j < 10; j++) {
                row.push(null);
            }
            grid.push(row);
        }
        console.log(grid, "grid area");
        // Create a block of 15 purple cells in the middle of the grid
        const startX = 3;
        const startY = 3;
        for (let i = startX; i < startX + 5; i++) {
            for (let j = startY; j < startY + 3; j++) {
                grid[i][j] = 'purple';
                console.log(grid[i][j], "cells");

            }
        }

        // Randomly assign the remaining cells to the other colors
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (grid[i][j] === null) {
                    grid[i][j] = COLORS[Math.floor(Math.random() * COLORS.length)];

                }
            }
        }

        setCells(grid);
    }, []);



    return (
        <div>
            <p>The biggest area contains {COLORS.length} cells with purple color.</p>

            {cells.map((row, rowIndex) => (
                <div key={rowIndex} style={{ display: 'flex' }}>
                    {row.map((color, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            style={{
                                width: '50px',
                                height: '50px',
                                backgroundColor: color,
                                border: '1px solid black',
                            }}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Grid;
