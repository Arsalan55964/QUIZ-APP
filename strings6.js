const name = "asad"
const repocount = 80

//console.log(name + repocount + "value");

console.log('Hello My name is ${name} and my repo count is $ {repocount}');

const gameName = new String('hitesh-hc-com')

console.log(gameName[5]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(-5, 2)
console.log(newString);

const anotherString = gameName.slice(-4, 6)
console.log(anotherString);

const newStringOne = "  harry  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))

console.log(url.includes('sharuk'))

console.log(gameName.split('-'));


