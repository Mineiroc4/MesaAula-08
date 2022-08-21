/* Previna a página de ser recarregada quando houver o submit utilizando preventDefault().
Mostre um alerta na página quando a tela terminar de ser carregada.
 */
const registerbtn = document.querySelector('.register-btn')
registerbtn.addEventListener('click', (e) =>{
  e.preventDefault()
  alert('Usuário Cadastrado !')
})

// Alteração de cor para o campo de nome
let txtName = document.getElementById('name-input')
txtName.onmouseover = function(){
  txtName.style.color = 'green';
}
txtName.onmouseout = function(){
  txtName.style.color = 'black';
}
// Alteração de cor para o campo de sobrenome
let txtLastName = document.getElementById('lastName-input')
txtLastName.onmouseover = function(){
  txtLastName.style.color = 'green';
}
txtLastName.onmouseout = function(){
  txtLastName.style.color = 'black';
}
// Alteração de cor para o campo do email
let txtEmail = document.getElementById('email-input')
txtEmail.onmouseover = function(){
  txtEmail.style.color = 'green';
}
txtEmail.onmouseout = function(){
  txtEmail.style.color = 'black';
}
//Alteração de cor para o campo de endereço
let txtAdress = document.getElementById('adress-input')
txtAdress.onmouseover = function(){
  txtAdress.style.color = 'green';
}
txtAdress.onmouseout = function(){
  txtAdress.style.color = 'black';
}
// alteração de cor para o campo de telefone
let txtTelephone = document.getElementById('tel-input')
txtTelephone.onmouseover = function(){
  txtTelephone.style.color = 'green';
}
txtTelephone.onmouseout = function(){
  txtTelephone.style.color = 'black';
}
/*
Faça um trecho de código que utilize algum evento de teclado, esse evento irá escrever o conteúdo do input em uma tag <p> e logo abaixo o número de vezes que esse evento foi chamado. Exemplo: <p>futebol</p> <p>7</p> .
*/
document.addEventListener('keydown', (e) =>{
  if (e.key === "@"){
    console.log("Apertou a tecla @")
  }
})
document.addEventListener('keyup',(e) =>{
  if(e.key === "@"){
    console.log("Soltou a tecla @")
  }
})