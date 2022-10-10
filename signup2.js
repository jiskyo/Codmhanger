function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
var email=document.getElementById("email-address").value;
if(username=="admin"&& password=="user")
{
    alert("login sucessfully");
    returnfalse;

}
else
{
    alert("login failed");
}

 

}