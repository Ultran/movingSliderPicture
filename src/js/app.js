/* eslint-disable */

import "../scss/app.scss";

/* Your JS Code goes here */

document.addEventListener("DOMContentLoaded", () => {
  const imagesContainerEl = document.querySelector(".slider__images-container");

  console.log(imagesContainerEl);
  const image1El = document.querySelector(
    ".slider__image-container--first img"
  );
  const image2El = document.querySelector(
    ".slider__image-container--second img"
  );
  const image1Cont = document.querySelector(".slider__image-container--first");
  const image2Cont = document.querySelector(".slider__image-container--second");
  const handleEl = document.querySelector(".slider__handle");
  const dividerEl = document.querySelector(".slider__divider");
  let dragging = false;
  let imagesContainerElWidth;
  const imagesContainerLeftOffset = imagesContainerEl.offsetLeft;

  function getOffset(clientX) {
    const offset = clientX - imagesContainerLeftOffset;
    if (offset < 0) {
      return 0;
    } else if (offset > imagesContainerElWidth) {
      imagesContainerElWidth;
    } else {
      return offset;
    }
  }

  function move(clientX) {
    const offset = getOffset(clientX);
    const percent = (offset / imagesContainerElWidth) * 100;
    dividerEl.style.left = `${percent}%`;
    image2Cont.style.width = `${percent}%`;
  }

  function initEvents() {
    handleEl.addEventListener("mousedown", () => {
      dragging = true;
    });
    handleEl.addEventListener("mouseup", () => {
      dragging = false;
    });

    window.addEventListener("mousemove", (e) => {
      if (dragging) {
        move(e.clientX);
      }
    });
  }

  function adjustImageSize() {
    imagesContainerElWidth = imagesContainerEl.offsetWidth;

    image1El.style.width = imagesContainerElWidth + "px";
    image2El.style.width = imagesContainerElWidth + "px";
  }

  window.addEventListener("resize", adjustImageSize);

  adjustImageSize();
  initEvents();
});
