$(function(){

const ul = $('ul');
let min = 1
let max = 10000;
let number = Math.floor(Math.random() * 10000);

const checkfunction = (num) => {
    $.ajax({
      url : '/add',
      data : JSON.stringify({
        num,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      type : 'POST',
      dataType : 'json',
    }).then(resp => {
      ul.append('<li>' + resp.text + '</li>');
      myFunc(resp.randomNumber)
    })
}

const myFunc = (randomNumber) => {
  if(number == randomNumber) {
    return number
  }
  else if (liczba < randomNumber) {
    min = number;
    number =  Math.floor((min + max)/2)
    return checkfunction(liczba)
  }
  else if ( number > randomNumber ){
    max = number
    number = Math.floor((min + max)/2)
    return checkfunction(number)
  }
}

checkfunction(number);

});


// rekurencje
// http i https
// http 1.1 2.0
// post get patch put
// animacje css dlaczego są lepsze niż js
// wzorce projektowe js
// jak dziala interpreter js
// mdn
