const dict = {
    "A": ["Avión", "avion.avif"]
};

function card(letter, palabra, imagen) {
    return `<div class="col-1">
                <div class="flashcard-container">
                    <div class="flashcard bg-success" id="card">
                        <div class="custom-blue text-white rounded-3 shadow-sm d-flex align-items-center justify-content-center" id="flashcard-front">
                            <span class="fs-2 fw-bold">${letter}</span>
                        </div>
                        <div class="bg-white border rounded-3 shadow-sm d-flex flex-column align-items-center justify-content-center" id="flashcard-back">
                            <img src="${imagen}" alt="${palabra}" class="img-fluid p-2">
                            <p class="small fw-bold mb-0 text-dark">${palabra}</p>
                        </div>
                    </div>
                </div>
            </div>`;
}

const cardsContainer = document.getElementsByClassName("container-letters")[0];

for (const letter in dict) {
    const [palabra, imagen] = dict[letter];
    const temp = document.createElement("div");
    temp.innerHTML = card(letter, palabra, imagen);

    const front = temp.querySelector('#flashcard-front');
    const back = temp.querySelector('#flashcard-back');
    const cardElement = temp.querySelector('#card');

    front.addEventListener('click', function() {
        cardElement.classList.add('flipped');
    });

    back.addEventListener('click', function() {
        cardElement.classList.remove('flipped');
    });

    cardsContainer.appendChild(temp.firstElementChild);
}