var apiKey = "d6dd773e";
var poster = document.getElementById('poster');
var sinopse = document.getElementById('sinopse');
let title = document.getElementById('title');
let year = document.getElementById('year');
let type = document.getElementById('type');
let time = document.getElementById('time');


// Pega Parametro

const urlParams = new URLSearchParams(window.location.search);
var myParam = urlParams.get('q');
myParam = myParam.replaceAll(" ", "+")
console.log(myParam)

var pedido = new XMLHttpRequest();

pedido.open(
  "GET",
  `https://www.omdbapi.com/?t=${myParam}&apikey=${apiKey}`
);

pedido.onload = () => {

  var pedidoJSON = JSON.parse(pedido.responseText);
  var arr = pedidoJSON;
  console.log(arr)
  console.log(poster)
  console.log(sinopse)
  poster.src = arr.Poster
  sinopse.textContent = arr.Plot
  title.textContent = arr.Title
  type.textContent = arr.Genre
  year.textContent = arr.Year;
  time.textContent = arr.Runtime

  
  
};

pedido.send();