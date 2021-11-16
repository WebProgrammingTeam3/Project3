/*
RESOURCES:
https://www.youtube.com/watch?v=deXzu0Eregs

*/

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const resolution = 10;
canvas.width = 500;
canvas.height = 500;

const COLUMNS = canvas.width / resolution;
const ROWS = canvas.height / resolution;


// This function will build the game board 
function buildBoard() {
    return new Array(COLUMNS).fill(null)
        .map(() => new Array(ROWS).fill(null)

            // Randomly generating random living cells
            .map(() => Math.floor(Math.random() * 2)));
}

let grid = buildBoard();
requestAnimationFrame(updateBoard);

// This function will update the board
function updateBoard(){
    grid = nextGeneration(grid);
    render(grid);
    requestAnimationFrame(updateBoard);
}

// This function will display the game board
function render(grid) {
    for (let col=0; col < grid.length; col++) {
        for (let row = 0; row < grid[col].length; row++){
            const cell = grid[col][row];

            context.beginPath();

            // X, Y, width, height of the game board
            context.rect(col * resolution, row * resolution, resolution, resolution);

            // If there is a cell, then style it black; else, style it white
            context.fillStyle = cell ? 'black' : 'white';
            context.fill();
            context.stroke();
        }
    }
}

function nextGeneration(grid) {

    // Creating a copy of original grid to modify
    const nextGen = grid.map(arr => [...arr]);

    for (let col=0; col < grid.length; col++) {
        for (let row = 0; row < grid[col].length; row++){
            const cell = grid[col][row];
            let count = 0;
            // Looping through the current cell's neighbors
            // With this nested for loop, we can visit the cells around the current cell.
            for (let x = -1; x < 2; x++){
                for (let y = -1; y < 2; y++){

                    // We do not want to count the current cell as a neighbor
                    if (x === 0 && y === 0) {
                        continue;
                    }
                    // checking the edge cases:
                    const xCell = col + x;
                    const yCell = row + y;

                    if (xCell >= 0 && yCell >= 0 && xCell < COLUMNS && yCell < ROWS){
                        const neighbor = grid[col +x][row +y];
                        count += neighbor;
                    }


                }
            }
            // Rules:
            // underpopulation rule:
            // if the current cell is alive and has less than 2 neighbors, kill cell in next gen
            if(cell === 1 && count < 2){
                nextGen[col][row] = 0;

            // overcrowding rule:
            // if the current cell is alive and has more than 3 neighbors, kill cell in next gen
            } else if (cell === 1 && count > 3){
                nextGen[col][row] = 0;

            // Any live cell with two or three live neighbors’ lives on to the next gen
            } else if  (cell === 0  && count === 3){
                nextGen[col][row] = 1;
            } 

            // Anything else means that the current cell has two or three neighbors
            // Therefore, the current cell will live on to the next gen
            
        }
    }
    return nextGen;
}



