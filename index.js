getCrypto()

function getCrypto() {
  fetch("http://localhost:3000/Crypto")
  .then(res => res.json())
  .then(cryptoArray => {
    console.log(cryptoArray);
    cryptoArray.forEach(crypto => buildCrypto(crypto))})
  }


function buildCrypto(cryptos) {
  let ul = document.querySelector('#crypto');
  let Img = document.createElement('img'); 
  Img.src = cryptos.Image; 
  let li = document.createElement('li');
  li.innerText = cryptos.Name;
  Img.style.maxWidth = '150px';
  Img.style.maxHeight = '120px'
  ul.appendChild(li);
  ul.appendChild(Img);
  
}

function coinImg(){
let coinImg = document.getElementById('img');
coinImg.addEventListener("mouseover", function(e) {
  e.target.style.color = "grey";
  setTimeout(function() {
    e.target.style.color = "";
    }, 1000);
 false;
  })}
coinImg()