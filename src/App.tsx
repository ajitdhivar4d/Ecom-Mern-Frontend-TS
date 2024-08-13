import { Outlet } from "react-router";
import Navigation from "./pages/Auth/Navigation";

const App = () => {
  return (
    <div>
      <Navigation />
      <main style={{ paddingTop: "4px", paddingBottom: "4px" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
