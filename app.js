console.log("this is a test log");
var btnTranslate = document.querySelector('#btn-translate');
btnTranslate.addEventListener("click", function(){
console.log("clicked!");
var inputTxt = document.querySelector("#input-txt").value;
var to = parseInt(inputTxt);
to = to + 7;
console.log(to);
if(typeof(inputTxt) == "string")
console.log(inputTxt);
var output = document.querySelector("#my-output");
output.innerText = inputTxt;
});  
var dntTranslate = document.querySelector(".dnt-translate");
dntTranslate.addEventListener("mouseover", function(){
console.log("class query is tested");
});
var translator = document.querySelector('#btn-translate[name="translator"]');
translator.addEventListener("click", function(){
console.log("attributes good!")
});
