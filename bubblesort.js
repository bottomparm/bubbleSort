function bubbleSort(arr){
    for (let i = 0; i < arr.length; i++){
        if (compare(arr[i], arr[i+1])){
            arr.splice(i, 2, ...swap(arr[i], arr[i+1]))
        }
    }
    return arr;
}

function swap(a, b){
    return [b, a];
}

function compare(a, b){
    if (a > b){
        return true;
    }else{
        return false;
    }
}

let array = [12, 3, 5, 4, 1, 7, 2, 5, 9];
console.log(bubbleSort(array));
