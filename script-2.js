const petsModule = (function () {
  const _data = [
    {
      image: "https://pet-uploads.adoptapet.com/1/6/b/406528149.jpg",
      name: "Sam",
      type: "Golden Retriever/St. Bernard Mix",
      sound: "bark",
      soundText: "Bark - type b",
    },
    {
      image: "https://pet-uploads.adoptapet.com/0/f/3/462356648.jpg",
      name: "Mellie",
      type: "Domestic Shorthair",
      sound: "meow",
      soundText: "Meow - type m",
    },
    {
      image:
        "https://www.morningagclips.com/wp-content/uploads/2016/06/477334244_fb34fe6b5a_z-640x400.jpg",
      name: "Kuzu Kuzu",
      type: "Sheep",
      sound: "meee",
      soundText: "Meee",
    },
  ];
  const $tbodyEl = document.querySelector("tbody");
  const $buttons = document.querySelectorAll("button");
  const $picture = document.querySelector(".main-image");

  const getButtons = function () {
    return document.querySelectorAll("button");
  };

  const createPetElement = function (pet) {
    return (
      "<tr><td><img class='pet-image' src='" +
      pet.image +
      "' /></td><td>" +
      pet.name +
      "</td><td>" +
      pet.type +
      "</td><td><button data-sound='" +
      pet.sound +
      "'>" +
      pet.soundText +
      "</button></td></tr>"
    );
  };

  const addToTable = function (content) {
    $tbodyEl.innerHTML += content;
  };

  const putPetsInHtml = function () {
    for (let i = 0; i < _data.length; i++) {
      addToTable(createPetElement(_data[i]));
    }
  };

  const bindEvents = function () {
    const buttons = getButtons();
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function (event) {
        const soundId = this.dataset.sound;
        const soundElement = document.getElementById(soundId);
        if (soundElement) {
          soundElement.play();
        }
      });
    }
  };

  const handleRows = () => {
    let clickedRow = null;
    const rows = document.querySelectorAll("tr");

    for (let i = 1; i < rows.length; i++) {
      rows[i].onclick = (e) => {
        for (let j = 0; j < rows.length; j++) {
          rows[j].style.backgroundColor = "";
        }
        clickedRow = rows[i];
        clickedRow.style.backgroundColor = "rgba(255,255,255,1)";
        const rowImg = clickedRow.querySelector("img");
        $picture.src = rowImg.src;
      };
    }
  };

  const keyboardEvents = () => {
    document.addEventListener("keyup", (e) => {
      if (e.code === "KeyB") new Audio("bark.mp3").play();
      else if (e.code === "KeyM") new Audio("meow.mp3").play();
    });
  };

  const init = function () {
    putPetsInHtml();
    bindEvents();
    handleRows();
    keyboardEvents();
  };

  return {
    init: init,
  };
})();
