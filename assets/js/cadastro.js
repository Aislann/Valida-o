const cadastro = document.getElementById('cadastro')
const campos = document.querySelectorAll('.nomeCadastro')
const span = document.querySelectorAll('.span-required')
const emailregex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

// criar função de erro

function verErro(index){
    campos[index].style.border = '2px solid #e63636'
    span[index].style.display = 'block'
}

function verAcerto(index){
    campos[index].style.border = '2px solid green'
    span[index].style.display = ''
}

function validarNome(){
    if (campos[0].value.length < 5){
        verErro(0)
    }else{
        verAcerto(0)
    }
}

function validarSobrenome(){
    if (campos[1].value.length < 5){
        verErro(1)
    }else{
        verAcerto(1)
    }
}

function validarEmail(){
    if(emailregex.test(campos[2].value)){
        verAcerto(2)
    }else{
        verErro(2)
    }
}