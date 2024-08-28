import { Outlet } from "react-router";
import Navigation from "./pages/Auth/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navigation />
      <main style={{ paddingTop: "4px", paddingBottom: "4px" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
