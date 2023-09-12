const btn = document.querySelector("#envia");
const arrayResult = []

btn.addEventListener("click", (e)=>{
    e.preventDefault();

    const altura = document.querySelector("#altura");
    const peso = document.querySelector("#peso");
    const nome = document.querySelector("#nome");
    const idade = document.querySelector("#idade");
    const escola = document.querySelector("#escola");

    const alturaValue = altura.value;
    const pesoValue = peso.value;
    const nomeValue = nome.value;
    const idadeValue = idade.value;
    const escolaValue = escola.value;

    const imc = pesoValue / (alturaValue * alturaValue);

    arrayResult.push(nomeValue, idadeValue, escolaValue, alturaValue, pesoValue, imc.toFixed(3));

    let form = document.querySelector("#form");
    let parCreat = document.createElement('p');
    let parCreat2 = document.createElement('p');
    let parCreat3 = document.createElement('p');
    let parCreat4 = document.createElement('p');
    let parCreat5 = document.createElement('p');
    let parCreat6 = document.createElement('p');


form.appendChild(parCreat);
form.appendChild(parCreat2);
form.appendChild(parCreat3);
form.appendChild(parCreat4);
form.appendChild(parCreat5);
form.appendChild(parCreat6);

parCreat.innerHTML = `Nome ${arrayResult[0]}`;
parCreat2.innerHTML = `Idade: ${arrayResult[1]} anos`;
parCreat3.innerHTML = `Escola: ${arrayResult[2]}`;
parCreat4.innerHTML =`Altura: ${arrayResult[3]}m`;
parCreat5.innerHTML = `Peso: ${arrayResult[4]}kg`;
parCreat6.innerHTML = `IMC: ${arrayResult[5]} kg/m2`;

altura.value = " ";
peso.value = " ";
nome.value = " ";
idade.value = " ";
escola.value = " ";




});






