document.addEventListener('DOMContentLoaded', () => {
  console.log('hello world');

  let modP = document.querySelector('#modP');
  let upper = document.querySelector('#Upper');
  let lower = document.querySelector('#Lower');
  let length = document.querySelector('#Length');
  let reverse = document.querySelector('#Reverse');
  let val = document.querySelector('#str');

  upper.addEventListener('click', (event) => {
    fetch('/upper' + '/' + val.value)
    .then((response) =>{
        return response.json();
    })
    .then((obj) =>{ 
        modP.innerText = obj.upper
    });
  });
  lower.addEventListener('click', (event) => {
    fetch('/lower' + '/' + val.value)
    .then((response) =>{
        return response.json();
    })
    .then((obj) =>{
      modP.innerText = obj.lower
  });
  });
  length.addEventListener('click', (event) => {
    fetch('/length' + '/' + val.value)
    .then((response) =>{
        return response.json();
    })
    .then((obj) =>{
      modP.innerText = obj.length
  });
  });
  reverse.addEventListener('click', (event) => {
    fetch('/reverse' + '/' + val.value)
    .then((response) =>{
        return response.json();
    })
    .then((obj) =>{
      modP.innerText = obj.reverse
  });
  });

});
