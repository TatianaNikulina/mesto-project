//open edit popup

const editButton = document.querySelector(".button_type_edit");
const editPopup = document.querySelector(".popup_type_edit");

function openEditPopup() {
  editPopup.classList.add("popup_opened");
}
editButton.addEventListener("click", openEditPopup);

// open add popup
const addButton = document.querySelector(".button_type_add");
const addPopup = document.querySelector(".popup_type_add");

function openAddPopup() {
  addPopup.classList.add("popup_opened");
}
addButton.addEventListener("click", openAddPopup);

// close popups
const closeButton = document.querySelectorAll(".button_type_close");

function closePopup() {
  document.querySelectorAll(".popup").forEach((popup) => {
    popup.classList.remove("popup_opened");
  });
}
closeButton.forEach((btn) => {
  btn.addEventListener("click", closePopup);
});

// like - dislike

const likeButton = document.querySelectorAll(".button_type_like");
likeButton.forEach((btn) => {
  btn.addEventListener("click", function (evt) {
    evt.target.classList.toggle("button_active");
    console.log(evt.target);
  });
});
