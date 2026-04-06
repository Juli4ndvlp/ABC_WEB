let letrasVistas = new Set();

document.addEventListener('DOMContentLoaded', function() {
    const flashcards = document.querySelectorAll('.flashcard-container');
    
    flashcards.forEach((container, index) => {
        container.addEventListener('click', function() {
            const letter = this.querySelector('.flashcard-front span').textContent.trim();
            
            if (!letrasVistas.has(letter)) {
                letrasVistas.add(letter);
                actualizarContador();
            }
        });
    });
});

function actualizarContador() {
    const contador = document.getElementById('contador');
    contador.textContent = letrasVistas.size;
}
