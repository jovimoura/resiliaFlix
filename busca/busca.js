//  Pega Elementos
var input = document.getElementById('pegaFilme')
var button = document.getElementById('enviar')
var descricao = document.getElementById('areaDeDescricao')
var populares = document.getElementById('carrossel__populares')

console.log(window.location.href.split('/').includes('home.html'))   
console.log(populares)
 

console.log(descricao)
console.log(button)
console.log(input)


// Função que busca as informações do filme

function buscaApi(filme) {

var pedido = new XMLHttpRequest()
var filmeAlterado = filme
filmeAlterado = filmeAlterado.replace(' ', '+')
try {
    pedido.open('GET', `https://www.omdbapi.com/?apikey=d6dd773e&t=${filmeAlterado}`)
    pedido.onload = function() {
            var resposta = pedido.responseText
            var respostaJson = JSON.parse(resposta)

            if(respostaJson.Response != 'False') {

               if(window.location.href.split('/').includes('busca.html')) {
            
                var filme = new motorDeBusca(
                    respostaJson.Title, 
                    respostaJson.Poster
                    )
                filme.excluiDadosDom(descricao)
                filme.inserirDadosDom(descricao)
                
                }
                else if(window.location.href.split('/').includes('home.html')) {
                    var filme = new motorDeBusca(
                        respostaJson.Title, 
                        respostaJson.Poster
                        )
                    filme.inserirDadosDom(populares)
                }
            }
            else{

                var filme = new motorDeBusca(
                    respostaJson.Title, 
                    respostaJson.Poster
                    )
                filme.excluiDadosDom(descricao)    
                filme.filmeNãoEncontrado(descricao)


            }

            
    }

    pedido.send()
}
catch(err) {
    console.log(err)
}

}
// clase que cria um objeto do filme

class motorDeBusca {

    constructor(nome, imagem) {
        this._imagemFilme = imagem;
        this._tituloFilme = nome;

        
    }

    inserirDadosDom(element) {


        var img = document.createElement('img')
        img.src = this._imagemFilme === 'N/A' || this._imagemFilme === undefined ? 'notFound.jpg' : this._imagemFilme
        img.className = 'conteudoImagem'


        var title = document.createElement('h2')
        title.textContent = this._tituloFilme
        title.className = 'conteudoTitulo'

        var content = document.createElement('section')
        content.className = 'content'

        element.appendChild(content)

        content.appendChild(img)
        content.appendChild(title)


    }

    excluiDadosDom(element) {
      

        var content =  document.querySelector('.content')

        console.log(content)

        if(content != null) {

        element.removeChild(content)

        }

    }

    filmeNãoEncontrado(element) {

        var mensagem = document.createElement('h2')
        mensagem.id = 'conteudoTitulo'
        mensagem.textContent = 'FILME NÃO ENCONTRADO'

        // var img = document.createElement('img')
        // img.src = this._imagemFilme === 'N/A' || this._imagemFilme === undefined ? 'notFound.jpg' : this._imagemFilme
        // img.id = 'conteudoImagem'

        // element.appendChild(img)
        element.appendChild(mensagem)

    }

   
   


   

}


if(window.location.href.split('/').includes('busca.html')) {

    try{

    button.addEventListener('click' , () => {

        buscaApi(input.value)

    })

    } catch(err) {
        
    }

}

if(window.location.href.split('/').includes('home.html')) {

    try{

    buscaApi('ghost')
    buscaApi('cidade de deus')
    buscaApi('dilma')
    buscaApi('se eu fosse você')

    } catch(err) {

    }
}

