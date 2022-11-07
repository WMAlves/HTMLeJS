window.onload = () =>{

    bt.onclick = function ola(){

        //janelas modal
        let nome= prompt('Qual o seu nome?', 'José Silva');
        alert(`Olá ${nome}`);
        //janela modal de confirmação
        let confirma= confirm(`Confirma a operação ${nome} ?`);
        if(confirma)
        alert('Operação Confirmada');
        else alert('Operação Cancelada');
    }
}