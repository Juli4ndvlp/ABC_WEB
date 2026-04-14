const abecedario = [// esto es un array
  { letra: "A", palabra: "Avión", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPTvzOvytoPwG3absZD_ssU5IUUxaMS1bptA&s" },
  { letra: "B", palabra: "Beso", img: "https://via.placeholder.com/80?text=B" },
  { letra: "C", palabra: "Casa", img: "https://via.placeholder.com/80?text=C" },
  { letra: "D", palabra: "Dedo", img: "https://via.placeholder.com/80?text=D" },
  { letra: "E", palabra: "Escalera", img: "https://via.placeholder.com/80?text=E" },
  { letra: "F", palabra: "Foca", img: "https://via.placeholder.com/80?text=F" },
  { letra: "G", palabra: "Gato", img: "https://via.placeholder.com/80?text=G" },
  { letra: "H", palabra: "Helado", img: "https://via.placeholder.com/80?text=H" },
  { letra: "I", palabra: "Iglú", img: "https://via.placeholder.com/80?text=I" },
  { letra: "J", palabra: "Jirafa", img: "https://via.placeholder.com/80?text=J" },
  { letra: "K", palabra: "Koala", img: "https://via.placeholder.com/80?text=K" },
  { letra: "L", palabra: "Luna", img: "https://via.placeholder.com/80?text=L" },
  { letra: "M", palabra: "Mariposa", img: "https://via.placeholder.com/80?text=M" },
  { letra: "N", palabra: "Nariz", img: "https://via.placeholder.com/80?text=N" },
  { letra: "Ñ", palabra: "Ñandú", img: "https://via.placeholder.com/80?text=N" },
  { letra: "O", palabra: "Ojo", img: "https://via.placeholder.com/80?text=O" },
  { letra: "P", palabra: "Pato", img: "https://via.placeholder.com/80?text=P" },
  { letra: "Q", palabra: "Queso", img: "https://via.placeholder.com/80?text=Q" },
  { letra: "R", palabra: "Ratón", img: "https://via.placeholder.com/80?text=R" },
  { letra: "S", palabra: "Sol", img: "https://via.placeholder.com/80?text=S" },
  { letra: "T", palabra: "Tigre", img: "https://via.placeholder.com/80?text=T" },
  { letra: "U", palabra: "Uva", img: "https://via.placeholder.com/80?text=U" },
  { letra: "V", palabra: "Vaca", img: "https://via.placeholder.com/80?text=V" },
  { letra: "W", palabra: "Wafle", img: "https://via.placeholder.com/80?text=W" },
  { letra: "X", palabra: "Xilófono", img: "https://via.placeholder.com/80?text=X" },
  { letra: "Y", palabra: "Yoyo", img: "https://via.placeholder.com/80?text=Y" },
  { letra: "Z", palabra: "Zapato", img: "https://via.placeholder.com/80?text=Z" },
];

const VOCALES = ["A", "E", "I", "O", "U"];
const letrasVistas = new Set();

//  Render
function crearCard({ letra, palabra, img }) {
  return `
    <div class="col-2 col-md-1 flashcard-container" data-letra="${letra}">
      <div class="flashcard">
        <div class="flashcard-front custom-blue text-white rounded-3 shadow-sm d-flex align-items-center justify-content-center">
          <span class="fs-2 fw-bold">${letra}</span>
        </div>
        <div class="flashcard-back bg-white border rounded-3 shadow-sm d-flex flex-column align-items-center justify-content-center">
          <img src="${img}" alt="${letra}" class="img-fluid p-2">
          <p class="small fw-bold mb-0 text-dark">${palabra}</p>
        </div>
      </div>
    </div>
  `;
}

function renderCards(filtro = "todas") {
  const container = document.getElementById("cards-container");

  const filtradas = abecedario.filter(({ letra }) => {
    if (filtro === "vocales") return VOCALES.includes(letra);
    if (filtro === "consonantes") return !VOCALES.includes(letra);
    return true;
  });

  container.innerHTML = filtradas.map(crearCard).join("");

  // Eventos de flip
  container.querySelectorAll(".flashcard-container").forEach(container => {
    container.addEventListener("click", function () {
      const flashcard = this.querySelector(".flashcard");
      flashcard.classList.toggle("is-flipped");

      const letra = this.dataset.letra;
      if (!letrasVistas.has(letra) && flashcard.classList.contains("is-flipped")) {
        letrasVistas.add(letra);
        document.getElementById("contador").textContent = letrasVistas.size;
      }
    });
  });
}

//  Filtros 
document.querySelectorAll("[data-filtro]").forEach(btn => {
  btn.addEventListener("click", function () {
    document.querySelectorAll("[data-filtro]").forEach(b => {
      b.classList.remove("active", "btn-primary");
      b.classList.add("btn-outline-primary");
    });
    this.classList.add("active", "btn-primary");
    this.classList.remove("btn-outline-primary");

    renderCards(this.dataset.filtro);
  });
});

// Iniciar
renderCards();