var userName=window.prompt("Please enter your name");
var greetingParagraph=document.getElementById("greeting");
greetingParagraph.innerHTML+=userName.toUpperCase();
var operand1=Number(window.prompt("Enter first number: "));//or u can use parseint()function toconvert string to number
var operand2=Number(window.prompt("Enter second operand:"));
document.getElementById("operand1").innerHTML+=" ="+operand1;
document.getElementById("operand2").innerHTML+=" ="+operand2;
var sum=operand1+operand2;
var sub=operand1-operand2;
var mul=operand1*operand2;
var div=operand1/operand2;
var mod=operand1%operand2;
document.getElementById("addition").innerHTML+="the sum of "+operand1 +" and "+operand2+" is "+ sum;
 var subtractionParagraph=document.getElementById("subtraction");
 subtractionParagraph.innerHTML+="the difference of "+operand1 +" and "+operand2+" is "+sub;
 var multiplicationParagraph=document.getElementById("multiplication");
  multiplicationParagraph.innerHTML+="the product of "+operand1 +" and "+operand2+" is "+mul;
document.getElementById("division").innerHTML+="the quotient of division of "+operand1 +" by "+operand2+" is "+div;
document.getElementById("modulus").innerHTML+="the remainder of division of  "+operand1 +" by "+operand2+" is "+mod;
 

