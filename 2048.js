const boardSize = 4;

// document.addEventListener('keydown', (event) => {
//   var name = event.key;
//   var code = event.code;
//   // Alert the key name and key code on keydown
//   alert(`Key pressed ${name} \r\n Key code value: ${code}`);
// }, false);


document.addEventListener('keydown', (e) =>
{
    const board = getBoard();
    if (e.key === 'ArrowDown')
    {
        playDown();
    }
    else if (e.key === 'ArrowUp')
    {
        playUp();
    }
    else if (e.key === 'ArrowLeft')
    {
        playLeft();
    }
    else if (e.key === 'ArrowRight')
    {
        playRight();
    }
    if (movementOccurred(board))
    {
        addRandomNum()
    }
    else if (e.key === ' ')
    {
        addRandomNum();
    }
})

function movementOccurred(board)
{
    const newBoard = getBoard();
    for (let i = 0; i < boardSize; i++)
    {
        for (let j = 0; j < boardSize; j++)
        {
            const newCell = newBoard[i][j];
            const oldCell = board[i][j];
            if (newCell !== oldCell)
            {
                return true;
            }
        }
    }
    return false;
}

function getRowID(row)
{
    return `tr${row}`;
}

function getCellID(row, cell)
{
    return `${row}td${cell}`;
}

function getBoard()
{
    const board = []
    for (let i = 0; i < boardSize; i++)
    {
        const row = []
        for (let j = 0; j < boardSize; j++)
        {
            const cell = document.getElementById(getCellID(i,j)).innerHTML;
            row.push(cell);
        }
        board.push(row);

    }
    return board;
}

function existsBlank()
{
    const board = getBoard();
    for (const row of board)
    {
        for (const cell of row)
        {
            if (cell === "")
            {
                return true;
            }
        }
    }
    return false;
}

function getRandomIndex(i)
{
    min = Math.ceil(0);
    max = Math.floor(i);
    return Math.floor(Math.random() * (max - min) + min);
}

function addRandomNum()
{
    if (!existsBlank())
    {
        return;
    }

    do{
        const newRow = getRandomIndex(boardSize);
        const newColumn = getRandomIndex(boardSize);
        const newCellID = getCellID(newRow, newColumn);
        var newCell = document.getElementById(newCellID);
        if (newCell.innerHTML === "")
        {
            const ridx = getRandomIndex(2) == 0 ? "2" : "4";
            newCell.innerHTML = ridx;
            break;
        }

    } while (newCell.innerHTML !== "")
}



function playRight()
{
    for (let i = 0; i < boardSize; i++)
    {
        const row = []
        for (let j = boardSize-1; j >= 0; j-=1)
        {
            
            const cell = document.getElementById(getCellID(i,j));
            if (cell.innerHTML === "") continue;
            let k = j+1;
            var valFound = false;
            while (k < boardSize)
            {
                const rightCell = document.getElementById(getCellID(i,k));
                if (rightCell.innerHTML !== "")
                {
                    if (rightCell.innerHTML === cell.innerHTML)
                    {
                        rightCell.innerHTML = Number(rightCell.innerHTML) * 2;
                        cell.innerHTML = "";

                    }
                    else
                    {
                        const rightCellM1 = document.getElementById(getCellID(i,k-1));
                        const rightCellM1NewVal = cell.innerHTML;
                        cell.innerHTML = "";
                        rightCellM1.innerHTML = rightCellM1NewVal;
                    }
                    valFound = true;
                    break;
                }

                k++;
            }
            if (!valFound)
            {
                const farRightCellVal = cell.innerHTML;
                cell.innerHTML = "";
                document.getElementById(getCellID(i, boardSize-1)).innerHTML = farRightCellVal;
            }

        }
    }
}




function playLeft()
{
    for (let i = 0; i < boardSize; i++)
    {
        for (let j = 0; j < boardSize; j++)
        {
            
            const cell = document.getElementById(getCellID(i,j));
            if (cell.innerHTML === "") continue;
            let k = j-1;
            var valFound = false;
            while (k >= 0)
            {
                const leftCell = document.getElementById(getCellID(i,k));
                if (leftCell.innerHTML !== "")
                {
                    if (leftCell.innerHTML === cell.innerHTML)
                    {
                        leftCell.innerHTML = Number(leftCell.innerHTML) * 2;
                        cell.innerHTML = "";

                    }
                    else
                    {
                        const leftCellM1 = document.getElementById(getCellID(i,k+1));
                        const leftCellM1NewVal = cell.innerHTML;
                        cell.innerHTML = "";
                        leftCellM1.innerHTML = leftCellM1NewVal;
                    }
                    valFound = true;
                    break;
                }

                k--;
            }
            if (!valFound)
            {
                const farleftCellVal = cell.innerHTML;
                cell.innerHTML = "";
                document.getElementById(getCellID(i, 0)).innerHTML = farleftCellVal;
            }

        }
    }
}



function playDown()
{
    for (let i = boardSize-1; i >= 0; i--)
    {
        for (let j = 0; j < boardSize; j++)
        {
            const cell = document.getElementById(getCellID(i,j));
            if (cell.innerHTML === "") continue;
            let k = i+1;
            var valFound = false;
            while (k < boardSize)
            {
                const lowerCell = document.getElementById(getCellID(k,j));
                if (lowerCell.innerHTML !== "")
                {
                    if (lowerCell.innerHTML === cell.innerHTML)
                    {
                        lowerCell.innerHTML = Number(lowerCell.innerHTML) * 2;
                        cell.innerHTML = "";
                    }
                    else
                    {
                        const lowerCellM1 = document.getElementById(getCellID(k-1,j));
                        const lowerCelll1NewVal = cell.innerHTML;
                        cell.innerHTML = "";
                        lowerCellM1.innerHTML = lowerCelll1NewVal;
                    }
                    valFound = true;
                    break;
                }
                k++;
            }
            if (!valFound)
            {
                const farBottomCellVal = cell.innerHTML;
                cell.innerHTML = "";
                document.getElementById(getCellID(boardSize-1, j)).innerHTML = farBottomCellVal;
            }
        }
    }
}


function playUp()
{
    for (let i = 0; i < boardSize; i++)
    {
        for (let j = 0; j < boardSize; j++)
        {
            const cell = document.getElementById(getCellID(i,j));
            if (cell.innerHTML === "") continue;
            let k = i - 1;
            var valFound = false;
            while (k >= 0)
            {
                const upperCell = document.getElementById(getCellID(k,j));
                if (upperCell.innerHTML !== "")
                {
                    if (upperCell.innerHTML === cell.innerHTML)
                    {
                        upperCell.innerHTML = Number(upperCell.innerHTML) * 2;
                        cell.innerHTML = "";
                    }
                    else
                    {
                        const upperCellM1 = document.getElementById(getCellID(k+1, j));
                        const upperCellM1NewVal = cell.innerHTML;
                        cell.innerHTML = "";
                        upperCellM1.innerHTML = upperCellM1NewVal
                    }
                    valFound = true;
                    break
                }
                k--;
            }
            if (!valFound)
            {
                const farUpperCelVal = cell.innerHTML;
                cell.innerHTML = "";
                document.getElementById(getCellID(0,j)).innerHTML = farUpperCelVal;
            }
        }
    }
}