const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const resolution = 50;
canvas.width = 500;
canvas.height = 500;

const COLS = canvas.width / resolution;
const ROWS = canvas.height / resolution;


// This function will build the game board 
function buildBoard() {
    return new Array(COLS).fill(null)
        .map(() => new Array(ROWS).fill(0)

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
            for (let i = -1; i < 2; i++){
                for (let j = -1; j < 2; j++){

                    // We do not want to count the current cell as a neighbor
                    if (i === 0 && j === 0) {
                        continue;
                    }
                    // checking the edge cases:
                    const x = col + i;
                    const y = row + j;

                    if (x >= 0 && y >= 0 && x < COLS && y < ROWS){
                        const neighbor = grid[col +i][row =j];
                        count += neighbor;
                    }


                }
            }
            // 1 2 4
            
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
            
        }
    }
}



