document.addEventListener("DOMContentLoaded", () => {
  const cardList = document.getElementById("card-list");
  const images = [
    "images/Rectangle1.png",
    "images/Rectangle2.png",
    "images/Rectangle3.png",
    "images/Rectangle4.png",
    "images/Rectangle5.png",
    "images/Rectangle6.png",
    "images/Rectangle7.png",
    "images/Rectangle8.png",
    "images/Rectangle1.png",
    "images/Rectangle2.png",
    "images/Rectangle3.png",
    "images/Rectangle4.png",
    "images/Rectangle5.png",
    "images/Rectangle6.png",
    "images/Rectangle7.png",
    "images/Rectangle8.png",
    "images/Rectangle6.png",
    "images/Rectangle7.png",
    "images/Rectangle8.png",
    "images/Rectangle1.png",
    "images/Rectangle2.png",
  ];

  for (let i = 0; i < 20; i++) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    const cardImage = document.createElement("img");
    cardImage.src = images[i];
    cardImage.classList.add("card-image");
    cardElement.appendChild(cardImage);
    const cardTitle = document.createElement("div");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = `Today             ${new Date().toLocaleDateString()} 
    `;
    cardElement.appendChild(cardTitle);

    const likes = Math.floor(Math.random() * 200);
    const comments = Math.floor(Math.random() * 100);

    const cardDetails = document.createElement("div");
    cardDetails.classList.add("card-details");
    cardDetails.innerHTML = `
   
    ${likes}
    <svg class="icon-message" width="16" height="16">
      <use href="./icons/symbol-defs.svg#icon-heart"></use>
    </svg>
    ${comments}
    <svg class="icon-message" width="16" height="16">
      <use href="./icons/symbol-defs.svg#icon-chat-bubble-dots"></use>
    </svg>
    <p>Image upload  ${new Date().toLocaleDateString()}</p>
  `;
    cardElement.appendChild(cardDetails);
    cardList.appendChild(cardElement);
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const iconGrid = document.querySelector(".icon-grid");
  const iconRow = document.querySelector(".icon-row");
  const cardList = document.querySelector("#card-list");

  iconGrid.addEventListener("click", function () {
    cardList.classList.remove("list-row");
    cardList.classList.add("list-grid");
    iconGrid.classList.add("selected");
    iconRow.classList.remove("selected");
  });

  iconRow.addEventListener("click", function () {
    cardList.classList.remove("list-grid");
    cardList.classList.add("list-row");
    iconRow.classList.add("selected");
    iconGrid.classList.remove("selected");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const plusIcons = document.querySelectorAll(".about-svg.icon");
  const datepickerInputs = document.querySelectorAll(".datepicker input");

  plusIcons.forEach((icon, index) => {
    icon.addEventListener("click", function () {
      datepickerInputs[index].value = "";
    });
  });
});
