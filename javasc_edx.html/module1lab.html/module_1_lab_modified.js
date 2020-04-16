var userName=window.prompt("Please enter your name");
var greetingParagraph=document.getElementById("greeting");
greetingParagraph.innerHTML+=userName.toUpperCase();

var textnode=document.getElementById("textnode")
var text=document.createTextNode("ENTER TWO NUMBERS:::\n");
textnode.appendChild(text);



var operand1=document.getElementById("operand1");
var operand2=document.getElementById("operand2");

var op1=document.createElement("INPUT");
var op2=document.createElement("INPUT");

operand1.appendChild(op1);
operand2.appendChild(op2);

var value1=parseInt(op1.value);
var value2=parseInt(op2.value);


var butt=document.getElementById("button");
var button=document.createElement("BUTTON");
var text1=document.createTextNode("CALCULATE");
butt.appendChild(button);
button.appendChild(text1);

var sum,mul,div,sub,mod;

button.addEventListener("click",function(){
     sum=value1+value2;
     sub=value1-value2;
 mul=value1*value2;
 div=value1/value2;
 mod=value1%value2;
 document.getElementById("addition").innerHTML+="the sum of "+value1 +" and "+value2+" is "+ sum;
 var subtractionParagraph=document.getElementById("subtraction");
 subtractionParagraph.innerHTML+="the difference of "+value1 +" and "+value2+" is "+sub;
 var multiplicationParagraph=document.getElementById("multiplication");
  multiplicationParagraph.innerHTML+="the product of "+value1 +" and "+value2+" is "+mul;
document.getElementById("division").innerHTML+="the quotient of division of "+value1 +" by "+value2+" is "+div;
document.getElementById("modulus").innerHTML+="the remainder of division of  "+value1 +" by "+value2+" is "+mod;
 
op1.value="";
op2.value="";
})

