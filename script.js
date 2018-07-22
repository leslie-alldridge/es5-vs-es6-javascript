//let and const

//es5 

// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name5);

 //es6
// const name6 = 'Jane Smith';
// let age6 = 23;
// name6 = 'Jane Miller';
// console.log(name6);

//es5 
// function driversLicense5(passedTest) {
//     if (passedTest) {
//         var firstName = 'Leslie';
//         var yearOfBirth = 1990;

        
//     }
//     console.log(firstName + ' born in ' + yearOfBirth + ' is now able to drive a car');
// }

// driversLicense5(true);

 //es6

// function driversLicense6(passedTest) {
//     let firstName;
//     const yearOfBirth = 1990;
//     if (passedTest) {
//          firstName = 'Leslie';

        
//     }
//     console.log(firstName + ' born in ' + yearOfBirth + ' is now able to drive a car');
// }

// driversLicense6(true);

// var i = 23;

// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }

// console.log(i);

//Blocks and IIFEs

// ES6
//{
//     const a = 1;
//     let b = 2;
//     var c = 3;
// }

// //console.log(a + b);
// console.log(c);


// // ES5
// (function() {
//     var c = 3;
// })();

// //console.log(c);

// //Strings 

// let firstName = 'leslie';
// let lastName = 'smith';
// const yearOfBirth = 1990;

// function calcAge(year){
//     return 2016 - year;
// }

// //es5

// console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. He is ' + calcAge(yearOfBirth) + ' years old.')

// //es6 wow!

// console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);

// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith('l'));
// console.log(n.endsWith('smi'));
// console.log(n.includes('z'));
// console.log(`${firstName} `.repeat(10));

// //arrow functions 

// const years = [1990, 1965, 1982, 1937];

// // ES5
// var ages5 = years.map(function(el) {
//     return 2016 - el;
// });
// console.log(ages5);


// // ES6
// let ages6 = years.map(el => 2016 - el);
// console.log(ages6);

// ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
// console.log(ages6);

// ages6 = years.map((el, index) => {
//     const now = new Date().getFullYear();
//     const age = now - el;
//     return `Age element ${index + 1}: ${age}.`
// });
// console.log(ages6);


// //arrow functions 2 (advanced)

// //es5 

// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function(){
//         var self = this;
//         document.querySelector('.green').addEventListener('click', function(){
//             var str = 'This is box number ' + self.position + ' and it is ' + self.color;
//             alert(str);
//         });
//     }
// }
// //box5.clickMe();

// //es6

// var box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function(){
//         document.querySelector('.green').addEventListener('click',() => {
//             var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//             alert(str);
//         });
//     }
// }
// box6.clickMe();

// function Person(name) {
//     this.name = name;
// }

// //es5

// Person.prototype.myFriends5 = function(friends){
//     var arr = friends.map(function(el){
//         return this.name + ' is friends with ' + el;
//     }.bind(this));

//     console.log(arr);
// }

// var friends = ['Bob', 'Jane', 'Mark'];

// new Person('John').myFriends5(friends);

// //es6 

// Person.prototype.myFriends6 = function(friends){
//     var arr = friends.map(el =>
//        `${this.name}` + ' is friends with ' + `${el}`);

//     console.log(arr);
// }

// var friends = ['Bob', 'Jane', 'Mark'];

// new Person('John2').myFriends6(friends);

// destructuring 

//es5 

// var john = ['John', 26];

// //es6 

// const [name, age] = ['John', 26];
// console.log(name);
// console.log(age);

// const obj = {
//     firstName: 'John',
//     lastName: 'Smith'
// };


// const {firstName, lastName} = obj;
// console.log(firstName);
// console.log(lastName);

// const {firstName: a, lastName: b} = obj;
// console.log(a);
// console.log(b);


// function calcAgeRetirement(year) {
//     const age = new Date().getFullYear() - year;
//     return [age, 65 - age];
// }

// const [age2, retirement] = calcAgeRetirement(1990);
// console.log(age2);
// console.log(retirement);


//arrays

const boxes = 
document.querySelectorAll('.box');

// // //es5
// var boxesArr5 =
// Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(cur){
//     cur.style.backgroundColor = 'dodgerblue';
// });

// //es6
const boxesArr6 =  Array.from(boxes);
 Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');


// //es5 
// for(var i=0; i< boxesArr5.length; i++){
//     if (boxesArr5[i].className === 'box blue'){
//         continue;
//     }
//     boxesArr5[i].textContent = 'I changed to blue!';
// }

//es6

for (const cur of boxesArr6){
    if (cur.className.includes('blue')){
        continue;
    }
    cur.textContent = 'I changed to blue!';
}

//ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//es6

console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));











