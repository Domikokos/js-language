/*************************Arrays */
const ar = [2, 100, 9, 80];
// ar.sort(function(a, b){
//     return a - b; 
// });
ar.sort((a,b) => a - b)
console.log(`ar is ${ar.toString()}`);
ar[ar.length] = 200;
console.log(ar);
ar.push(300, 25);
console.log(ar);
const ar1 = [-8, 30, -57];
//ar.push(ar1); there will be added array but not separated numbers
//if you want to add separated numbers you should apply a spread operator...
ar.push(...ar1);
console.log(ar);
//for adding elements at begging of an array is method "unshift"
const ar2 = [27, 35];
ar.unshift(...ar2);
console.log(ar);
ar.splice(2, 0, 1, 2);
console.log(ar);
let el = ar.pop();//removes the last element and returns it
//el = -57; -57 will be removed from the array ar
el = ar.shift(); //removes the first element and returns it
//el = 27; 27 will be removed from the array ar
console.log(el, ar);
ar.splice(3, 5)//remove 5 elements beginning from the one at index 3
console.log(ar);

//two dimensional arrays
const matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0, 1, 2]];
const matrix2 = [[10, 20], [50, -5], [34, 28]]
function displayMatrix(matrix){
    for(let i = 0; i < matrix.length; i++){
        let row = '';
        for(let j = 0; j < matrix[i].length; j++){
            row = row + matrix[i][j] + '  '
        }
        console.log(row);
    }
}
displayMatrix(matrix1);
displayMatrix(matrix2);

//------------------------HW 12 (1)----------------------------
const arHw = [13, 28, 4, 15, 25, -10, 40, 17,27];

arHw.sort(function(a, b) {
    if(a % 2 == 0){
        if(b % 2 == 0){
            if(a < b) return -1;
            else if(a > b) return 1;
            else return 0; 
        }
        else return -1;
    }
    else{
        if(b % 2 != 0){
            if(a < b) return 1;
            else if (a > b) return -1;
            else return 0
        }
        else return 1;
    }
})
  console.log(arHw);

//------------------------HW 12 (2)----------------------------
// function displayMatrix3(matrix){
//     for(let i = 0; i < matrix.length; i++){
//         for(let j = 0; j < matrix[i].length; j++){
//         }
//         console.log(matrix1);
//     }
// }
// const matrix3 = [[1, 2], [4, 5], [7, 8]];
// displayMatrix3(matrix3)