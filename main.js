window.onload = () => {
    let nome = document.getElementById('nome');
    //onchange verifica se há alguma coisa alterada.
    nome.onchange=()=>{
        console.log('change',nome.value);
    };
    nome.oninput=()=>{ //verificar alteração no campo
        console.log('input', nome.value.length);    
    };
    //nome.oninput=()=>{
        //let caracterInvalido ='!@$%¨&*()-=<>,.;[]{}';
        //let ultimoCaracter=nome.value.charArt(nome.value.length-1);
        //if(caracterInvalido.indexOf(ultimoCaracter)>=0)
        //nome.value=nome.value.substr(0,nome.value.length-1);
    //}
    let senha = document.getElementById('senha');
    senha.onchange=()=>{
        console.log(senha.value);
    }

};