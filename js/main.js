// Bitácora — JavaScript mínimo.
// 1) Filtros del índice (solo en la portada).
// 2) Resaltar la nota al margen cuando el cursor o el foco pasa por su referencia.
// Si este archivo no carga, la web sigue funcionando: el índice se ve completo
// y las notas se leen igual.

// 1. Filtros del índice ----------------------------------------------------
const filterButtons = document.querySelectorAll("[data-filter]");
const rows = document.querySelectorAll(".log tbody tr");
const emptyMessage = document.querySelector(".empty");

function applyFilter(filter) {
  let visible = 0;

  rows.forEach((row) => {
    // Cada fila lista sus categorías en data-tags, separadas por espacios.
    const tags = row.dataset.tags.split(" ");
    const show = filter === "all" || tags.includes(filter);
    row.hidden = !show;
    if (show) visible++;
  });

  filterButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.filter === filter));
  });

  if (emptyMessage) emptyMessage.hidden = visible > 0;
}

// Poner el número de entradas junto a cada filtro, calculado desde la tabla,
// para que nunca haya una cifra escrita a mano que se quede desactualizada.
filterButtons.forEach((button) => {
  const filter = button.dataset.filter;
  const total =
    filter === "all"
      ? rows.length
      : [...rows].filter((row) => row.dataset.tags.split(" ").includes(filter)).length;

  const count = button.querySelector(".count");
  if (count) count.textContent = total;

  button.addEventListener("click", () => applyFilter(filter));
});

// 2. Notas al margen --------------------------------------------------------
document.querySelectorAll(".ref").forEach((ref) => {
  const note = document.getElementById(ref.getAttribute("href").slice(1));
  if (!note) return;

  const on = () => note.classList.add("is-active");
  const off = () => note.classList.remove("is-active");

  ref.addEventListener("mouseenter", on);
  ref.addEventListener("mouseleave", off);
  ref.addEventListener("focus", on);
  ref.addEventListener("blur", off);
});
