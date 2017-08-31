var fizzbuzz = function (len) {
  var list = [];
  for (var i = 0; i <= len; i++) {
      list.push(i);
  }
  for (x in list) {
    if ((x % 3 === 0) && (x % 5 === 0)) {
      console.log('fizzbuzz');
    }
    if (x % 5 === 0) {
      console.log('buzz');
    }
    if (x % 3 === 0) {
      console.log('fizz');
    }
    else {
      console.log(x);
    }
  }
}

fizzbuzz(100);
