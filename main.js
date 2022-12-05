window.onload = () => {




    //<<< MANIPULÇÃO DE CAMPO NOME E SENHA >>>
    let nome = document.getElementById('nome');
    //onchange verifica se há alguma coisa alterada.
    nome.onchange=()=>{
        console.log('change',nome.value);
    };
    nome.oninput=()=>{ //verificar alteração no campo
        console.log('input', nome.value.length);    
    };
    nome.oninput=()=>{
      let caracteresInvalido ='!@$%#¨&*()-=<>,.;[]{}';
      let ultimoCaracter=nome.value.charAt(nome.value.length-1);
      
      if(caracteresInvalido.indexOf(ultimoCaracter)>=0)
      nome.value=nome.value.substr(0,nome.value.length-1);
    }

    nome.onfocus=()=> {//quando o campo é "ativado", pode ser colocado alguns eventos
        let instrucoes = document.getElementById('instrucoes');
        instrucoes.innerHTML='Informe o nome do usuário';
        instrucoes.style.color='#999';
        nome.style.border='thin black solid';
        
    }
    nome.onblur=()=> { //quando o campo é "desativado", pode ser colocado alguns eventos
        
        if(nome.value.length==0){
            instrucoes.innerHTML='* Necessário informar usuário';
            instrucoes.style.color='#F00';
            nome.style.border ='thin red solid';
        }
        
    }

    let senha = document.getElementById('senha');
    senha.onchange=()=>{
        console.log(senha.value);
    } 

    let instrucoesSenha=document.getElementById('instrcoesSenha');
    senha.onfocus=()=>{
        
        instrucoesSenha.innerHTML='Informe a senha';
        instrucoesSenha.style.color='#999';
        senha.style.border='thin black solid';
    }

    senha.onblur=()=>{ //quando o campo é desativado utliza-se o onblur
        if(senha.value.length==0){
            instrucoesSenha.innerHTML='* Necessário informar a senha';
            instrucoesSenha.style.color='#F00';
            senha.style.border = 'thin red solid'
        }
        
        
    }




    let btn=document.getElementById('btn_submit');
     btn.disabled=false;
     
     let validaForm=()=>{
        if(nome.value.length==0 || senha.value.length==0)
        btn.disabled=true;
        else
        btn.disabled=false;
     };
     nome.onchange=validaForm;
     senha.onchange=validaForm;

     let fromLogin=document.getElementById('login'); //lembre-se de colocar entre aspas o id.
     fromLogin.onsubmit=(eventos)=>{
        console.log({Nome: nome.value, senha: senha.value});
        console.log(eventos);
        console.log(eventos.target);
        console.log(eventos.type);
        console.log(eventos.target.id);
        

        if(nome.value==0|| senha.value==0){
            alert("Os campos Nome e Senha devem ser preenchidos");
        }
        eventos.preventDefault();
        
     };
   
 


    
//<<<<<<<<<<<<<<<< AQUI COMEÇA OS CÓDIGOS DOS OUTROS ELEMENTOS DE FORMULÁRIO>>>>>>>>>>>>>>>>>>>>//
    let salada=document.getElementById('nsalada');
    let npao=document.getElementById('pao');
    let sobremesa=document.getElementById('sobremesa');
    let nenhum=document.getElementById('molho1');
    let mostardaeMel=document.getElementById('molho2');
    let queijos=document.getElementById('molho3');
    let chipolle=document.getElementById('molho4');

    npao.onchange=()=>console.log('Pão =',npao.checked);
    sobremesa.onchange=()=>console.log('Sobremesa =',sobremesa.checked);
    nenhum.onchange=()=> console.log('Nenhum',molho1.value);
    mostardaeMel.onchange=()=> console.log('Mostarda e Mel',molho2.value);
    queijos.onchange=()=> console.log('Queijos', molho3.value);
    chipolle.onchange=()=> console.log('Chipole', molho4.value);
    salada.onchange=()=>console.log('salada',salada.value);


};