const modal = document.querySelector("#modal");
const openModal = document.querySelector("#openModal");
const closeModal = document.querySelector("#closeModal");

if (modal) {
  openModal && openModal.addEventListener("click", () => modal.showModal());

  closeModal && closeModal.addEventListener("click", () => modal.close());
}
