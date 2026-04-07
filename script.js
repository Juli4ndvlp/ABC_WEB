const number = document.getElementById("number");
let cardsViewed = new Set();
const vocals = ["A", "E", "I", "O", "U"];
const dictAll = {
    "A": ["Avión", "assets/avion.avif"],
    "B": ["Barco", "assets/barco.avif"],
    "C": ["Casa", "assets/casa.avif"],
    "D": ["Dado", "assets/dado.avif"],
    "E": ["Elefante", "assets/elefante.avif"],
    "F": ["Flor", "assets/flor.avif"],
    "G": ["Gato", "assets/gato.avif"],
    "H": ["Helado", "assets/helado.avif"],
    "I": ["Isla", "assets/isla.avif"],
    "J": ["Jirafa", "assets/jirafa.avif"],
    "K": ["Koala", "assets/koala.avif"],
    "L": ["León", "assets/leon.avif"],
    "M": ["Mano", "assets/mano.jpg"],
    "N": ["Nube", "assets/nube.avif"],
    "O": ["Oso", "assets/oso.avif"],
    "P": ["Perro", "assets/perro.avif"],
    "Q": ["Queso", "assets/queso.avif"],
    "R": ["Ratón", "assets/raton.avif"],
    "S": ["Sol", "assets/sol.avif"],
    "T": ["Tren", "assets/tren.avif"],
    "U": ["Uva", "assets/uva.avif"],
    "V": ["Vaca", "assets/vaca.avif"],
    "W": ["Waffle", "assets/waffle.avif"],
    "X": ["Xilófono", "assets/xilofono.avif"],
    "Y": ["Yate", "assets/yate.avif"],
    "Z": ["Zebra", "assets/zebra.avif"]
};

function card(letter, palabra, imagen) {
    return `<div class="flashcard-container">
                    <div class="flashcard bg-success" id="card">
                        <div class="custom-blue text-white rounded-3 shadow-sm d-flex align-items-center justify-content-center" id="flashcard-front">
                            <span class="fs-2 fw-bold">${letter}</span>
                        </div>
                        <div class="bg-white border rounded-3 shadow-sm d-flex flex-column align-items-center justify-content-center" id="flashcard-back">
                            <img src="${imagen}" alt="${palabra}" class="img-fluid p-2">
                            <p class="small fw-bold mb-0 text-dark">${palabra}</p>
                        </div>
                    </div>
                </div>`;
}

const cardsContainer = document.getElementsByClassName("container-letters")[0];

function showAll(dict) {
    if (!dict) {
        dict = dictAll;
        cardsContainer.replaceChildren();
    }
    for (const letter in dict) {
    const [palabra, imagen] = dict[letter];
    const temp = document.createElement("div");
    temp.innerHTML = card(letter, palabra, imagen);

    const front = temp.querySelector('#flashcard-front');
    const back = temp.querySelector('#flashcard-back');
    const cardElement = temp.querySelector('#card');

    front.addEventListener('click', function() {
        cardElement.classList.add('flipped');
        if (!(letter in cardsViewed)) {
            cardsViewed.add(letter);
            number.innerHTML = cardsViewed.size
        }
    });

    back.addEventListener('click', function() {
        cardElement.classList.remove('flipped');
    });

    cardsContainer.appendChild(temp.firstElementChild);
}
}

showAll();


function showVocals() {
    cardsContainer.replaceChildren();
    const dictFiltered = Object.fromEntries(
        Object.entries(dictAll).filter(([key]) => vocals.includes(key))
    );
    showAll(dictFiltered);
}