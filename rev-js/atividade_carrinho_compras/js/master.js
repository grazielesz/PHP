//elementos
const input01 = document.getElementById("prod01")
const input02 = document.getElementById("prod02")
const valorTotal = document.querySelector("#valor-total")
const checkbox01 = document.getElementById("check01")
const checkbox02 = document.getElementById("check02")
const lixo01 = document.getElementById("lixeira01")
const lixo02 = document.getElementById("lixeira02")
//addListeners
input01.addEventListener("change", calculaPrecoTotal)
input02.addEventListener("change", calculaPrecoTotal)
checkbox01.addEventListener("change", calculaPrecoTotal)
checkbox02.addEventListener("change", calculaPrecoTotal)
lixo01.addEventListener("click", ()=>{apagaItem(1)})
lixo02.addEventListener("click", ()=>{apagaItem(2)})

function teste(){
    alert("Teste");
  }
  
  // transforma string para float
  function textToFloat(text){
    var valor = text.replace("R$ ", "").replace(",",".");
    return parseFloat(valor);
  }
  
  function calculaPrecoTotal(){
    precoTotal = ((textToFloat(input01.value)) + (textToFloat(input02.value))) * 194.24
    var somar01 = checkbox01.checked ? 5 : 0
    var somar02 = checkbox02.checked ? 5 : 0
    precoTotal = precoTotal + somar01 + somar02
    escreveValorTotal()
  }
  
  function escreveValorTotal() {
    precoTotal = precoTotal.toFixed(2)
    valorTotal.innerText = precoTotal
  }
  
  function apagaItem(x){
    document.getElementById("some0" + x).style.display = "none"
    document.getElementById("prod0" + x).value = 0
    document.getElementById("check0" + x).checked = false
    calculaPrecoTotal()
}