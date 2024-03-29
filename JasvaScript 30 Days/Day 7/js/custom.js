"use strict";

// ## Array Cardio Day 2
const people = [
    {name: 'Wes', year: 1988},
    {name: 'Kait', year: 1986},
    {name: 'Irv', year: 1970},
    {name: 'Lux', year: 2015}
];
const comments = [
    {text: 'Love this!', id: 523423},
    {text: 'Super good', id: 823423},
    {text: 'You are the best', id: 2039842},
    {text: 'Ramen is my fav food ever', id: 123523},
    {text: 'Nice Nice Nice!', id: 542328}
];

console.log('Arrays for test');

console.table(people);
console.table(comments);

console.log('let\'s do the exercise');
console.log('*****************************************************************************');
console.log('*****************************************************************************');
console.log('*****************************************************************************');

// Some and Every Checks
const currentYear = new Date().getFullYear();
// Array.prototype.some() // is at least one person 19 or older?
let isAdult = people.some(person => (currentYear - person.year) >= 19);
console.log('is at least one person 19 or older? ', isAdult);
// Array.prototype.every() // is everyone 19 or older?
let areAllAdults = people.every(person => (currentYear - person.year) >= 19);
console.log('is everyone 19 or older?', areAllAdults);
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
let comment = comments.find(comment => comment.id === 823423);
console.log('find the comment with the ID of 823423: ');
console.table(comment);
// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
let commentIndex = comments.findIndex(comment => comment.id === 823423);
console.log('Find the index of comment with this ID: ', commentIndex);
let newComments = [...comments.slice(0, commentIndex), ...comments.slice(commentIndex + 1)];
console.log('delete the comment with the ID of 823423');
console.table(newComments);