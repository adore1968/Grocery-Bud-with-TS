import { useAppContext } from "../hooks/AppContext";
import { Task } from "../shared/interfaces";
import { FaEdit, FaTrash } from "react-icons/fa";

type Props = { task: Task };

function GroceryTask({ task }: Props) {
  const { getStates, deleteTask } = useAppContext();
  return (
    <div className="flex items-center justify-between border-b">
      <h4 className="text-lg sm:text-xl">{task.name}</h4>
      <div className="flex items-center gap-2">
        <button
          onClick={() => getStates(task.id)}
          className="text-green-600 transition-colors hover:text-green-500"
        >
          <FaEdit />
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="text-red-600 transition-colors hover:text-red-500"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default GroceryTask;
