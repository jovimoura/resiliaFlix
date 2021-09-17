var input = document.getElementById("sendMovie");

var apiKey = "d6dd773e";

console.log(input);


function pegaValue(Param) {
  var tituloExiste = document.getElementById("searched");

  if (tituloExiste != undefined) {
    Param.removeChild(tituloExiste);
  }

  var titulo = document.createElement("h2");
  titulo.id = "searched";
  titulo.textContent =
    input.value == "" ? "" : "Resultados Para: " + input.value;

  Param.appendChild(titulo);
}

function pegaFilmes(Param) {
  var pedido = new XMLHttpRequest();

  pedido.open(
    "GET",
    `https://www.omdbapi.com/?s=${input.value}&apikey=${apiKey}`
  );

  pedido.onload = () => {
    var pedidoJSON = JSON.parse(pedido.responseText);

    var arr = pedidoJSON.Search;
    console.log(arr)
    if (arr === undefined) {
      var content = document.getElementById("content");
      content.textContent = "";
      if(input.value !== "") {
        var erroH3 = document.createElement("h3");
        erroH3.id = "error";
        erroH3.textContent = "NENHUM RESULTADO ENCONTRADO";
        Param.appendChild(content);
        content.appendChild(erroH3);
      }
      else {
        var info = document.createElement('h3')
        info.id = 'error'
        info.textContent = "O QUE DESEJA PROCURAR?"
        Param.appendChild(content)
        content.appendChild(info)
      }
    } 
    else {
      arr.map((filme) => {
        var poster = filme.Poster;
        var titulo = filme.Title;
        let plot = filme.Plot;

        if (poster != "N/A") {
          var content = document.getElementById("content");
          if (content.textContent == "NENHUM RESULTADO ENCONTRADO") {
            content.textContent = "";
          }

          console.log(poster);
          console.log(titulo);

          Param.appendChild(content);

          var contentItem = document.createElement("section");
          contentItem.className = "contentItem";

          content.appendChild(contentItem);

          var img = document.createElement("img");
          img.src = poster;
          img.alt = titulo;
          //var h2 = document.createElement('h2')
          //h2.textContent = titulo
          //let p = document.createElement('p');
          //p.textContent = plot

          contentItem.appendChild(img);
          /*contentItem.appendChild(h2);
          contentItem.append(p);*/


          contentItem.addEventListener('click', () => {
            window.location.href = "../Informacoes/informacoes.html?q=" + titulo
          })


        }
      });
    }
  };

  pedido.send();
}

input.addEventListener("keyup", () => {
  var contentArea = document.getElementById("contentArea");

  // Exibindo Frase "Resultados Para"

  pegaValue(contentArea);
  pegaFilmes(contentArea);
});


console.log(document.getElementsByClassName('contentItem'))
