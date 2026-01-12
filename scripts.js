console.log("ALL Working");

let TGlogin = document.getElementById("TGlogin");
let TGsign = document.getElementById("TGsign");
let signContent = document.getElementById("signcontent");
let loginContent = document.getElementById("logincontent");

const active = "bg-purple-500";
const inactive = "bg-slate-300";


TGlogin.addEventListener('click',e=>{
    document.getElementById('signcontent').style.display = "none";
    document.getElementById('logincontent').style.display = "block";
    loginContent.querySelector('form').reset();
    TGlogin.classList.add(active);
    TGlogin.classList.remove(inactive);
    TGsign.classList.add(inactive);
    TGsign.classList.remove(active);
})

TGsign.addEventListener("click", e=>{
    document.getElementById('signcontent').style.display = "block";
    document.getElementById('logincontent').style.display = "none";
    signContent.querySelector('form').reset();
    TGsign.classList.add(active);
    TGsign.classList.remove(inactive);
    TGlogin.classList.add(inactive);
    TGlogin.classList.remove(active);
})
