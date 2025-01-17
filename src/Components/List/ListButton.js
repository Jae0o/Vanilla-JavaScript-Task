import { IMAGE_SRC } from "../../Constants.js";

export default function ListButton({ target }) {
  const buttonElement = document.createElement("button");
  buttonElement.setAttribute("class", "todolist__deletebutton");
  target.appendChild(buttonElement);

  const buttonImgElement = document.createElement("img");
  buttonImgElement.setAttribute("src", IMAGE_SRC.DELETE);
  buttonImgElement.setAttribute("class", "todolist__deletebutton-img");
  buttonElement.appendChild(buttonImgElement);
}
