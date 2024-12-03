import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaCog, FaUserCircle, FaBars } from "react-icons/fa"; // Icons

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false); // For collapsible section

  const handleCollapseToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "block p-2 rounded-md bg-gray-700 text-white"
      : "block p-2 rounded-md hover:bg-gray-700 transition-colors duration-300";
  };

  return (
    <>
      {/* Overlay for when sidebar is open */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          // className="fixed inset-0 bg-black opacity-50 z-40"
        />
      )}

      <div
        className={`bg-gray-800 text-white w-64 h-screen p-6 transition-transform duration-500 ease-in-out fixed top-0 left-0 z-50 shadow-lg rounded-r-lg ${
          isOpen ? "translate-x-0" : "-translate-x-80"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-center">Dashboard</h2>
          <button
            className="text-2xl lg:hidden"
            onClick={toggleSidebar}
          >
            <FaBars />
          </button>
        </div>

        {/* Profile Section */}
        <div className="flex items-center mb-6">
          <FaUserCircle className="text-4xl text-gray-400" />
          <div className="ml-4">
            <p className="font-semibold">Admin</p>
            <p className="text-sm text-gray-400">admin@example.com</p>
          </div>
        </div>

        {/* Sidebar Links */}
        <ul className="space-y-4">
          <li>
            <Link to="/admin/dashboard" className={getLinkClass("/admin/dashboard")}>
              <FaHome className="inline mr-2" /> Dashboard
            </Link>
          </li>

          {/* Collapsible Section */}
          <li>
            <button
              onClick={handleCollapseToggle}
              className="w-full text-left flex items-center p-2 rounded-md hover:bg-gray-700"
            >
              <FaCog className="inline mr-2" /> Settings
            </button>
            {!isCollapsed && (
              <ul className="pl-6 space-y-2">
                <li>
                  <Link className={getLinkClass("/admin/settings/profile")}>
                    Profile Settings
                  </Link>
                </li>
                <li>
                  <Link  className={getLinkClass("/admin/settings/account")}>
                    Account Settings
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Additional Links */}
          <li>
            <Link  className={getLinkClass("/admin/reports")}>
              <FaCog className="inline mr-2" /> Reports
            </Link>
          </li>

          {/* More Links */}
          <li>
            <Link  className={getLinkClass("/admin/notifications")}>
              <FaCog className="inline mr-2" /> Notifications
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
