import { useState } from "react";
import { Outlet } from "react-router-dom";
import LeftPannel from "./components/left pannel/leftPannel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transform 
        transition-transform duration-300 z-50 
        ${menuOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:static md:w-1/6`}
      >
        <LeftPannel />
      </div>

      
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <div className="flex-1 w-full overflow-y-auto p-3">
        
        <button
          className="md:hidden p-2 mb-3 text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>

        <Outlet />
      </div>
    </div>
  );
}

export default App;
