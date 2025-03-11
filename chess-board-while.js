// chess board pattern using while loop

let size = 8;
let board = "";
let outerLoop = 0;
let innerloop = 0;

while (outerLoop < size) {
    while (innerloop < size) {
        if ((outerLoop + innerloop) % 2 === 0) {
            board += " ";
        } else {
            board += "#";
        }
        innerloop++;
    }
    board += "\n";
    outerLoop++;
    innerloop = 0;
}

console.log(board);