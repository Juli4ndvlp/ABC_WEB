const dict = {
  "A" :["Avión", "avion.avif"]
};

function card(letter, palabra, imagen) {
    return `<div class="col-1">
                <div class="flashcard-container">
                    <div class="flashcard bg-success">
                        <div class="flashcard-front custom-blue text-white rounded-3 shadow-sm d-flex align-items-center justify-content-center">
                            <span class="fs-2 fw-bold">${letter}</span>
                        </div>
                        <div class="flashcard-back bg-white border rounded-3 shadow-sm d-flex flex-column align-items-center justify-content-center">
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
    

    cardsContainer.appendChild(temp.firstElementChild);
}




function voltear(flashcard) {
 
  flashcard.classList.toggle('volteada');
  if (flashcard.classList.contains('volteada')) {
    let col = flashcard.closest('[data-tipo]');
    if (!col.dataset.vista) {
      col.dataset.vista = 'true';
      let contador = document.getElementById('contador');
      contador.textContent = parseInt(contador.textContent) + 1;
    }
  }
}

function filtrar(tipo) {
  let cols = document.querySelectorAll('[data-tipo]');
  cols.forEach(function(col) {
    if (tipo === 'todas') {
      col.style.display = 'block';
    } else if (tipo === 'vocales') {
      if (col.dataset.tipo === 'vocal') {
        col.style.display = 'block';
      } else {
        col.style.display = 'none';
      }
    }
  });
}

