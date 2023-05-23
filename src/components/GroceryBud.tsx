import { useAppContext } from "../hooks/AppContext";
import GroceryForm from "./GroceryForm";
import GroceryList from "./GroceryList";
import GroceryAlert from "./GroceryAlert";

function GroceryBud() {
  const { alert, tasks, clearTasks } = useAppContext();
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="min-w-fit max-w-3xl flex-auto bg-white p-6">
        {alert.show && <GroceryAlert alert={alert} />}
        <h1 className="mb-5 text-center text-3xl font-bold sm:text-4xl">
          Grocery Bud
        </h1>
        <GroceryForm />
        {tasks.length > 0 && <GroceryList />}
        <button
          onClick={() => clearTasks()}
          className="mx-auto block text-lg text-red-600 hover:text-red-500 sm:text-xl"
        >
          Clear Items
        </button>
      </div>
    </div>
  );
}

export default GroceryBud;
