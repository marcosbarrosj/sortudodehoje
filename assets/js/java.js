
let res = document.querySelector('p#resultado')
let ress = document.querySelector('section#resultadodois')


function sortearNumero() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);
    if (isNaN(min) || isNaN(max) || min >= max) {
        alert('Por favor, insira um intervalo válido.');
        return;
    }
    const resultado = Math.floor(Math.random() * (max - min + 1)) + min;
   
   

    document.getElementById('resultado').innerText = ` ${resultado}`;

    var dataAtual = new Date();
    var saida = document.getElementById('resultadodois')
    saida.innerHTML = ` <p>  ${dataAtual}  </p>`


   
}





  







    
    
    
       
    
    
    
    
       
    


function sortearPessoa() {
    const nomes = document.getElementById('nomes').value.split(',').map(nome => nome.trim()).filter(nome => nome);

    if (nomes.length === 0) {
        alert('Por favor, insira pelo menos um nome.');
        return;
    }
    const indiceSorteado = Math.floor(Math.random() * nomes.length);
    const pessoaSorteada = nomes[indiceSorteado];
    document.getElementById('resultadoPessoa').textContent = ` ${pessoaSorteada}`;

    var dataAtual = new Date();
    var saida = document.getElementById('resultadotres')
    saida.innerHTML = ` <p>  ${dataAtual}  </p>`

}





function zerar(){

    res.innerHTML = null
    ress.innerHTML = null



}
