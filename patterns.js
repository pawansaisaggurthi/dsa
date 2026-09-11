

/*

Print 
* * * *
* * * *
* * * *
* * * *
 */



let n = 4;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    row += "*";
  }
  console.log(row);
}



/*
 Print 
*
* *
* * *
* * * *

 */
let m = 4;
for (let i = 0; i < m; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += "*";
  }
  console.log(row );
}



/*
Print

1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
 */

let k = 5

for(let i=0; i<=k; i++){
    let row = "";
    for(let j=1;j<=i;j++){
        row = row + j
    }

    console.log(row)
}




/*
Print

1
2 2
3 3 3
4 4 4 4 
5 5 5 5 5

 */
let l = 5

for(let i=0; i<=l; i++){
    let row = "";
    for(let j=1;j<=i;j++){
        row = row + i
    }

    console.log(row)
}


    console.log("")





    /*

    Print  
     1 2 3 4
     1 2 3
     1 2
     1


     core formula is n-1
     */

let  h= 5

for(let i = 0 ; i<h; i++) {
    let row = "";
    for(let j=1; j<=h-i;j++){
        row = row + j
    }
    console.log(row)
}


    console.log("")

    /*
    Print

      *
    * *
  * * *
* * * *
    
    */

let r = 5

for(let i =0; i<r; i++){
    let row = ""
    for(let j=0; j<r;j++){
        if(j<n-i){
            row = row + " "
        }else{
            row = row + "*"
        }
    }

    console.log(row)

}

    console.log("")



    /*

    Print
1
1 0
1 0 1
1 0 1 0
     */



let f =5;
 
for(let i=0; i<f; i++){
    let row = "";
    for(let j=0; j<=i; j++){
        if(j%2 == 0){
        row = row + "1 "
        }
        else{
        row = row + "0 "
        }
    }
    console.log(row)

}

//Another approch

// adding new varible to behave like switch to change 0 to 1 and 1 to0

let e = 5

for(let i =0; i<e; i++){
    let row = ""; 
     let toggle = 1
    for(let j = 0 ; j<=i; j++){
        row = row + toggle;
       toggle = toggle==1?0:1
    }

console.log(row)

}




/*
Print

1
0 1
0 1 0
1 0 1 0
*/

let w = 5

let toggle = 1  //  in the privious problem we are on every ouer loops we reinitilizing the toggle so now we are intilizing only once
for(let i =0; i<w; i++){
    let row = ""; 
    for(let j = 0 ; j<=i; j++){
        row = row + toggle;
       toggle = toggle==1?0:1
    }

console.log(row)

}



function printStr(str, cb) {
  setTimeout(() => {
    console.log(str);
    cb();
  }, Math.floor(Math.random() * 100) + 1);
}
function printAll() {
  printStr("A", () => {
    printStr("B", () => {
      printStr("C", () => {});
    });
  });
}
printAll(); 


