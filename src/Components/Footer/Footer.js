import ListCounter from "./ListCounter.js";
import ListFilter from "./ListFilter.js";

export default function Footer({ target, state, onChange }) {
  const footerElement = document.createElement("footer");
  footerElement.setAttribute("class", "app__footer");
  target.appendChild(footerElement);

  this.state = state;

  this.setState = ({ newIsEditMode, newTotalCount }) => {
    const { isEditMode: prevEditMode, totalCount: prevTotalCount } = this.state;

    if (prevEditMode !== newIsEditMode) {
      this.state.isEditMode = newIsEditMode;
      listFilter.setState({ newIsEditMode });
    }

    if (prevTotalCount !== newTotalCount) {
      this.state.totalCount = newTotalCount;
      listCounter.setState({ newTotalCount });
    }
  };

  const listCounter = new ListCounter({
    target: footerElement,
    state: { totalCount: this.state.totalCount },
  });

  const listFilter = new ListFilter({
    target: footerElement,
    state: {
      isEditMode: this.state.isEditMode,
    },
    onChange,
  });
}
