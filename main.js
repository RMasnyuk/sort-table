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
            return rowA.cells[colNum].textContent - rowB.cells[colNum].textContent;
        });
    } else if (type === 'string') {
        rowsArr.sort((rowA, rowB) => {
            return rowA.cells[colNum].textContent > rowB.cells[colNum].textContent ? 1 : -1;
        });
    }

    grid.removeChild(tbody);
    for (let i = 0; i < rowsArr.length; i++) {
        tbody.append(rowsArr[i]);
    }
    grid.append(tbody);
}
