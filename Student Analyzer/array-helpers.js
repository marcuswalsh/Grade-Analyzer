// Array Helper Functions

// Searches for a specific value in an array
function includes(item, anArray){
    for(let i = 0; i < anArray.length; i++){
        if(anArray[i]==item){
            return true;
        }
    }
    return false;
}

// Finds the lowest numerical value in an array
function minItem(anArray) {
    let minNum = anArray[0];
    for(i = 1; i < anArray.length; i++){
        if(anArray[i] < minNum){
            minNum = anArray[i];
        }
    }
    return minNum;
}

// Finds the highest numerical value in an array
function maxItem(anArray){
    let maxNum = anArray[0];
    for(i = 1; i < anArray.length; i++){
        if(anArray[i] > maxNum){
            maxNum = anArray[i];
        }
    }
    return maxNum;
}



// Finds the average of an array of numbers
function arrayAverage(anArray) {
    let totalValue = 0;
    for(i = 0; i < anArray.length; i++){
        totalValue += anArray[i];
    }
    return Math.round(totalValue / anArray.length);
}

