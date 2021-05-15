






$(document).ready(function () {

   let erro_nome = false;
   let erro_email = false;

   $('#nome').focusout(function () {
      validarNome();
   });

   $('#email').focusout(function () {
      validarEmail();
   });


   //verifca se tem algum erro se tiver nao envia

   console.log(
      $('#enviar').submit(function () {
         //reseta os valores
         erro_nome = false;
         erro_email = false;

         validarNome();
         validarEmail();

         ///se tiver tudo ok
         if (erro_nome === false && erro_email === false) {
            alert('registro com sucesso');

            return true;
         } else {
            alert("Preencha seu nome e email");
            return false;
         }
      }))





   // enviar
   $('#enviar').click(function (e) {
      e.preventDefault();
      let nome = $('#nome').val();
      let email = $('#email').val();
      // aqui vamos receber a resposta do servidor
      let data = {
         nome: nome,
         email: email
      }
      $.post('dok.php', data, function (data) {
         alert(data);
      });
   })




   //valida o primeiro nome
   function validarNome() {
      let padrao = /^[a-zA-Z]*$/;
      let nome = $('#nome').val();
      if (padrao.test(nome) && nome !== '') {
         // alert('nome ok');
         erro_nome = false;
      } else {
         $('#nome').css({ 'color': 'red', 'border': '2px solid yellow' }).val('Você Precisa informar seu nome ❗');
         erro_nome = true;
      }
   }

   function validarEmail() {
      let padrao = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})$/;
      let email = $('#email').val();
      if (padrao.test(email) && email != '') {
         // alert('email ok :)');
         erro_email = false;
      } else {
         $('#email').css('color', 'crimson').val('Informe seu email');
         erro_email = true;
      }
   }

});












// criar uma requisição no json


// let base = 'https://jsonplaceholder.typicode.com';

// $(function(){
//     //fazer o cach, assim so vamos buscar uma vez
//     let $pedidos = $('#pedidos');
//     $.ajax({

//         type:'GET',
//         contentType:'application/json',
//         url: base+"/posts",
//         success:function(data){
//             // console.log(data);
//             if(!data){
//             $.each(data, function(){
//             $pedidos.append(`<li> ${data.title} </li>`);
//            });
//             }else{
//                 console.log('dados nao encontrados');
//             }

//         }
//     });
// });


// var root = 'https://jsonplaceholder.typicode.com';
// $.ajax({
//  url: root+"/posts",
//  method: 'GET',
//  contentType: 'application/json',
//  success: function(posts) {
//     console.log("Data=>",posts);
//      $.each(posts,function(index,post){
//       document.write("<p>"+post.title+"</p>");
//     });
//  }
// });


