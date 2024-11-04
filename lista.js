document.querySelectorAll('.addCard').forEach(card => {
    card.addEventListener('click', () => {
        if (card.id === 'p4') {
            createNewCard(card);
        } else {
            createNewItem(card);
        }
    });
});

function createNewCard(referenceCard) {
    let newCard = document.createElement('div');
    newCard.classList.add('card', 'new-card');

    let titleInput = createInput('Digite o título da lista...', 'title-input');
    newCard.appendChild(titleInput);

    titleInput.addEventListener('blur', () => {
        replaceWithTitle(newCard, titleInput);
    });

    let addItem = document.createElement('p');
    addItem.textContent = '+ Adicionar Item';
    addItem.classList.add('addCard');
    newCard.appendChild(addItem);

    document.querySelector('.ToDoList').insertBefore(newCard, referenceCard.parentNode);
    titleInput.focus();

    addItem.addEventListener('click', () => createNewItem(addItem));
}

function createNewItem(referenceElement) {
    let newItemInput = createInput('Digite o novo item...', 'item-input');
    referenceElement.parentNode.insertBefore(newItemInput, referenceElement);

    newItemInput.addEventListener('blur', () => {
        if (newItemInput.value.trim()) {
            replaceWithParagraph(referenceElement, newItemInput);
        } else {
            newItemInput.remove();
        }
    });

    newItemInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') newItemInput.blur();
    });

    newItemInput.focus();
}

function createInput(placeholder, className) {
    let input = document.createElement('input');
    input.type = 'text';
    input.placeholder = placeholder;
    input.classList.add(className);
    return input;
}

function replaceWithTitle(parent, inputElement) {
    let title = document.createElement('h1');
    title.textContent = inputElement.value || 'Nova Lista';
    parent.replaceChild(title, inputElement);
}

function replaceWithParagraph(referenceElement, inputElement) {
    let newItem = document.createElement('p');
    newItem.textContent = inputElement.value;
    newItem.classList.add('novo-item');
    referenceElement.parentNode.replaceChild(newItem, inputElement);
}
