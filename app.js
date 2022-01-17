/*************************Strings */
const str1 = "abc";
const str2 = "abc";
console.log(`str1 == str2 is ${str1 == str2}`)
console.log(`"abc" < "ab" is ${str1 < "ab"}`)
console.log(`"123" > 23 is ${"123" > 23}`);
console.log(`"123" > "23" is ${"123" > "23"}`);
/****************************************** */
//if  logical expression contains both string and number, JS will convert string to number
//if string doesn't contain a number a result of conversion will be NaN
//In any logical expression if there is NaN, then the result will be false
console.log(`"abc" > 23 is ${"abc" > 23}`);
console.log(`"abc" < 23 is ${"abc" < 23}`);
console.log(`"abc" != 23 is ${!("abc" == 23)}`)
/********************************************* */
function stringProcessing(str) {
        const strP = "" + str;
       console.log(`"${str}"[4] is ${str[4]}`);
       console.log(`length of "${str}" is ${strP.length}`);
       console.log(`"${str}" includes "abc" is ${strP.includes("abc")}`);
       console.log(`substring of "${str}" beginning from index 2 to index 5 is ${strP.substring(2, 5)}`);
       console.log(`index of substring "ll" in the "${str}" is ${strP.indexOf("ll")}; last index of substring "ll" in the "${str}" is  ${strP.lastIndexOf("ll")}`)

}
stringProcessing("abcd*lmn*ll(oo&&ttll");
function encode (num, codingString) {
    let sym = 1;
        for (let i = 0; i < codingString.length - 1; i++) {
            if (codingString[i] == codingString[i + 1]){
                return console.log("Please choose another codingString.");
            }
            sym++;
        }   
    let res="";
        do {
            const digit = Math.trunc(num % sym);
            const symb = getSymbol(digit, codingString);
            res = symb + res;
            num = Math.trunc(num / sym);
        } while(num >= 1);
    return res;
}

function getSymbol(digit, codingString) {
    return "" + codingString[digit];
}

console.log(encode(45, "abcde")); 