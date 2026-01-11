console.log("ALL Working");

let TGlogin = document.getElementById("TGlogin");
let TGsign = document.getElementById("TGsign");
let signContent = document.getElementById("signcontent");
let loginContent = document.getElementById("logincontent");


TGlogin.addEventListener('click',e=>{
    document.getElementById('signcontent').style.display = "none";
    document.getElementById('logincontent').style.display = "block";
    loginContent.querySelector('form').reset();
})

TGsign.addEventListener("click", e=>{
    document.getElementById('signcontent').style.display = "block";
    document.getElementById('logincontent').style.display = "none";
    signContent.querySelector('form').reset();
})
