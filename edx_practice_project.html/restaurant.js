var loginButton=document.getElementById("loginButton");
var name=document.getElementById("name");
var email=document.getElementById("email");

loginButton.addEventListener("click",function(){
    var naam=name.value;
    var emailAddress=email.value;
    if(naam=='' || emailAddress=='')
    {
      
        alert("invalid name and email");
          
    }
    else
    {
        anchor = document.createAttribute("ANCHOR");  // Get the <a> element with id="myAnchor"
        att = document.createAttribute("HREF");        // Create a "href" attribute
        att.value = "profile_page.html";            // Set the value of the href attribute
        anchor.setAttributeNode(att);  
        loginButton.appendChild(anchor);   
    }
});