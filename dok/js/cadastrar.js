$(document).ready(()=>{

//url que vai tratar os dados
var url = 'dok.php';

///cach para performance
var $nome =$('#nome');
var $email = $('#email');

//memorizar algum erro
var nome_erro= false;
var email_erro=false;
   
//DESCOMENTE ESSAS DUAS LINHAS PARA VALIDAR CLICAR NO CAMPO E SAIR
// $($nome).focusout(function(){validarnome();})
// $($email).focusout(function(){validaremail();})


// LOGICA DE VALIDAÇÃO

    $('#enviar').on('click',function(e){
       //reseta os valores
       nome_erro=false;
       email_erro=false;
 
       ///validar os dados antes de enviar
       validarnome();
       validaremail();
 
       ///se tiver tudo ok
       if(nome_erro ===false && email_erro===false){
    
        
        let nomes;
        let primeironome;
        /// EXTRAR SOMENTE PRIMEIRO NOME  E MOSTRAR EM UM ALERT MAS O NOME FOI EVIADO COMPLETO
         //Podemos gravar o nome em variavel e 
         // e o sobrenome contendo espaços em outra, e quebrar o sobre nome no backend
         nomes = $nome.val().split(' ');

         

        //empacota os dados e


        let data={
            nome:$nome.val(),
            email:$email.val()
         }

         
         $.post(url,data, function(data){
               alert(data);
         });

       
         ///registrado com sucesso primeironome
        alert('registro com sucesso '.nomes[0]);
        
          return true;
       }else{
        //    e.preventDefault();
          alert("Nome ou email incorreto");
          return false;
       }
    })



// VALIDAR NOME
function validarnome(){
    // let padrao = /^[a-zA-Z]*$/;
    let padrao=/^(?:((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-.\s])){1,}(['’,\-\.]){0,1}){2,}(([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-. ]))*(([ ]+){0,1}(((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-\.\s])){1,})(['’\-,\.]){0,1}){2,}((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-\.\s])){2,})?)*)$/;
    let nome = $($nome).val();
    if(nome !=='' && padrao.test(nome)){
       // alert('nome ok');
       nome_erro=false;
    }else{
       $($nome).css({'color':'red','border':'2px solid yellow'}).val('Você Precisa informar seu nome ❗');
       nome_erro=true;
    }
 }
// VALIDAR EMAIL
function validaremail(){
    let padrao = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})$/;
    let email = $($email).val();
    if(email !='' && padrao.test(email)){
       // alert('email ok :)');
       email_erro=false;
    }else{
       $($email).css('color','crimson').val('Informe seu email');
       email_erro=true;
    }
 }

// recebe entrada separada por espaços mas nao com numros


});




















/*

function checcarnome(nome) {
    alert(/^(?:((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-.\s])){1,}(['’,\-\.]){0,1}){2,}(([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-. ]))*(([ ]+){0,1}(((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-\.\s])){1,})(['’\-,\.]){0,1}){2,}((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-\.\s])){2,})?)*)$/.test(document.getElementById(nome).value) ? 'Congratulations! You entered a valid name.' : 'Sorry, You entered an invalid name. Please try again.');
};
*/