import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Screens/HomePage";
import AllRoutes from "./components/AllRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
