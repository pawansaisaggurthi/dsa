
function findLargest(arr){
if(!arr.length) return;
let largest = arr[0]
for(let i=0; i<arr.length;i++){
    if(arr[i]> largest){
        largest = arr[i]
    }
} 
return largest;
}

console.log(findLargest([10,20,3,4,-5,33,44,1,0,7]))


function findSecondLargest(arr) {
    if(arr.length<2) return;

    let secondLargest = arr[0];
    let firstLargest = arr[0];

    for(let i = 0; i< arr.length; i++){
        if(arr[i]> firstLargest){
            secondLargest = firstLargest;
            firstLargest = arr[i];
        }else if(arr[i] > secondLargest && arr[i]<firstLargest){
            secondLargest = arr[i]
        }
    }

    return secondLargest;
}

/**
 * corner cases
 
array has duplicates 
array has empty
 */

console.log(findSecondLargest([10,3,2,46,5,2,5,6,7,41,-3,4,46]))


var a = 10;

function values(){
 a = 100;
console.log(a)
}

values();
console.log(a)

let as = 10;
{
  let as = 20; // ✅ new block, no problem
  console.log(as)
}



