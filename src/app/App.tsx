import { Sidebar } from "@/widgets/sidebar";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default App;
