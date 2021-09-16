var input = document.getElementById('sendMovie')

var apiKey = 'd6dd773e'

console.log(input)



input.addEventListener('keyup', ()=> {

        // Exibindo Frase "Resultados Para"

        var contentArea = document.getElementById('contentArea')
        var titulo = document.createElement('h2')
        titulo.id = "searched"
        titulo.textContent = input.value == "" ? "" : "Resultados Para: " + input.value
        var tituloExiste = document.getElementById('searched')

        if( tituloExiste != undefined) {
            contentArea.removeChild(tituloExiste)
        }

        console.log(titulo)

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
                var erroH3 = document.createElement('h3')
                erroH3.id = 'error'
                erroH3.textContent = 'FILME NÃO ENCONTRADO'
                contentArea.appendChild(content)
                content.appendChild(erroH3)
            }
            else {

            arr.map((filme)=>{

                var content = document.getElementById('content') 
                if(content.textContent == "FILME NÃO ENCONTRADO")
                {
                    content.textContent = ''
                }

                var poster = filme.Poster
                var titulo = filme.Title
                console.log(poster)
                console.log(titulo)

                

                contentArea.appendChild(content)


                var contentItem = document.createElement('section')
                contentItem.className = 'contentItem'

                content.appendChild(contentItem)

                var img = document.createElement('img')
                img.src = poster == "N/A" ? "noPhoto.jpg" : poster
                img.alt = titulo
                // var h2 = document.createElement('h2')
                // h2.textContent = titulo

                contentItem.appendChild(img)
                // contentItem.appendChild(h2)








                
            })

        }

    }

            pedido.send()

            //manipulando

            



            

        


            

        


        
    
})

