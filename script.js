document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".image");

  let draggedElement = null;

  images.forEach((image) => {
    image.addEventListener("dragstart", (e) => {
      draggedElement = e.target;
      e.target.classList.add("selected");
    });

    image.addEventListener("dragend", (e) => {
      e.target.classList.remove("selected");
      draggedElement = null;
    });

    image.addEventListener("dragover", (e) => {
      e.preventDefault();
      e.target.classList.add("hovered");
    });

    image.addEventListener("dragleave", (e) => {
      e.target.classList.remove("hovered");
    });

    image.addEventListener("drop", (e) => {
      e.preventDefault();
      if (draggedElement && draggedElement !== e.target) {
        const draggedStyle = draggedElement.style.backgroundImage;
        draggedElement.style.backgroundImage = e.target.style.backgroundImage;
        e.target.style.backgroundImage = draggedStyle;
        e.target.classList.remove("hovered");
      }
    });
  });
});
