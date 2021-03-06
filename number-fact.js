//number facts
//select elements

let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');

let numberInput = document.querySelector('#numberInput');
//addeventlistener
numberInput.addEventListener('input', getFactFetch);

/*
//getfactajax function
function getFactAjax(){
 let number = numberInput.value;
 
 //ajax request
 let httpRequest = new XMLHttpRequest();
 //request to external api
 httpRequest.open('GET', 'http://numbersapi.com/'+number);

 httpRequest.onload = function(){
  if(this.status == 200 && number != ''){
    fact.style.display = 'block';
    factText.innerText = this.responseText;
  }
 }
 httpRequest.send();
} */

//FETCH API METHOD

function getFactFetch(){
  let number = numberInput.value;

  fetch('http://numbersapi.com/'+number)
  .then(response => response.text())
  .then(data => {
    if(number != ''){
      fact.style.display = 'block';
      factText.innerText = this.responseText;
    }
  })
  .catch(err => console.log(err));
}