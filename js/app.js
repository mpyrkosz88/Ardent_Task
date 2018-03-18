$(function(){

const ul = $('ul');
let min = 1
let max = 10000;
let liczba = Math.floor(Math.random() * 10000);

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
  if(liczba == randomNumber) {
    return liczba
  }
  else if (liczba < randomNumber) {
    min = liczba;
    liczba =  Math.floor((min + max)/2)
    return checkfunction(liczba)
  }
  else if ( liczba > randomNumber ){
    max = liczba
    liczba = Math.floor((min + max)/2)
    return checkfunction(liczba)
  }
}

checkfunction(liczba);

});


// rekurencje
// http i https
// http 1.1 2.0
// post get patch put
// animacje css dlaczego są lepsze niż js
// wzorce projektowe js
// jak dziala interpreter js
// mdn
