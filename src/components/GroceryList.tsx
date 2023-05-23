import { useAppContext } from "../hooks/AppContext";
import GroceryTask from "./GroceryTask";

function GroceryList() {
  const { tasks } = useAppContext();
  return (
    <div className="mb-10 flex flex-col gap-5">
      {tasks.map((task) => (
        <GroceryTask key={task.id} task={task} />
      ))}
    </div>
  );
}

export default GroceryList;
