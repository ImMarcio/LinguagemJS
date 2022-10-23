async function importAPI(cep){
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    let response = await fetch(url)

    let responseFinal = await response.json()

    return responseFinal
    
}


const form = document.querySelector('form')
form.addEventListener('focusin',(event) => {
    event.target.style.background = '';
   
})

form.addEventListener('focusout',(event) => {
    event.target.style.background = '';

    let cep = document.querySelector('#CEP').value;
    importAPI(`${cep}`).then( (data) => {
        const link = data
        const cep1 = document.querySelector('#CEP').value = link.cep;
        function postData(){
        const logradouro = document.querySelector('#Rua').value = link.logradouro;
        const complemento = document.querySelector('#Complemento').value = link.complemento;
        const bairro = document.querySelector('#Bairro').value = link.bairro;
        const estado = document.querySelector('#Estado').value = link.uf;
        const cidade = document.querySelector('#Cidade').value = link.localidade;
        const numero = document.querySelector('#Numero').value = link.ddd;}
        postData();
        
    })
})
console.log(form)


importAPI(`${cep}`).then( (data) => {
    const link = data
    const cep1 = document.querySelector('#CEP').value = link.cep;
    function postData(){
    const logradouro = document.querySelector('#Rua').value = link.logradouro;
    const complemento = document.querySelector('#Complemento').value = link.complemento;
    const bairro = document.querySelector('#Bairro').value = link.bairro;
    const estado = document.querySelector('#Estado').value = link.uf;
    const cidade = document.querySelector('#Cidade').value = link.localidade;
    const numero = document.querySelector('#Numero').value = link.ddd;}
    postData();
   
})
