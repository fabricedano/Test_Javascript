const checkLineAnomaly = () => {
    //search and display line anomaly
    for(let x = 0; x < to_verify.length; x++) {
        if(isNotDuplicateAndNumber(to_verify[x]) === false) {
            let tag = document.createElement("p");
            let text = document.createTextNode(`Line ${x + 1} incorrect ${to_verify[x]}`);
            tag.appendChild(text);
            document.body.appendChild(tag);
        }
    }
}

const checkColomnAnomaly = () => {
    let colomn = [];

    //create array of 9 element
    for(let i = 0; i < 9; i++){
        colomn[i] = [];
    };
    //fill column with arrays including the value of each column
    for(let x = 0; x < to_verify.length; x++) {
        for(let y = 0; y < to_verify[x].length; y++) {
            colomn[x].push(to_verify[y][x]);
        }
    }

    //search and display column anomaly
    for(let i = 0; i < to_verify.length; i++) {
        if(isNotDuplicateAndNumber(colomn[i]) === false) {
            let tag = document.createElement("p");
            let text = document.createTextNode(`Colomn ${i + 1} incorrect ${colomn[i]}`);
            tag.appendChild(text);
            document.body.appendChild(tag);
        }
    }
}

const checkRegionAnomaly = () => {
    
}

checkLineAnomaly();
checkColomnAnomaly();
checkRegionAnomaly();