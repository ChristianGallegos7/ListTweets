//VARIABLES
const listaTweets = document.getElementById("lista-tweets");

//EVENTS LISTENERS

eventListeners();

function eventListeners() {
  document
    .querySelector("#formulario")
    .addEventListener("submit", agregarTweet);
  //Borrar tweets

  listaTweets.addEventListener("click", borrarTweet);
}
// FUNCIONES

function agregarTweet(e) {
  e.preventDefault();
  const tweet = document.getElementById("tweet").value;
  const li = document.createElement("li");
  li.innerText = tweet;
  const botonBorrar = document.createElement("a");
  botonBorrar.innerText = "X";
  botonBorrar.className = "borrar-tweet";
  li.appendChild(botonBorrar);
  listaTweets.appendChild(li);
}

function borrarTweet(e) {
    e.preventDefault();
  if (e.target.className === "borrar-tweet") {

    e.target.parentElement.remove();
  }
}
