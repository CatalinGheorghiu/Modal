const btn = document.querySelector(".show-modal");
const modal = document.querySelector(".customModal");
const modalContent = document.querySelector(".modal-content");
const closeModal = document.querySelector(".close-modal");

btn.addEventListener("click", showModal);
closeModal.addEventListener("click", hideModal);
window.addEventListener("click", hideOutsideModal);

//Show modal
function showModal() {
    modal.style.display = "initial";
}

//Hide modal
function hideModal() {
    modal.style.display = "none";
}

//Hide modal if click outside the modal window
function hideOutsideModal(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}
