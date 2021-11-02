const innerArray1 = document.getElementById("array1");
const innerArray2 = document.getElementById("array2");
const sortedArray = document.getElementById("array_sorted");
const max = document.getElementById("max");

function makeArray() {
    let size = parseInt(document.getElementById("size").value);
    document.getElementById("size").innerHTML = size;
    let arrayA = Array.from({
        length: size
    }, () => Math.floor(Math.random() * 10 + 3));
    innerArray1.innerHTML = arrayA.join(", ");
    let maxOfArray = arrayMax(arrayA);
    max.innerHTML = maxOfArray;
    let arrayB = arrayA.map(value => value * maxOfArray);
    innerArray2.innerHTML = arrayB.join(", ");
    sortedArray.innerHTML = insertionSort(arrayB).join(", ");
}

function arrayMax(arr) {
    let len = arr.length, max = -Infinity;
    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }
    return max;
}

function insertionSort(inputArr) {
    let n = inputArr.length;
    for (let i = 1; i < n; i++) {
        let current = inputArr[i];
        let j = i - 1;
        while ((j > -1) && (current > inputArr[j])) {
            inputArr[j + 1] = inputArr[j];
            j--;
        }
        inputArr[j + 1] = current;
    }
    return inputArr;
}