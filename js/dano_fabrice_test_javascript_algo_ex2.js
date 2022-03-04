const isNotDuplicateAndNumber = arr => {
    let checkArray = '';
    //search if there are a duplicate array and if the value is between 0 and 9
    for(let x = 0; x < arr.length; x++) {
        for(let y = x + 1; y < arr.length; y++) {
            if(arr[x] > 0 && arr[x] < 10 && arr[x] != arr[y]) {
                checkArray = true;
            } else {
                return false;
            }
        }
    }
    return checkArray ?  true :  false;
};