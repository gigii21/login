let area = document.getElementById('area');

function Entrar(){
    let nome = prompt("Digite seu nome:");
    let sobrenome = prompt("Digite seu sobrenome:");

    if(nome=== ''|| nome === null){
        alert('Ops, Algo deu errado!')
        area.innerHTML= "Clique no botão pra acessar"

    }else{
        area.innerHTML=("Bem Vindo" + " " + nome + " " + sobrenome + " ");
        let botaoSair = document.createElement("button");
        botaoSair.innerHTML = "Sair da conta";
        botaoSair.onclick = sair;
        area.appendChild(botaoSair);   
    }
}

function sair(){
    alert('Ate mais');
    area.innerHTML = "Voce saiu!             "
}