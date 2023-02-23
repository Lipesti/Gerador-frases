async function getAdvice(){
    let resposta = await fetch("https://api.adviceslip.com/advice");

    console.log(resposta);

    const data = await resposta.json();

    // console.log(data);

    document.querySelector("#advice").innerHTML = data.slip.advice;

} 

// Botão funcionando 

let botaoAdvc = document.querySelector('#btn-gerar');
botaoAdvc.addEventListener('click', function(){
    getAdvice();

})
