let to_verify = [];
//create array of 9 element
for(let i = 0; i < 9; i++){
    to_verify[i] = [];
};

const transferTable = () => {
    for(let i = 0; i < array_number.length; i++) {
        to_verify[i] = array_number[i].split(' ');
    }
};

// Create a table element and insert to_verify element into table cell then add table to the DOM
const displayArray = () => {
    let table = document.createElement('table');
    for(let row of to_verify) {
        table.insertRow();
        for(let cell of row) {
            let newCell = table.rows[table.rows.length - 1].insertCell();
            newCell.textContent = cell;
        }
    }
    document.body.appendChild(table);
};

transferTable();
displayArray();