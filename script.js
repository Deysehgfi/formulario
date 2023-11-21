function validaFormulario(){
    const nome = document.getElementById('nome').value;
    const email = document.querySelector('#email').value;
    const senha = document.getElementById('senha').value;
    const emailRegex = /^[^\s@+@[^\s@]+\.s@]+$/
    if(!emailRegex.test(email)){
       alert("Por favor, insira um email com os seguintes caracter @ ")
    }
    //validação dos campos preenchidos
//  if(nome == '' || email == ''||  senha == '' ){
//     alert("Por favor, preencha os campos")
 
// }
// if(senha> 8){
//     alert("muitos caracter para a senha")
// }
}