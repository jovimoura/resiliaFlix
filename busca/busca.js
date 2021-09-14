//  Pega Elementos
var input = document.getElementById('pegaFilme')
var button = document.getElementById('enviar')
var descricao = document.getElementById('areaDeDescricao')

 

//console.log(descricao)
//console.log(button)
//console.log(input)


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
            
            var filme = new motorDeBusca(
                respostaJson.Title, 
                respostaJson.Poster
                )
            filme.excluiDadosDom(descricao)
            filme.inserirDadosDom(descricao)
            
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

        if(existeTitulo != undefined) {
            element.removeChild(existeTitulo)
        }
        if( existeImagem != undefined) {
            element.removeChild(existeImagem)
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



/*button.addEventListener('click' , () => {

    buscaApi(input.value)

})*/





                        //CARROSSEL DE FILMES

//array de filmes
let arrayTerror = ["Hereditary","Insidious","Us","Run","The Blair Witch Project"];
let arrayAcao = ["The Suicide Squad","Iron Man","Black Panther","Aquaman","Avengers: Infinity War","Man of Steel"];
let arrayRomance = ["Your Name","Pride and Prejudice","About Time","Her","One Day"];
let arrayDrama = ["Collateral Beauty","Whiplash","Moonlight","Knives Out","The Boy in the Striped Pyjamas"];
let arraySeries = ["Naruto","The Witcher","La casa de papel","Game of Thrones","Bridgerton"];

function carrossel(array,id){
    console.log('funcao funciona')
    let divPai = document.getElementById(id);
    console.log(divPai)

    for(let i = 0; i < array.length; i++){
        console.log('loop ligado')
        
        
        try {
            console.log('try ligado')
            let pedidO = new XMLHttpRequest();
            pedidO.open('GET',`https://www.omdbapi.com/?apikey=d6dd773e&t=${array[i]}`);
            pedidO.onload = ()=>{
                console.log('pedido funciona')
                let resposta = pedidO.responseText;
                let respostaJSON = JSON.parse(resposta);

                let poster = respostaJSON.Poster;

                let div = document.createElement('div');
                let img = document.createElement('img');
                let p = document.createElement('p');

                img.setAttribute('src',poster);
                p.textContent = respostaJSON.Plot;

                div.append(img);
                div.append(p);
                divPai.append(div);

            };
        }
        catch(err) {
            console.log(err)
        }
    }
}

carrossel(arrayAcao,'carrossel__acao');