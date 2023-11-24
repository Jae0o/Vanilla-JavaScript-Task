export default function ListFilterButton({ target, option, text, isDefault }) {
  const liElement = document.createElement("li");
  liElement.setAttribute("class", "footer__filter-li");
  target.appendChild(liElement);

  const inputElement = document.createElement("input");
  inputElement.setAttribute("id", option);
  inputElement.setAttribute("class", "footer__filter-input");
  inputElement.setAttribute("type", "radio");
  inputElement.setAttribute("name", "filterOption");
  inputElement.setAttribute("value", option);

  if (isDefault) {
    inputElement.setAttribute("checked", "true");
  }

  liElement.appendChild(inputElement);

  const labelElement = document.createElement("label");
  labelElement.setAttribute("class", "footer__filter-label");
  labelElement.setAttribute("for", option);
  labelElement.innerText = text;

  liElement.appendChild(labelElement);
}
