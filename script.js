document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".image");
  const parent = document.getElementById("parent");
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
    });

    image.addEventListener("drop", (e) => {
      e.preventDefault();

      if (draggedElement && draggedElement !== e.target) {
        const draggedIndex = Array.from(parent.children).indexOf(draggedElement);
        const targetIndex = Array.from(parent.children).indexOf(e.target);

   
        if (draggedIndex < targetIndex) {
          parent.insertBefore(e.target, draggedElement);
          parent.insertBefore(draggedElement, e.target.nextSibling);
        } else {
          parent.insertBefore(draggedElement, e.target);
        }
      }
    });
  });
});
