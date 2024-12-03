import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`bg-gray-800 text-white w-64 h-screen p-4 transition-all duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-64"
      }`}
    >
      <h2 className="text-xl font-bold">Sidebar</h2>
      {/* Add your sidebar links here */}
      <ul>
        <Link to={'/admin/dashboard'}>
          <li className="mt-4">New Form Data</li>
        </Link>
        
         
      </ul>
    </div>
  );
};

export default Sidebar;
