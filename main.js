const grid = document.querySelector('#grid');

grid.addEventListener('click', function (event) {
    const target = event.target;
    if (target.nodeName !== 'TH') {
        return;
    }
    sortColumn(event.target.cellIndex, event.target.dataset.type);
});

function sortColumn(colNum, type) {
    const tbody = grid.querySelector('tbody');
    const rowsArr = [].slice.call(tbody.rows);
    if (type === 'number') {
        rowsArr.sort((rowA, rowB) => {
            return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
        });
    } else if (type === 'string') {
        rowsArr.sort((rowA, rowB) => {
            return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML;
        });
    }

    grid.removeChild(tbody);
    for (let i = 0; i < rowsArr.length; i++) {
        tbody.append(rowsArr[i]);
    }
    grid.append(tbody);
}
