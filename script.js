
let firstButton= document.querySelector(".firstbutton");
let secondbutton = document.querySelector(".secondbutton");
let firstinput= document.querySelector(".firstquestion");
let secondinput = document.querySelector(".secondquestion");
let Joker = document.querySelector(".Joker");
let RedHood = document.querySelector(".RedHood");
let Bane = document.querySelector(".Bane");
let Batman = document.querySelector(".Batman");

secondbutton.onclick = function() {

  
if(firstinput.value <5 && secondinput.value.toLowerCase() === "yes"){Joker.style.display="block";}

  else if(firstinput.value >=5 && secondinput.value.toLowerCase() === "yes"){RedHood.style.display="block";}

  else if(firstinput.value <5 && secondinput.value.toLowerCase() === "no"){Bane.style.display="block";}

   else if(firstinput.value >=5 && secondinput.value.toLowerCase() === "no"){Batman.style.display="block";}
 // willing to help but wont kill = batman
 // not willing to help but won't kill= bane
 // willing to help but will kill= redhood
  //not willing to help but will kill= joker//
  
};