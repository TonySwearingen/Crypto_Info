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
  let iSpan = document.getElementsByTagName('span')

  img.src = cryptos.Image;
  img.style.maxWidth = '150px';
  img.style.maxHeight = '120px';

  let li = document.createElement('li');
  li.innerText = cryptos.Name;

  let li2 = document.createElement('li');
  li2.textContent = cryptos.Year;

  for (let i = 0; i < iSpan.length; i++)
  iSpan[i].id = 'span-' + iSpan[i].id;
 
  
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
  let iSpan = document.querySelector('#span-span-')
  let number = parseInt(iSpan.textContent)
  let newNum = number + 1
  iSpan.textContent = newNum
  console.log(newNum)
}




