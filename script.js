const projectDialog = document.querySelector(".project-dialog");
const dialogTitle = document.querySelector("#project-dialog-title");
const dialogCategory = document.querySelector(".dialog-category");
const dialogDescription = document.querySelector("#project-dialog-description");
const projectButtons = document.querySelectorAll(".project-image[data-project-title]");
const closeButton = document.querySelector(".dialog-close");
let activeProjectButton;

projectButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeProjectButton = button;
    dialogTitle.textContent = button.dataset.projectTitle;
    dialogCategory.textContent = button.dataset.projectCategory;
    dialogDescription.textContent = button.dataset.projectDescription;
    projectDialog.showModal();
    closeButton.focus();
  });
});

closeButton.addEventListener("click", () => projectDialog.close());

projectDialog.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    event.preventDefault();
    projectDialog.close();
  }
});

projectDialog.addEventListener("click", (event) => {
  if (event.target === projectDialog) projectDialog.close();
});

projectDialog.addEventListener("close", () => {
  activeProjectButton?.focus({ preventScroll: true });
});