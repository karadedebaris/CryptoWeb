document.querySelector("button").addEventListener("click",handleClick);

function handleClick(){

  var entry=document.querySelector("#entry");
  var a =entry.valueAsNumber;
  var stop=document.querySelector("#stop");
  var b =stop.valueAsNumber;
  var target=document.querySelector("#target");
  var c =target.valueAsNumber;
  var balance=document.querySelector("#balance");
  var d =balance.valueAsNumber;
  var leverage=document.querySelector("#leverage");
  var e =leverage.valueAsNumber;
  var manydollar=d*e;
  var manycoin=manydollar/a;
  var positivepnl=manycoin*c;
  var positivepnldollar=positivepnl-manydollar;
  var negativepnl=manycoin*b;
  var negativepnldollar=negativepnl-manydollar;

  document.getElementById("demo").innerHTML = "Target PNL is : " + positivepnldollar+"$";
  document.getElementById("demo2").innerHTML = "Stop PNL is : "+ negativepnldollar+"$";



}
