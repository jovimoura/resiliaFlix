// funcao q pega a API
//nome = nome do filme, id = nome da id da imagem do carrossel

//Situação atual: o js ta funcionando, só o html q n esta alterando a img

function api(nome,id) {

    let poster = document.getElementById(id) 
    
    let pedido = nome;
    pedido.replaceAll(' ','+');//troca o espaço por + p pegar filme

    let xhr = new XMLHttpRequest();

    xhr.open('GET', `https://www.omdbapi.com/?apikey=d6dd773e&t=${pedido}}`);
    
    xhr.onload = ()=>{
        console.log('onload funciona') //funciona
        let resposta = xhr.responseText;
        let respostaJSON = JSON.parse(resposta);//esta retornando a API do filme q eu pedi
        console.log(respostaJSON)
        console.log(poster)
        poster.src = respostaJSON.Poster;
        //console.log(srcImg)
        //poster.setAttribute('src',`${srcImg}`);

        
    };
    xhr.send();

}





