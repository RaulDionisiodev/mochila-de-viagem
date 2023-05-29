const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const items = JSON.parse(localStorage.getItem("items")) || []

items.forEach(elemento => {
    criaElemento(elemento)
});

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements["nome"]
    const quantidade = evento.target.elements["quantidade"]

    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
   }

   items.push(itemAtual)

   localStorage.setItem("items", JSON.stringify(items))

    criaElemento(itemAtual)

    nome.value = ""
    quantidade.value = ""
})

function criaElemento(item) {

   const novoItem = document.createElement('li')
   novoItem.classList.add("item")

   const numeroIten = document.createElement('Strong')
   numeroIten.innerHTML = item.quantidade

   novoItem.appendChild(numeroIten)
   novoItem.innerHTML += item.nome   
   
   lista.appendChild(novoItem)
}