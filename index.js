var button = document.getElementById("coolButton")
var title = document.getElementById("simpsons_quote")
var name_pic = document.getElementById("name_picture")
var name_pic2 = document.getElementById("name_picture2")

var charButton = document.getElementById("characterButton")
var input = document.getElementById("input")
var guessed_wrong = document.getElementById('wrong')
var characterName = ""
var guess = []
var newQuote = document.getElementById('newQuote')

function fetchQuotes(){
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
  document.querySelector('#at_third_try').src = picture
  document.querySelector('#name').innerHTML = characterName
  name_pic.style.display = 'none'
  name_pic2.style.display = 'none'
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
      guess = []

      setTimeout(hitNewQuote, 2000)
    } else if (input.value.split(" ")[0].toLowerCase()===characterName.split(" ")[0].toLowerCase()){
      name_pic.style.display = 'unset'
      guessed_wrong.style.color = 'green'
      guessed_wrong.innerHTML = "RIGHT!"
      setTimeout(hitNewQuote, 2000)
      guess = []

    } else {
      name_pic2.style.display = 'unset'
      guessed_wrong.innerHTML = "WRONG!"
      setTimeout(fadeOut, 4000)
      setTimeout(gone, 5000)
      setTimeout(hitNewQuote, 6000)
      inputRefresh()
      guess = []
    }
  } else {
    if (input.value.toLowerCase()=== characterName.toLowerCase()) {
      name_pic.style.display = 'unset'
      guessed_wrong.style.color = 'green'
      guessed_wrong.innerHTML = "RIGHT!"
      setTimeout(hitNewQuote, 2000)
      guess = []

    } else if (input.value.split(" ")[0].toLowerCase()===characterName.split(" ")[0].toLowerCase()){
      name_pic.style.display = 'unset'
      guessed_wrong.style.color = 'green'
      guessed_wrong.innerHTML = "RIGHT!"
      setTimeout(hitNewQuote, 2000)
      guess = []

    } else {
      name_pic.style.display = 'none'
      guess.push(1)
      guessed_wrong.innerHTML = "WRONG!"
      inputRefresh()

    }
  }
}

function fadeOut(){

  name_pic2.style.animationName = "disappear"
  name_pic2.style.animationDuration = "4s"
}

function gone(){

  name_pic2.style.opacity = 0;
}


function reset_guess() {
  guessed_wrong.innerHTML = ""
}

function hitNewQuote(){
  newQuote.style.display = "unset"
  newQuote.style.animationName = "spin"
}

function inputRefresh() {
  input.value = ""
}

title.addEventListener("load", fetchQuotes)
button.addEventListener("click", fetchQuotes)
charButton.addEventListener("click", displayData)
newQuote.addEventListener("click", fetchQuotes)
