import Header from "./Components/Header/Header.js";
import TodoList from "./Components/List/TodoList.js";
import Footer from "./Components/Footer/Footer.js";
import { getTodoList, setNewTodoList, updateTodoList } from "./Storage/LocalStorage.js";
import { deleteTodo, editTodo, listFilter, toggleCompleted } from "./function/util.js";

export default function App({ target }) {
  this.state = {
    list: [],
    totalCount: 0,
    filterOption: "All",
    isEditMode: false,
  };

  const setState = () => {
    this.state.list = getTodoList();
    const filteredList = listFilter({
      list: this.state.list,
      option: this.state.filterOption,
    });

    this.state.totalCount = filteredList.length;

    const { isEditMode, totalCount } = this.state;

    header.setState({
      newIsEditMode: isEditMode,
    });

    todoList.setState({
      newList: filteredList,
      newIsEditMode: isEditMode,
    });

    footer.setState({
      newTotalCount: totalCount,
      newIsEditMode: isEditMode,
    });
  };

  const header = new Header({
    target,
    state: { isEditMode: this.state.isEditMode },
    onSubmit: (newTodo) => {
      setNewTodoList(newTodo);
      setState();
    },
  });

  const todoList = new TodoList({
    target,
    state: {
      list: this.state.list,
      isEditMode: this.state.isEditMode,
    },

    onToggle: (id) => {
      const newTodoList = toggleCompleted({
        list: this.state.list,
        id,
      });
      updateTodoList(newTodoList);
      setState();
    },

    onDelete: (id) => {
      const deletedList = deleteTodo({
        list: this.state.list,
        id,
      });
      updateTodoList(deletedList);
      setState();
    },

    onEdited: ({ id, editedTitle }) => {
      const editedList = editTodo({
        list: this.state.list,
        id,
        editedTitle,
      });
      updateTodoList(editedList);
      setState();
    },
    toggleEditMode: (newState) => {
      this.state.isEditMode = newState;
      setState();
    },
  });

  const footer = new Footer({
    target,
    state: {
      totalCount: this.state.totalCount,
      isEditMode: this.state.isEditMode,
    },
    onChange: (option) => {
      this.state.filterOption = option;
      setState();
    },
  });

  setState();
}
