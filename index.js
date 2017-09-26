var button = document.getElementById("coolButton")
var title = document.getElementById("simpsons_quote")
var name_pic = document.getElementById("name_picture")
var charButton = document.getElementById("characterButton")
var input = document.getElementById("input")
var guessed_wrong = document.getElementById('wrong')

var characterName = ""
var guess = []

function fetchQuotes(){
  fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=1")
    .then(res => res.json())
    .then(json => showQuote(json));
}

function showQuote(json){
  var result = json[0]
  var quote = result.quote
  var picture = result.image
  characterName = result.character
  title.innerHTML = quote
  document.querySelector('#simpson_picture').src = picture
  document.querySelector('#name').innerHTML = characterName
  name_pic.style.display = 'none'
  guessed_wrong.innerHTML = ""
  guess = []
  input.value = ""
}

// function displayData() {
//   if (guess.length === 2) {
//     name_pic.style.display = 'unset'
//   } else {
//     if (input.value.toLowerCase()=== characterName.toLowerCase()) {
//       name_pic.style.display = 'unset'
//       guessed_wrong.innerHTML = ""
//     } else {
//       name_pic.style.display = 'none'
//       guess.push(input.value.toLowerCase())
//       guessed_wrong.innerHTML = "WRONG!"
//     }
//   }
// }


function displayData() {
  if (guess.length === 2) {
    if (input.value.toLowerCase()=== characterName.toLowerCase()) {
      name_pic.style.display = 'unset'
    } else {
      name_pic.style.display = 'unset'
      guessed_wrong.innerHTML = "WRONG!"
      setTimeout(fadeOut, 4000)
      setTimeout(gone, 5000)
    }
  } else {
    if (input.value.toLowerCase()=== characterName.toLowerCase()) {
      name_pic.style.display = 'unset'
      guessed_wrong.innerHTML = ""
    } else if (input.value.split(" ")[0].toLowerCase()===characterName.split(" ")[0].toLowerCase()){
      name_pic.style.display = 'unset'
      guessed_wrong.innerHTML = ""
    } else {
      name_pic.style.display = 'none'
      guess.push(input.value.toLowerCase())
      guessed_wrong.innerHTML = "WRONG!"
    }
  }
}

function fadeOut(){
  name_pic.style.animationName = "disappear"
}

function gone(){
  name_pic.style.opacity = 0;
}


function reset_guess() {
  guessed_wrong.innerHTML = ""
}

title.addEventListener("load", fetchQuotes)
button.addEventListener("click", fetchQuotes)
charButton.addEventListener("click", displayData)
