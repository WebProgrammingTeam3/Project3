/*
RESOURCES:
https://www.youtube.com/watch?v=deXzu0Eregs

https://levelup.gitconnected.com/conways-game-of-life-in-javascript-9498ae1958fe

*/

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

var resolution = 10;
canvas.width = 600;
canvas.height = 600;

const COLUMNS = canvas.width / resolution;
const ROWS = canvas.height / resolution;
var isPaused = false;


var update = null;

let grid = buildBoard();
render(grid);

// Sandbox for Buttons

// const startButton = document.querySelector('#start');
// const stopButton = document.querySelector('#stop');

// var button = document.getElementById('start');

// function start_button() {
//     buttonrequestAnimationFrame(updateBoard);
// }

// function stop_button() {
//     cancelAnimationFrame(update);
// }

// startButton.addEventListener('click', () => {
//     start_button();
// });


// stopButton.addEventListener('click', () => {
//     stop_button();
// })

window.onload = () => {
    document.querySelector("#start").addEventListener("click",
        () => {
            var temp = requestAnimationFrame(updateBoard);
        })
    document.querySelector("#stop").addEventListener("click", 
        () => {
            location.reload();
        })
    document.querySelector("#nextGen").addEventListener("click",
        () => {

            grid = nextGeneration(grid);
            render(grid);
        })
    document.querySelector("#nexGen").addEventListener("click",
        () => {
            for (var i = 0; i<23;i++) {
                grid = nextGeneration(grid);
            }
            render(grid);
        })
    document.querySelector("#random").addEventListener("click",
        () => {

            grid = buildBoard();
            render(grid);
        })
    // Small Button
    document.querySelector("#small").addEventListener("click",
        () => {
            resolution = 10;
            canvas.width = 200;
            canvas.height = 200;
            grid = buildBoard();
            render(grid);
        })

    // Medium Button 
    document.querySelector("#medium").addEventListener("click",
    () => {
        resolution = 10;
        canvas.width = 400;
        canvas.height = 400;
        grid = buildBoard();
        render(grid);
    })

    // Large Button
    document.querySelector("#large").addEventListener("click",
    () => {
        resolution = 10;
        canvas.width = 600;
        canvas.height = 600;
        grid = buildBoard();
        render(grid);
    })
    document.querySelector("#pulsar").addEventListener("click",
    () => {
        grid = buildPattern1();
        render(grid);
        
    })
    document.querySelector("#glider").addEventListener("click",
    () => {
        grid = buildPattern2();
        render(grid);
    })
    document.querySelector("#block").addEventListener("click",
    () => {
        grid = buildPattern3();
        render(grid);
    })
}

// This function will build the game board
function buildBoard() {
    return new Array(COLUMNS).fill(null)
        .map(() => new Array(ROWS).fill(null)

            // Randomly generating random living cells
            .map(() => Math.floor(Math.random() * 2)));
}

function buildPattern1() {
    let pattern = new Array(COLUMNS).fill(null)
        .map(() => new Array(ROWS).fill(null));

        pattern[8][20] = 1;
        pattern[8][21] = 1;
        pattern[8][22] = 1;
        pattern[8][26] = 1;
        pattern[8][27] = 1;
        pattern[8][28] = 1;
    
        pattern[10][18] = 1;
        pattern[10][23] = 1;
        pattern[10][25] = 1;
        pattern[10][30] = 1;
    
        pattern[11][18] = 1;
        pattern[11][23] = 1;
        pattern[11][25] = 1;
        pattern[11][30] = 1;
    
        pattern[12][18] = 1;
        pattern[12][23] = 1;
        pattern[12][25] = 1;
        pattern[12][30] = 1;
    
        pattern[13][20] = 1;
        pattern[13][21] = 1;
        pattern[13][22] = 1;
        pattern[13][26] = 1;
        pattern[13][27] = 1;
        pattern[13][28] = 1;
    
        pattern[15][20] = 1;
        pattern[15][21] = 1;
        pattern[15][22] = 1;
        pattern[15][26] = 1;
        pattern[15][27] = 1;
        pattern[15][28] = 1;
    
        pattern[16][18] = 1;
        pattern[16][23] = 1;
        pattern[16][25] = 1;
        pattern[16][30] = 1;
    
        pattern[17][18] = 1;
        pattern[17][23] = 1;
        pattern[17][25] = 1;
        pattern[17][30] = 1;
    
        pattern[18][18] = 1;
        pattern[18][23] = 1;
        pattern[18][25] = 1;
        pattern[18][30] = 1;
    
        pattern[20][20] = 1;
        pattern[20][21] = 1;
        pattern[20][22] = 1;
        pattern[20][26] = 1;
        pattern[20][27] = 1;
        pattern[20][28] = 1;

    return pattern;

}

function buildPattern2() {
    let pattern = new Array(COLUMNS).fill(null)
    .map(() => new Array(ROWS).fill(null));

    pattern[3][5] = 1;
    pattern[4][3] = 1;
    pattern[4][5] = 1;
    pattern[5][4] = 1;
    pattern[5][5] = 1;

return pattern;

}

function buildPattern3() {
    let pattern = new Array(COLUMNS).fill(null)
    .map(() => new Array(ROWS).fill(null));

    pattern[4][3] = 1;
    pattern[3][3] = 1;
    pattern[4][4] = 1;
    pattern[3][4] = 1;


return pattern;

}

function pattern2(i,j) {
    if(i%2==0) {
        return 1;
    } else {
        return 0;
    }
}

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
