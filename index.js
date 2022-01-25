function getCrypto(){
  fetch("http://localhost:3000/Crypto")
  .then(res => res.json())
  .then(cryptoArray => buildCrypto(cryptoArray))
}
getCrypto()

  const crypto = document.querySelector("#crypto")   
function buildCrypto(cryptoArray){
  
  cryptoArray.forEach(cryptoObj => {
  const cryptoLi = document.createElement("li")
  cryptoLi.textContent = cryptoObj.crypto
  const cryptoImg = document.createElement("img")
  console.log(cryptoImg)
  cryptoImg.src = cryptoObj.image

  });
    
}