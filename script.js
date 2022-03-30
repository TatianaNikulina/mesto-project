const editButton = document.querySelector(".button_type_edit");
const editPopup = document.querySelector(".popup_type_edit");
const editPopupForm = editPopup.querySelector(".popup__form");

const addButton = document.querySelector(".button_type_add");
const addPopup = document.querySelector(".popup_type_add");

const closeButton = document.querySelectorAll(".button_type_close");

const userName = document.querySelector(".user__name");
const userDescription = document.querySelector(".user__description");
const inputName = document.querySelector("#profile-name");
const inputDescription = document.querySelector("#profile-description");

// const cardImage = document.querySelectorAll(".card__image");
// const cardHeader = document.querySelectorAll(".card__header");
// const imagePopup = document.querySelector(".popup_type_image");
// // const captionPopup = document.querySelector(".popup__caption");
// const image = document.querySelector(".popup__image");
// const imageCaption = document.querySelector(".popup__caption");

function openPopup(popup) {
  popup.classList.add("popup_opened");
  if (popup === editPopup) {
    inputName.value = userName.textContent;
    inputDescription.value = userDescription.textContent;
  }
}

//open editPopup
editButton.addEventListener("click", () => {
  openPopup(editPopup);
});

// open addPopup
addButton.addEventListener("click", () => {
  openPopup(addPopup);
});

// // open imagePopup
// cardImage.forEach((img) => {
//   img.addEventListener("click", () => {
//     console.log(img);
//     console.log(img.src);
//     // openPopup(imagePopup);
//     // img.src = image.src;
//     // imageCaption.textContent = cardHeader.textContent;
//   });
// });

// close popups
function closePopup() {
  document.querySelectorAll(".popup").forEach((popup) => {
    popup.classList.remove("popup_opened");
  });
}
closeButton.forEach((btn) => {
  btn.addEventListener("click", closePopup);
});

// saving changed information in editPopup

function formSubmitHandler(evt) {
  evt.preventDefault();
  userName.textContent = inputName.value;
  userDescription.textContent = inputDescription.value;
  closePopup();
}

editPopupForm.addEventListener("submit", formSubmitHandler);

// like - dislike
const likeButton = document.querySelectorAll(".button_type_like");
likeButton.forEach((btn) => {
  btn.addEventListener("click", function (evt) {
    evt.target.classList.toggle("button_active");
    console.log(evt.target);
  });
});

//
