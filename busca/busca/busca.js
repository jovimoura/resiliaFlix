var input = document.getElementById('sendMovie')

var apiKey = 'd6dd773e'

console.log(input)



input.addEventListener('keyup', ()=> {

    // Exibindo Frase "Resultados Para"

    var contentArea = document.getElementById('contentArea')
    var titulo = document.createElement('h2')
    titulo.id = "searched"
    titulo.textContent = input.value == "" ? "" : "Resultados Para:" + input.value
    var tituloExiste = document.getElementById('searched')

    if( tituloExiste != undefined) {
        contentArea.removeChild(tituloExiste)
    }

    contentArea.appendChild(titulo)

    //pegando

        var pedido = new XMLHttpRequest()

        pedido.open('GET', `https://www.omdbapi.com/?s=${input.value}&apikey=${apiKey}`)

        pedido.onload = () => {

        var pedidoJSON = JSON.parse(pedido.responseText)

        var arr = (pedidoJSON.Search)

        if(arr === undefined) {
            var content = document.getElementById('content') 
            content.textContent = ''
            var erroH2 = document.createElement('h2')
            erroH2.textContent = 'FILME NÃO ENCONTRADO'
            contentArea.appendChild(content)
            content.appendChild(erroH2)
        }
        else {

        arr.map((filme)=>{

            var poster = filme.Poster
            var titulo = filme.Title
            console.log(poster)
            console.log(titulo)


            var content = document.getElementById('content')
            

            contentArea.appendChild(content)


            var contentItem = document.createElement('section')
            contentItem.className = 'contentItem'

            content.appendChild(contentItem)

            var img = document.createElement('img')
            img.src = poster
            var h2 = document.createElement('h2')
            h2.textContent = titulo

            contentItem.appendChild(img)
            contentItem.appendChild(h2)








            
        })

        }

        }

        pedido.send()

        //manipulando

        


        

       


        

    


    
    
})

