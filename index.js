var button = document.getElementById("coolButton")
var title = document.getElementById("simpsons_quote")
var name_pic = document.getElementById("name_picture")
var charButton = document.getElementById("characterButton")
var input = document.getElementById("input")
var guessed_wrong = document.getElementById('wrong')
var characterName = ""
var guess = []
var newQuote = document.getElementById('newQuote')

function fetchQuotes(){
  guess = []
  fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=1")
    .then(res => res.json())
    .then(json => showQuote(json));
}

function showQuote(json){
  newQuote.style.display = "none"
  var result = json[0]
  var quote = result.quote
  var picture = result.image
  characterName = result.character
  title.innerHTML = quote
  document.querySelector('#simpson_picture').src = picture
  document.querySelector('#name').innerHTML = characterName
  name_pic.style.display = 'none'
  guessed_wrong.innerHTML = ""
  guessed_wrong.style.color = "red"
  input.value = ""

}


function displayData() {
  if (guess.length === 2) {
    if (input.value.toLowerCase()=== characterName.toLowerCase()) {
      name_pic.style.display = 'unset'
      guessed_wrong.style.color = 'green'
      guessed_wrong.innerHTML = "RIGHT!"
      setTimeout(hitNewQuote, 2000)
    } else if (input.value.split(" ")[0].toLowerCase()===characterName.split(" ")[0].toLowerCase()){
      name_pic.style.display = 'unset'
      guessed_wrong.style.color = 'green'
      guessed_wrong.innerHTML = "RIGHT!"
      setTimeout(hitNewQuote, 2000)
    } else {
      name_pic.style.display = 'unset'
      guessed_wrong.innerHTML = "WRONG!"
      setTimeout(hitNewQuote, 2000)
    }
  } else {
    if (input.value.toLowerCase()=== characterName.toLowerCase()) {
      name_pic.style.display = 'unset'
      guessed_wrong.style.color = 'green'
      guessed_wrong.innerHTML = "RIGHT!"
      setTimeout(hitNewQuote, 2000)
    } else if (input.value.split(" ")[0].toLowerCase()===characterName.split(" ")[0].toLowerCase()){
      name_pic.style.display = 'unset'
      guessed_wrong.style.color = 'green'
      guessed_wrong.innerHTML = "RIGHT!"
      setTimeout(hitNewQuote, 2000)
    } else {
      name_pic.style.display = 'none'
      guess.push(1)
      guessed_wrong.innerHTML = "WRONG!"

    }
  }
  input.value = ""
}

function fadeOut(){

  name_pic.style.animationName = "disappear"
  name_pic.style.animationDuration = "4s"
}

function gone(){

  name_pic.style.opacity = 0;
}


function reset_guess() {
  guessed_wrong.innerHTML = ""
}

function hitNewQuote(){
  newQuote.style.display = "unset"
  newQuote.style.animationName = "spin"
}

title.addEventListener("load", fetchQuotes)
button.addEventListener("click", fetchQuotes)
charButton.addEventListener("click", displayData)
newQuote.addEventListener("click", fetchQuotes)
