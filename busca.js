//  Pega Elementos
var input = document.getElementById('pegaFilme')
var button = document.getElementById('enviar')
var descricao = document.getElementById('areaDeDescricao')


console.log(descricao)
console.log(button)
console.log(input)

// Função que busca as informações do filme

function buscaApi(filme) {

var pedido = new XMLHttpRequest()
var filmeAlterado = filme
filmeAlterado = filmeAlterado.replace(' ', '+')
pedido.open('GET', `https://www.omdbapi.com/?apikey=d6dd773e&t=${filmeAlterado}`)
pedido.onload = function() {
        var resposta = pedido.responseText
        var respostaJson = JSON.parse(resposta)
        var filme = new Filme(respostaJson.Title, respostaJson.Poster)
        console.log(filme)
        


        
}

pedido.send()


}
// clase que cria um objeto do filme

class Filme {

    constructor(nome, imagem) {
        this._imagemFilme = imagem;
        this._tituloFilme = nome;

        
    }

   


}

buscaApi('Ghost')





