var demo = document.getElementById("demo");
var a = 0;
var button_1 = document.getElementById("button_1");
button_1.onclick = printa;

var button_2 = document.getElementById("button_2");
button_2.onclick = function () {
     println(Date());
};

function myFunction() {
  a = a + 1;
  console.log(a);

  if (a % 2 == 1) {
    document.getElementById("demo").innerHTML = "I'm back";
  } else {
    document.getElementById("demo").innerHTML = "gogogo";
  }
}

function print(a) {
  demo.innerHTML += a;
}

function println(a) {
  demo.innerHTML += a;
  demo.innerHTML += "<br/>";
}

function printa() {
  a++;
  println(a);
}
