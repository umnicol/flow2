document.querySelector("#contact_form").addEventListener("submit", (event)=>{
    event.preventDefault();
    console.log(event);

let noSpaces = document.getElementById("username").value.trim();

const date = new Date();
const todayDate = date.getDay(); 

if (todayDate=="0"){

 alert("Unfortunately, you cannot send this email on Sunday");
 return true
} 
else if (todayDate=="5") {

alert("Unfortunately, you cannot send this email on Friday");
return true
} 

else if (todayDate=="6") {
 alert("Unfortunately, you cannot send this email on Saturday");
 return true
} 

else if (noSpaces==''){
alert ("You cannot leave blank space")
return true
}

else 
 alert ("Email was succesfully sent")
 return false
}); 