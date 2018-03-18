const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.listen(3000, () => {
  console.log('Serwer uruchomiony na porcie 3000');
});

app.use(express.static('./'));
app.use(bodyParser.json());

const randomNum = () => {
    return Math.floor(Math.random() * 10000);
}

const randomNumber = randomNum()
console.log(randomNumber);

app.post('/add', (req, res) => {
  const num = req.body.num;
  let text = ''

    if(num == randomNumber) {
      text = "Twoja liczba to: " + num + ". Zgadłeś wylosowaną liczbę"
    }
    else if (num < randomNumber) {
      text = "Twoja liczba to: " + num + ". Podana przez Ciebie liczba jest mniejsza od wylosowanej"
    }
    else {
      text = "Twoja liczba to: " + num + ". Podana przez Ciebie liczba jest większa od wylosowanej"
    }

  res.json({
    text, randomNumber
  });


})
