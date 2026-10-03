function findSecondLargestNumber(arr) {
    if (arr.length === 0) {
        return null; // Return null for empty array
    }
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    for(let i = 0; i<arr.length; i++ ){
        if(arr[i] > firstLargest){
            secondLargest = firstLargest;
            firstLargest = arr[i]
        }
        else if(arr[i] > secondLargest && arr[i] != firstLargest){ // make sure to handle duplicates
            secondLargest = arr[i]
        }
    }
    return secondLargest
}

console.log(findSecondLargestNumber([10,20,30,40,15,24,42,42]))