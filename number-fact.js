//number facts
//select elements

let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');

let numberInput = document.querySelector('#numberInput');
//addeventlistener
numberInput.addEventListener('input', getFactAjax);
//getfactajax function
function getFactAjax(){
 let number = numberInput.value;
 
 //ajax request
 let httpRequest = new XMLHttpRequest();
 //request to external api
 httpRequest.open('GET', 'http://numbersapi.com/'+number);

 httpRequest.onload = function(){
  if(this.status == 200){
    console.log(this.responseText);
  }
 }
 httpRequest.send();
}