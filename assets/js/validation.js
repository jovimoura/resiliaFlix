let senha = document.getElementById('senha');

function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('estado').value=("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('estado').value=(conteudo.uf);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}
 
function consultaCEP(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if(validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua').value="...";
            document.getElementById('bairro').value="...";
            document.getElementById('cidade').value="...";
            document.getElementById('estado').value="...";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
}

function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    
    if (email != ''){
        if (re.test(email) == false){
            alert("E-mail inválido");
        }
    }
}

function validateSenha(confirmSenha) {
    let senha = document.getElementById('senha');

    if(confirmSenha != senha.value){
        alert("A senha inserida é diferente da anterior");
    }    
}

function validateRG(rg){
    
    if(rg != ''){
        if(rg.length < 11){
            alert("Informe um RG válido");
        }
    }
}

function mostrarSenha(){
    let inputSenha = document.getElementById('senha');
    let littleEye = document.getElementById('little-eye');

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
        littleEye.setAttribute('class', 'fas fa-eye-slash')
    } 
    else {
        inputSenha.setAttribute('type', 'password')
        littleEye.setAttribute('class', 'fas fa-eye')        
    }
}

