let in1 = document.getElementById('in1');
let in2 = document.getElementById('in2');
let in3 = document.getElementById('in3');
let select = document.getElementById('num');

 function celec() {
  if ( select.value === '+') {
    in3.value = +in1.value + +in2.value;
  }
   else if ( select.value === '-') {
    in3.value = +in1.value - +in2.value;
  }
  else if ( select.value === '*') {
    in3.value = +in1.value * +in2.value;
  }
  else if ( select.value === '/') {
    in3.value = +in1.value / +in2.value;
  }
  
 }
