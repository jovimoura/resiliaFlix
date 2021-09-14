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


//import { buscaApi } from "../busca/busca";

// criar arrays com nomes de filmes e usar os arrays para os carrosseis

//array de filmes
<<<<<<< HEAD
let arrayTerror = ["Hereditary","Insidious","Us","Run","The Blair Witch Project"];
let arrayAcao = ["The Suicide Squad","Iron Man","Black Panther","Aquaman","Avengers: Infinity War","Man of Steel"];
let arrayRomance = ["Your Name","Pride and Prejudice","About Time","Her","One Day"];
let arrayDrama = ["Collateral Beauty","Whiplash","Moonlight","Knives Out","The Boy in the Striped Pyjamas"];
let arraySeries = ["Naruto","The Witcher","La casa de papel","Game of Thrones","Bridgerton"];

function carrossel(array,id){
=======
let arrayTerror = ["Hereditary", "Insidious", "Us", "Run", "The Blair Witch Project"];
let arrayAcao = ["The Suicide Squad", "Iron Man", "Black Panther", "Aquaman", "Avengers: Infinity War", "Man of Steel"];
let arrayRomance = ["Your Name", "Pride and Prejudice", "About Time", "Her", "One Day"];
let arrayDrama = ["Collateral Beauty", "Whiplash", "Moonlight", "Knives Out", "The Boy in the Striped Pyjamas"];
let arraySeries = ["Naruto", "The Witcher", "La casa de papel", "Game of Thrones", "Bridgerton"];

function carrossel(array, id) {
>>>>>>> origin/lari_dev
    console.log('funcao funciona')
    let divPai = document.getElementById(id);
    console.log(divPai)

<<<<<<< HEAD
    for(let i = 0; i < array.length; i++){
=======
    for (let i = 0; i < array.length; i++) {
>>>>>>> origin/lari_dev
        console.log('loop ligado')
        console.log(array[i])
        let filme = array[i]
        filme = filme.replace(' ', '+')
<<<<<<< HEAD
        
        
        try {
            console.log('try ligado')
            let pedidO = new XMLHttpRequest();
            pedidO.open('GET',`https://www.omdbapi.com/?apikey=d6dd773e&t=${array[i]}`);
            console.log('linha 50')
            pedidO.onload = ()=>{
=======


        try {
            console.log('try ligado')
            let pedidO = new XMLHttpRequest();
            pedidO.open('GET', `https://www.omdbapi.com/?apikey=d6dd773e&t=${array[i]}`);
            console.log('linha 50')
            pedidO.onload = () => {
>>>>>>> origin/lari_dev
                console.log('pedido funciona');
                let resposta = pedidO.responseText;
                let respostaJSON = JSON.parse(resposta);

                let poster = respostaJSON.Poster;

                let div = document.createElement('div');
                let img = document.createElement('img');
                let p = document.createElement('p');

<<<<<<< HEAD
                img.setAttribute('src',poster);
=======
                img.setAttribute('src', poster);
>>>>>>> origin/lari_dev
                p.textContent = respostaJSON.Plot;

                div.append(img);
                div.append(p);
                divPai.append(div);

            };
        }
<<<<<<< HEAD
        catch(err) {
=======
        catch (err) {
>>>>>>> origin/lari_dev
            console.log(err)
        }
    }
}

<<<<<<< HEAD
carrossel(arrayAcao,'carrossel__acao');
=======
carrossel(arrayAcao, 'carrossel__acao');
>>>>>>> origin/lari_dev
