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

        
        var filme = new motorDeBusca(respostaJson.Title, respostaJson.Poster)
        filme.excluiDadosDom(descricao)
        filme.inserirDadosDom(descricao)
        


        
}

pedido.send()


}
// clase que cria um objeto do filme

class motorDeBusca {

    constructor(nome, imagem) {
        this._imagemFilme = imagem;
        this._tituloFilme = nome;

        
    }

    inserirDadosDom(element) {


        var img = document.createElement('img')
        img.src = this._imagemFilme
        img.id = 'conteudoImagem'


        var title = document.createElement('h2')
        title.textContent = this._tituloFilme
        title.id = 'conteudoTitulo'

        element.appendChild(img)
        element.appendChild(title)


    }

    excluiDadosDom(element) {
        var existeImagem = document.getElementById('conteudoImagem')
        var existeTitulo = document.getElementById('conteudoTitulo')

        if(existeTitulo != undefined || existeImagem) {
            element.removeChild(existeTitulo)
            element.removeChild(existeImagem)
        }
    }

   
   


   

}



button.addEventListener('click' , () => {

    buscaApi(input.value)

})





