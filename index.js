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
  let img = document.createElement('img');

  img.src = cryptos.Image;
  img.style.maxWidth = '150px';
  img.style.maxHeight = '120px';

  let li = document.createElement('li');
  li.innerText = cryptos.Name;

  let li2 = document.createElement('li');
  li2.textContent = cryptos.Year;

  console.log(span)
 
  buildCryptoBtn()

  coinDiv.append(img, li, li2, span)

  
  coinDiv.title = cryptos.Description
   
  ul.append(coinDiv)
  
}

function buildCryptoBtn(element) {


let btn = document.createElement("button")
btn.addEventListener('click', handleLike)
btn.textContent = 'like'


document.querySelector('#crypto').append(btn)

}

function handleLike() {
  
}




