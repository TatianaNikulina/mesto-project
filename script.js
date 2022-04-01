const editButton = document.querySelector(".button_type_edit");
const editPopup = document.querySelector(".popup_type_edit");
const editPopupForm = editPopup.querySelector(".popup__form");

const addButton = document.querySelector(".button_type_add");
const addPopup = document.querySelector(".popup_type_add");
const addPopupForm = addPopup.querySelector(".popup__form");

const closeButton = document.querySelectorAll(".button_type_close");

const userName = document.querySelector(".user__name");
const userDescription = document.querySelector(".user__description");
const inputName = document.querySelector("#profile-name");
const inputDescription = document.querySelector("#profile-description");

const inputCardName = document.querySelector("#card-name");
const inputCardLink = document.querySelector("#card-link");

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

function editFormSubmitHandler(evt) {
  evt.preventDefault();
  userName.textContent = inputName.value;
  userDescription.textContent = inputDescription.value;
  closePopup();
}

editPopupForm.addEventListener("submit", editFormSubmitHandler);

// cards

function createCard(cardName, cardLink) {
  const cardTemplate = document.querySelector("#card-template").content;
  const card = cardTemplate.querySelector(".card").cloneNode(true); // клонируем содержимое тега template

  card.querySelector(".card__image").src = cardLink; // наполняем содержимым
  card.querySelector(".card__image").alt = cardName;
  card.querySelector(".card__header").textContent = cardName;

  // like - dislike
  const likeButton = card.querySelector(".button_type_like");
  likeButton.addEventListener("click", function (evt) {
    evt.target.classList.toggle("button_active");
    // console.log(evt.target);
  });

  //delete card
  const deleteButton = card.querySelector(".card__delete");
  deleteButton.addEventListener("click", function (evt) {
    evt.target.closest(".card").remove();
  });

  // open imagePopup
  const cardImage = card.querySelector(".card__image");
  const cardHeader = card.querySelector(".card__header");
  const imagePopup = document.querySelector(".popup_type_image");
  const image = document.querySelector(".popup__image");
  const imageCaption = document.querySelector(".popup__caption");

  cardImage.addEventListener("click", () => {
    openPopup(imagePopup);
    image.src = cardImage.src;
    image.alt = cardHeader.textContent;
    imageCaption.textContent = cardHeader.textContent;
  });

  return card;
}

const initialCards = [
  {
    name: "Тихий океан",
    link: "https://www.ap22.ru/netcat_files/userfiles/2019/06/okeany/tihiy_1.jpg",
  },
  {
    name: "Атлантический океан",
    link: "https://www.ap22.ru/netcat_files/userfiles/2019/06/okeany/atlanticheskiy.jpg",
  },
  {
    name: "Северный ледовитый океан",
    link: "https://www.ap22.ru/netcat_files/userfiles/2019/06/okeany/severnyy_ledovityy_1.jpg",
  },
  {
    name: "Индийский океан",
    link: "https://www.ap22.ru/netcat_files/userfiles/2019/06/okeany/indiyskiy.jpg",
  },
  {
    name: "Тихий океан",
    link: "https://www.ap22.ru/netcat_files/userfiles/2019/06/okeany/tihiy.jpg",
  },
  {
    name: "Индийский океан",
    link: "https://www.ap22.ru/netcat_files/userfiles/2019/06/okeany/indiyskiy_1.jpg",
  },
];

const cardsList = document.querySelector(".cards__list");

initialCards.reverse().forEach((card) => {
  cardsList.prepend(createCard(card.name, card.link));
});

// saving new information in addPopup and add new card

function addFormSubmitHandler(evt) {
  evt.preventDefault();
  cardsList.prepend(createCard(inputCardName.value, inputCardLink.value));
  inputCardName.value = "";
  inputCardLink.value = "";
  closePopup();
}

addPopupForm.addEventListener("submit", addFormSubmitHandler);
