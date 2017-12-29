(function(){

let q01 = document.getElementById("question01js");
let a01 = document.getElementById("answer01js");
let i01 = document.getElementById("index01js");
i01.innerHTML = "&#8853; "; // default is plus
q01.addEventListener("click", function(){
  makeChange(a01, i01);}, false);

let q02 = document.getElementById("question02js");
let a02 = document.getElementById("answer02js");
let i02 = document.getElementById("index02js");
i02.innerHTML = "&#8853; "; // default is plus
q02.addEventListener("click", function(){
  makeChange(a02, i02);}, false);

let q03 = document.getElementById("question03js");
let a03 = document.getElementById("answer03js");
let i03 = document.getElementById("index03js");
i03.innerHTML = "&#8853; "; // default is plus
q03.addEventListener("click", function(){
  makeChange(a03, i03);}, false);
  
  
  
let q04 = document.getElementById("question04js");
let a04 = document.getElementById("answer04js");
let i04 = document.getElementById("index04js");
i04.innerHTML = "&#8853; "; // default is plus
q04.addEventListener("click", function(){
  makeChange(a04, i04);}, false);  
  
  
  
  
  

let toggle = false; // default is hidden
function makeChange(answer, icon){
  if (toggle) {
    toggle = false;
    answer.classList.remove("show");
    icon.innerHTML = "&#8853; ";
  } 
  else {
    toggle = true;
    answer.classList.add("show");
    icon.innerHTML = "&#8854; ";
  }
};

})();
