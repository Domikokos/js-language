const person1 = {id: 123, name: 'Moshe', adress: {city: 'Lod', street: 'Sokolov'}};
const person2 = {id: 123, name: 'Moshe', adress: {city: 'Lod', street: 'Sokolov'}};
const person3 = person1;
console.log(`"123" == 123 is ${"123" == 123}`);
console.log(`"123" === 123 is ${"123" === 123}`);
console.log(`person1 == person3 is ${person1 == person3}`);
console.log(`person1 == person2 is ${person1 == person2}`);
console.log(`JSON.stringify(person1) === JSON.stringify(person2) is ${JSON.stringify(person1) === JSON.stringify(person2)}`);
console.log(JSON.stringify(person1));
console.log(`Name of person1 is ${person1.name}`);
console.log(`Person1 lives in city ${person1.adress.city}`);
Object.keys(person1).forEach(k => console.log(k));//array of the object keys
Object.values(person1).forEach(v => console.log(v));//array of the object values
Object.entries(person1).forEach(e => console.log(e));//array of arrays - [key, value]
function createAdress(city, street){
    return {city, street}
}
function createPerson(id, name, adress){
    return {id, name, adress}
}
const persons = [
    createPerson(123, "Vasy", createAdress("Rehovot", "Parshani")),
    createPerson(124, "Olya", createAdress("Rehovot", "Pr. Plaut")),
    createPerson(125, "Tolya", createAdress("Tel-Aviv", "Dizingoff")),
]
function displayOccurrences(array) {
    //creating object with key - unique element of array (string as an element of array)
    //                     value - occurrences count
    //difference between  obj ={a: 123, d: "abc"}; const a = "d" ; obj.a === 123,
    // and obj[a] === "abc"
    //obj.c = 10 -> {a: 123, d: "abc", c: 10}
    const res = {};
    for (let i = 0; i < array.length; i++) {
            if (res[array[i]] === undefined) {
                    //string as content of array[i] occures first time
                    res[array[i]] = 1;
            } else {
                    res[array[i]] = res[array[i]] + 1;
            }
    }
    // console.log(res) -> intermediate debug log
    Object.entries(res).sort((e1, e2) => {
            const res = e2[1] - e1[1];
            return res === 0 ? e1[0].localeCompare(e2[0]) :  res;
    }).forEach(e => console.log(`${e[0]} -> ${e[1]}`))


}
const ar = ["bc", "lmn", "d", "d", "lmn", "a", "lmn", "a"];
displayOccurrences(ar);