export default function ListTitle({ target, title }) {
  const divElement = document.createElement("div");
  divElement.setAttribute("class", "todoList__title");
  divElement.textContent = title;

  target.appendChild(divElement);
}
