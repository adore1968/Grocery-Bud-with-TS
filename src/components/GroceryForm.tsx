import { useRef } from "react";
import { useAppContext } from "../hooks/AppContext";
import { HandleSubmitProps } from "../shared/interfaces";

function GroceryForm() {
  const nameInput = useRef<HTMLInputElement>(null);
  const {
    task,
    currentId,
    taskInitialState,
    handleChange,
    createTask,
    editTask,
    setCurrentId,
    setTask,
    showAlert,
  } = useAppContext();

  const handleSubmit = (e: HandleSubmitProps) => {
    e.preventDefault();
    if (task.name && currentId) {
      editTask();
    } else if (task.name) {
      createTask();
    } else {
      showAlert(true, "Please enter a name", "text-red-500 bg-red-100");
    }
    setCurrentId("");
    setTask(taskInitialState);
    nameInput.current?.focus();
  };

  const setStyles = (): string => {
    if (currentId) {
      return "bg-green-600 hover:bg-green-500";
    }
    return "bg-red-600 hover:bg-red-500";
  };

  return (
    <form onSubmit={handleSubmit} className="mb-10 flex items-center">
      <label className="w-full">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter a name"
          value={task.name}
          onChange={(e) => handleChange(e)}
          className="w-full border px-2 py-1.5 text-lg text-gray-600 sm:text-xl"
          ref={nameInput}
        />
      </label>
      <button
        type="submit"
        className={`w-1/5 py-1.5 text-lg text-white transition-colors sm:text-xl ${setStyles()}`}
      >
        {currentId ? "Edit" : "Submit"}
      </button>
    </form>
  );
}

export default GroceryForm;
