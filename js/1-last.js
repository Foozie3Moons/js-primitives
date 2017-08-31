// 1.) Find the last name in the following array:

var friends = [
  'Moe',
  'Larry',
  'Curly',
  'Jane',
  'Emma',
  'Elizabeth',
  'Elinor',
  'Mary',
  'Darcy',
  'Grey',
  'Lydia',
  'Harriet'
];

/*
Array.prototype.last = function () {
  this[this.length-1];
}

var lastElement = friends.last();

console.log(lastElement);
*/

console.log(friends[friends.length-1])
