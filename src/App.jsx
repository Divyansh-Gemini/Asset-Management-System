import { Outlet } from "react-router-dom";
import NavBar from "./components/Header/Header";
import Sidebar from "./components/SideBar/Sidebar";

function App() {
  
  document.body.style.overflow = "auto"
  return (
    <>
      <NavBar />
      <div className="flex">
        <Sidebar />
        <main className="flex justify-end w-full">
          <div className="w-3/4 mx-24">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
