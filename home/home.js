// funcao q pega a API

function api(nome) {
    
    let pedido = nome;
    pedido.replaceAll(' ','+');

    let xhr = new XMLHttpRequest();

    xhr.open('GET', `https://www.omdbapi.com/?apikey=d6dd773e&t=${pedido}}`);

    xhr.addEventListener('load',()=>{
        let resposta = xhr.responseText;
        let respostaJSON = JSON.parse(resposta);

        let srcImg = respostaJSON.Poster;
        
    });
    xhr.send();

}

