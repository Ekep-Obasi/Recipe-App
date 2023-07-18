import { useSelector } from "react-redux";
import "./App.css";
import RoutesComponent from "./Routes";
import { selectLoading } from "./app/features/ui";
import Spinner from "./components/atoms/spinner/Spinner";

function App() {
  const loading = useSelector(selectLoading);

  return (
    <div className="App">
      <RoutesComponent />
      {loading && <Spinner />}
    </div>
  );
}

export default App;
