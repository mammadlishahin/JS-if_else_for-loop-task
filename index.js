// 1
function countOccurrences(arr) {
    let counts = {}; 

    arr.forEach(function(item) {
        counts[item] = (counts[item] || 0) + 1; 
    });

    for (let key in counts) {
        console.log(`${key}: ${counts[key]} kez`);
    }
}

let myArray = [5, 2, "salam", "necesen", "salam", 56, 2, 7, 7, 7];
countOccurrences(myArray);

// 2
function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let sortedArr1 = arr1.slice().sort(); 
    let sortedArr2 = arr2.slice().sort();

    for (let i = 0; i < sortedArr1.length; i++) {
        if (sortedArr1[i] !== sortedArr2[i]) {
            return false; 
        }
    }

    return true; 
}

let firstArr = [1, 2, 3];
let secondArr = [1, 2, 3];
console.log(arraysAreEqual(firstArr, secondArr)); // true

// 3
function findSecondSmallestAndLargest(arr) {
    let uniqueSortedArr = [...new Set(arr)].sort((a, b) => a - b);
    let secondSmallest = uniqueSortedArr[1]; 
    let secondLargest = uniqueSortedArr[uniqueSortedArr.length - 2]; 

    return `İkinci ən kiçik ədəd: ${secondSmallest}, İkinci ən böyük ədəd: ${secondLargest}`;
}

let myNumberArray = [ -7, -71, 66, 11, 3, 8, 67];
console.log(findSecondSmallestAndLargest(myNumberArray));

// 4
function sumPositiveAndNegative(arr) {
    let positiveSum = 0;  
    let negativeSum = 0;  

    arr.forEach(function(num) {
        if (num > 0) {
            positiveSum += num;  
        } else if (num < 0) {
            negativeSum += num; 
        }
    });

    console.log(`Müsbət rəqəmlərin toplamı: ${positiveSum}`);
    console.log(`Mənfi rəqəmlərin toplamı: ${negativeSum}`);
}

let NumberArray = [-7, -71, 66, 11, 3, 8, 67];
sumPositiveAndNegative(NumberArray);

// 5
function filterLargerThan(num, arr) {
    let resultArray = arr.filter(function(item) {
        return item > num;  
    });

    return resultArray;  
}

let newmyArray = [10, 3, 50, -5, 20, 7];
let limit = 10;
let filteredArray = filterLargerThan(limit, newmyArray);

console.log(filteredArray); 

// 6
function printUniqueValues(arr) {
    let uniqueValues = [...new Set(arr)];

    uniqueValues.forEach(function(item) {
        console.log(item);
    });
}

let CmyArray = [1, "salam", 1, true, true, false, false, false, 5, "5"];
printUniqueValues(CmyArray);
