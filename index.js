getCrypto()

function getCrypto() {
  fetch("http://localhost:3000/Crypto")
  .then(res => res.json())
  .then(cryptoArray => buildCrypto(cryptoArray))
}


//  const crypto = document.querySelector("#crypto")


function buildCrypto(cryptos) {
  let ul = document.querySelector('#crypto');
  let li =document.createElement('li');
  li.innerText = cryptos;
  ul.appendChild(li);
  
  


//  console.log("getCrypto")
//     // cryptoObj.message.forEach(cryptoMessage => {
//     //     const cryptoObj = document.createElement('img')
//     //     cryptoObj.src = cryptoMessage

// const cryptoObj2 = document.createDocumentFragment();
// for (let name of name) {
//   const li = document.createElement('li');
//   li.textContent = name;
//   cryptoObj2.appendChild(li);
// }
// const container = document.querySelector("#crypto");
// container.appendChild(cryptoObj);
} 


