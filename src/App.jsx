import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./components/Header/Header";
import Sidebar from "./components/SideBar/Sidebar";

function App() {
  const location = useLocation();
  const isFullScreen =
    location.pathname !== "/login" && location.pathname !== "/signup";

  document.body.style.overflow = "auto";
  return (
    <>
      {isFullScreen && <NavBar />}

      <div className="flex">
        {isFullScreen && <Sidebar />}

        <main
          className={`flex ${
            isFullScreen ? "justify-end" : "justify-center"
          } w-full`}
        >
          <div className={`w-3/4 mx-24`}>
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
