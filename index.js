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
  let span2 = document.createElement('span')
  let img = document.createElement('img')
  let footer = document.createElement('footer')
  
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

  let li3 =document.createElement('li')
  li3.textContent = cryptos.Footer;

  span.textContent = cryptos.Likes
  span.className = "like-span"
  span2.textContent = cryptos.Favorites
  span2.className = "fav-span"
  

  // conditional (if statement) to check if cryptos.Likes
  // build some html button with heart "❤️" or a button that says "liked"
  // add click event to unfavorite 
  // else
  // create different hml button "❌"
  // add event to favorite crypto aka change the favorite key to true


  coinDiv.append(li,li2,img,btn,span,footer)
  footer.append(li3)
  li3.append(span2)
  
  
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
//console.log(newCoin)

const EMPTY_HEART = "🖤"
const FULL_HEART = "💚"



function likeCallback(e) {
  const heart = e.target;
  mimicServerCall("bogusUrl")
    .then(function(){
      if ( heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART;
        heart.className = "activated-heart";
      } else {
        heart.innerText = EMPTY_HEART;
        heart.className = "";
      }
const articleHearts = e.target.parentElement.querySelector(".fav-span"); 
for (const glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}
    })
    .catch(function(error) {
      const modal = document.getElementById("modal");
      modal.className = "";
      modal.innerText = error;
      setTimeout(() =>  modal.className = "hidden", 3000);
    });
  }

