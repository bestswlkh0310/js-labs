function tag(str, ...obj) {
    console.log(str);
    console.log(obj);
}

tag`Hello World${10} ${'wow'}`

console.log(`${{'display': 'flex'}} wow ${() => 10}`);

console.log(`\`` === "`"); // true
console.log(`\${1}` === "${1}"); // true

console.log(`
#include <stdio.h>

int main() {
    printf("Hello World");
    return 0;
}
`);

const age = 28;
const name = 'WOW';

const SQL = `SELECT * FROM USER WHERE name = ${name} AND age = ${age} ORDER BY name`;

console.log(SQL);

const person = "Mike";

function myTag(strings, personExp, ageExp) {
    const str0 = strings[0]; // "That "
    const str1 = strings[1]; // " is a "
    const str2 = strings[2]; // "."

    const ageStr = ageExp < 100 ? "youngster" : "centenarian";

    // We can even return a string built using a template literal
    return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

const output = myTag`That ${person} is a ${age}.`;

console.log(output);