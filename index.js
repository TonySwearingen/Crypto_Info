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

  let img = document.createElement('img'); 
  img.src = cryptos.Image;
  img.style.maxWidth = '150px';
  img.style.maxHeight = '120px';

  let li = document.createElement('li');
  li.innerText = cryptos.Name;

  let li2 = document.createElement('li');
  li2.textContent = cryptos.Year;
 
  buildCryptoBtn()

  coinDiv.append(img, li, li2)

  //coinDiv.addEventListener('mouseover', )
  coinDiv.title = cryptos.Description
   
  ul.append(coinDiv)
  //ul.appendChild(li);
  //ul.appendChild(Img);
  //ul.appendChild(li2)
}

function buildCryptoBtn(element) {
//let p = document.createElement("p")
//p.textContent = `${element}`

let btn = document.createElement("button")
btn.addEventListener('click', handleLike)
btn.textContent = 'like'

//p.append(btn)
document.querySelector('#crypto').append(btn)

}

function handleLike(e) {
  console.log(e);
  //e.target.parentNode.Description
}




// function add() {
//   let element = document.createElement("input");
//   element.type = "button";
//   ul.appendChild(element)
// }
// function coinImg(){
// let coinImg = document.getElementById('img');
// coinImg.addEventListener("mouseover", function(e) {
//   e.target.style.color = "grey";
//   setTimeout(function() {
//     e.target.style.color = "";
//     }, 1000);
//  false;
//   })}
// coinImg()