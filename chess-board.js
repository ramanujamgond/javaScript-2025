let size = 8;
let board = "";

for (let outerLoop = 0; outerLoop < size; outerLoop++) {
    for (let innerloop = 0; innerloop < size; innerloop++) {
        if ((outerLoop + innerloop) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}

console.log(board);