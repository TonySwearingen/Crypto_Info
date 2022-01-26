getCrypto()

function getCrypto() {
  fetch("http://localhost:3000/Crypto")
  .then(res => res.json())
  .then(cryptoArray => {
    console.log(cryptoArray);
    cryptoArray.forEach(crypto => buildCrypto(crypto))})
  }


function buildCrypto(cryptos) {
  let ul = document.querySelector('#crypto')

  let coinDiv = document.createElement('div')
  let span = document.createElement('span')
  let img = document.createElement('img')
  
  let btn = document.createElement("button")
  btn.addEventListener('click', handleLike)
  btn.textContent = 'like'

  img.src = cryptos.Image;
  img.style.maxWidth = '150px';
  img.style.maxHeight = '120px';

  let li = document.createElement('li');
  li.innerText = cryptos.Name;

  let li2 = document.createElement('li');
  li2.textContent = cryptos.Year;

  span.textContent = cryptos.Likes
  span.className = "like-span"

  // conditional (if statment) to check if cryptos.Likes
  // build some html button with heart "❤️" or a button that says "liked"
  // add click event to unfavorit 
  // else
  // cretate different hml button "❌"
  // add event to favorite crypto aka change the favorit key to true


  coinDiv.append(li, li2,img,btn, span)

  
  coinDiv.title = cryptos.Description
   
  ul.append(coinDiv)
  
}


function handleLike(e) {

  let iSpan = e.target.parentElement.querySelector('.like-span')
  let number = parseInt(iSpan.textContent)

  let newNum =  number + 1
  iSpan.textContent = newNum
  
}

const cryptoForm = document.querySelector('#newCrypto')
cryptoForm.addEventListener('submit', addCryptoToPage)

function addCryptoToPage(e) {
  e.preventDefault()

  let newCoin = {
    Name: e.target.name.value,
    Image: e.target.image.value,
    Description: e.target.description.value,
    Year: e.target.year.value,
    Likes: 0
  }
  buildCrypto(newCoin)
}
console.log(newCoin)

