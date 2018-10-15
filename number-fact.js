//number facts
//select elements

let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');

let numberInput = document.querySelector('#numberInput');
//addeventlistener
numberInput.addEventListener('input', getFactAjax);
//getfactajax function
function getFactAjax(){
  console.log('factajax');
}