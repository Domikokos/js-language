// const ar = [-10, 50, -12, 80, 40];
// ar.push(70);
// // str - "-10#50#-12#80#40#70"
// //******************Solution based on substring */
// // let str = '';
// // ar.forEach(function(n){
// //     str += n + '#';
// // })
// // str = str.substring(0, str.length - 1);
// // const lastSharpIndex = str.lastIndexOf('#');
// // const str1 = str.substring(0, lastSharpIndex);
// // const str2 = str.substring(lastSharpIndex + 1);
// // str = str1 + str2;
// //******************Solution based on forEach form second number */
// // const ar1 = ar.slice(1);
// // let str = '' + ar[0];
// // ar1.forEach(n => str += '#' + n);
// // console.log(str);
// //*******************Printing out sequense number of element, element, length of array */
// //1 of 5 - 10;   ....
// ar.forEach((n, i, a) => console.log(`${i + 1} of ${a.length} - ${n}`));

// //****************************************** */
// // method "map"
// //use case of applying method map : you want to create new array with elements that are received as result of some conversion
// //example you want to get new array with elements that are muliplication on 2 of each source element
// const ar2 = ar.map(n => n * 2);
// console.log(ar2);
// someFunction();

const ar20 = [13, 17, 20, 23, 2, 40];
const arEvenOdd = ar20.filter((n, i, a) => a.length % 2 == 0 ? n % 2 == 0 : n % 2 == 1);
console.log(arEvenOdd);

const res = ar20.reduce((res, cur) => res + cur, 0);
console.log(res);
const max = ar20.reduce((max, cur) => cur > max )
console.log(max);
console.log(res);
res = ar20.reduce((res, cur) => res + cur);

