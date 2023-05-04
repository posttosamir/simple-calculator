// let input1 = document.getElementById("inp1").value;
// let input2 = document.getElementById("inp1").value;
let display = document.querySelector(".display");

function addfn() {
  let input1 = document.getElementById("inp1").value;
  let input2 = document.getElementById("inp2").value;
  let res = parseInt(input1) + parseInt(input2);
  console.log(parseInt(res));
  display.innerHTML = res;
}

function subfn() {
  let input1 = document.getElementById("inp1").value;
  let input2 = document.getElementById("inp2").value;
  let res = parseInt(input1) - parseInt(input2);
  console.log(res);
  display.innerHTML = res;
}

function mulfn() {
  let input1 = document.getElementById("inp1").value;
  let input2 = document.getElementById("inp2").value;
  let res = parseInt(input1) * parseInt(input2);
  console.log(parseInt(res));
  display.innerHTML = res;
}
