// 4.) List all the `friends` above in reverse alphabetical order.

var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';

// if keeping as an array
console.log(friends.split(',').sort().reverse());

// if rejoining as a string
console.log(friends.split(',').sort().reverse().join());
