const ulElement = document.querySelector(".content ul.demo");
const liElementCollection = ulElement.querySelectorAll("li");

liElementCollection.forEach((liElement) => {
    liElement.addEventListener("click", (event) => {
        const liElement = event.currentTarget;


        /** CODAR AQUI */

        // Seleciona todos os <li> da lista
const listaItens = document.querySelectorAll('ul.demo li');

// Percorre cada item e adiciona o listener de clique
listaItens.forEach((item) => {
    item.addEventListener('click', (event) => {
    // Remove .selected de todos os itens
    listaItens.forEach((li) => li.classList.remove('selected'));

    // Garante que o <li> clicado é o correto, mesmo que clique em <span> ou <strong>
    const liClicado = event.currentTarget;

    // Adiciona .selected no item clicado
    liClicado.classList.add('selected');
    });
});

    });
});