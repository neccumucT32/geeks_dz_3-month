// DZ#3

const modal = document.querySelector(".modal");
const triggerButton = document.querySelector("#btn-get");
const closeButton = document.querySelector(".modal_close");
let isModalShownByScroll = false;

const openModal = () => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  modal.style.display = "none";
  document.body.style.overflow = "";
};

triggerButton.onclick = () => openModal();
closeButton.onclick = () => closeModal();
modal.onclick = (event) => {
  if (event.target === modal) {
    closeModal();
  }
};

const openModalOnScroll = () => {
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    if (!isModalShownByScroll) {
      openModal();
      isModalShownByScroll = true;
      window.removeEventListener("scroll", openModalOnScroll);
    }
  }
};

window.addEventListener("scroll", openModalOnScroll);

setTimeout(openModal, 10000);
