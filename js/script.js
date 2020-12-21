for (var i = 1; i <= 100; i++) {
  if (i%3 == 0) {
    document.getElementById('print').innerHTML += 'Fizz';
  }
  if (i%5 == 0) {
    document.getElementById('print').innerHTML += 'Buzz';
  }
  if (i%3 != 0 && i%5 != 0) {
    document.getElementById('print').innerHTML += i;
  }
  document.getElementById('print').innerHTML += '<br>';
}
