const modal = document.getElementById("modal");
export const closeModalButton = document.getElementById("close-modal-button");
export function showModal() {
  if (modal.classList.contains("hidden")) modal.classList.remove("hidden");
}

export function closeModal() {
  if (!modal.classList.contains("hidden")) modal.classList.add("hidden");
}

document.body.addEventListener("keydown", (e) => {
  if (!modal.classList.contains("hidden") && e.key == "Escape") closeModal();
});

closeModalButton.addEventListener("click", (e) => {
  closeModal();
});
