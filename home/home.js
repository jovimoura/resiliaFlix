//Guardiões da Galáxia Vol.2
/*const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=9c0c403e'
const xhr = new XMLHttpRequest();
xhr.open('GET',url);
xhr.addEventListener('load',()=>{
    const resposta = xhr.responseText;
    const conversao = JSON.parse(resposta);
    console.log(conversao);
    const imagem = conversao.Poster; //link do poster
    console.log(imagem);
    const divImagem = document.getElementById('imagem');
    const poster = document.createElement('img');
    poster.setAttribute('src',imagem);
    divImagem.append(poster);
    const plot = conversao.Plot; //resumo
    console.log(plot);
    const texto = document.getElementById('texto');
    texto.textContent = plot;
});
xhr.send();*/


import { buscaApi } from "../busca/busca";

// criar arrays com nomes de filmes e usar os arrays para os carrosseis