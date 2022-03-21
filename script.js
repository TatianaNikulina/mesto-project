//open edit popup

let editButton = document.querySelector(".button_type_edit");
let editPopup = document.querySelector(".popup_type_edit");

function openEditPopup() {
  editPopup.classList.add("popup_opened");
}
editButton.addEventListener("click", openEditPopup);

// open add popup
let addButton = document.querySelector(".button_type_add");
let addPopup = document.querySelector(".popup_type_add");

function openAddPopup() {
  addPopup.classList.add("popup_opened");
}
addButton.addEventListener("click", openAddPopup);

// close popups
let closeButton = document.querySelectorAll(".button_type_close");

function closePopup() {
  document.querySelectorAll(".popup").forEach((popup) => {
    popup.classList.remove("popup_opened");
  });
}
closeButton.forEach((btn) => {
  btn.addEventListener("click", closePopup);
});
