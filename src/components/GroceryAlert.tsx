import { useAppContext } from "../hooks/AppContext";
import { useEffect } from "react";
import { Alert } from "../shared/interfaces";

type Props = { alert: Alert };

function GroceryAlert({ alert }: Props) {
  const { showAlert } = useAppContext();

  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 3500);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <div
      className={`${alert.styles} mb-5 rounded p-1 text-center text-lg sm:text-xl`}
    >
      <p>{alert.text}</p>
    </div>
  );
}

export default GroceryAlert;
