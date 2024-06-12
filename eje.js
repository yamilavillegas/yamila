function res(){

var a1=document.getElementById('a1').value;
var b1=document.getElementById('b1').value;
var c1=document.getElementById('c1').value;
var a2=document.getElementById('a2').value;
var b2=document.getElementById('b2').value;
var c2=document.getElementById('c2').value;

a1=parseFloat(a1);
b1=parseFloat(b1);
c1=parseFloat(c1);
a2=parseFloat(a2);
b2=parseFloat(b2);
c2=parseFloat(c2);


var det=((a1*b2)-(a2*b1));
var detx=((c1*b2)-(c2*b1));
var dety=((a1*c2)-(a2*c1));

var x=(detx/det);
var y=(dety/det);
document.getElementById("x").value=x;
document.getElementById("y").value=y;

}