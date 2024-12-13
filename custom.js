var cadForm = document.getElementById("formulario");

cadForm.addEventListener("submit",(e)=>{
    e.preventDefault();
  var nome_usuario = document.getElementById("nome_usuario").value;
  var idade_usuario = document.getElementById("idade_usuario").value;
  var  tel_usuario = document.getElementById("tel_usuario").value
  var  ocupacao_usuario = document.getElementById("ocupacao_usuario").value
  
  console.log(nome_usuario)
  console.log(idade_usuario)
  console.log(tel_usuario)
  console.log(ocupacao_usuario)
    
  let usuarios = new Array();
  
  if(localStorage.hasOwnProperty('usuarios')){
     usuarios = JSON.parse(localStorage.getItem('usuarios'));
  }
  usuarios.push({nome_usuario, idade_usuario,tel_usuario,ocupacao_usuario});
  localStorage.setItem('usuarios',JSON.stringify(usuarios));
});