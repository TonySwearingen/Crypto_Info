getCrypto()

function getCrypto() {
  fetch("http://localhost:3000/Crypto")
  .then(res => res.json())
  .then(cryptoArray => console.log(cryptoArray))
}


 const crypto = document.querySelector("#crypto")


function buildCrypto(cryptoArray) {
    cryptoObj.message.forEach(cryptoMessage => {
        const cryptoObj = document.createElement('img')
        cryptoObj.src = cryptoMessage
    
    })  
//   cryptoArray.forEach(cryptoObj => {

//   const cryptoLi = document.createElement("li")
//   cryptoLi.textContent = cryptoObj.crypto

// //   const cryptoImg = document.createElement("img")
// //   cryptoImg.src = cryptoObj.image
  

//   });
    
// }
}