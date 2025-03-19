"use client";

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ClipboardList,
  Users,
  Settings,
  BarChart2,
  FileText,
  ChevronRight,
  ChevronDown,
  X,
  LayoutDashboard,
} from "lucide-react";

function Sidebar({ open, setOpen }) {
  const location = useLocation();
  const [expandedMenus, setExpandedMenus] = useState(["customer-requests"]);

  const toggleMenu = (menuId) => {
    if (expandedMenus.includes(menuId)) {
      setExpandedMenus(expandedMenus.filter((id) => id !== menuId));
    } else {
      setExpandedMenus([...expandedMenus, menuId]);
    }
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      id: "customer-requests",
      label: "Customer Requests",
      icon: ClipboardList,
      submenu: [
        {
          id: "new-request",
          label: "New Request",
          path: "/dashboard/new-request",
        },
        {
          id: "view-requests",
          label: "View Requests",
          path: "/dashboard/view-requests",
        },
      ],
    },
    {
      id: "clients",
      label: "Clients",
      icon: Users,
      submenu: [
        {
          id: "add-client",
          label: "Add Client",
          path: "/dashboard/add-client",
        },
        {
          id: "manage-clients",
          label: "Manage Clients",
          path: "/dashboard/manage-clients",
        },
      ],
    },
    {
      id: "reports",
      label: "Reports",
      icon: BarChart2,
      submenu: [
        {
          id: "monthly-reports",
          label: "Monthly Reports",
          path: "/dashboard/monthly-reports",
        },
        {
          id: "annual-reports",
          label: "Annual Reports",
          path: "/dashboard/annual-reports",
        },
      ],
    },
    {
      id: "documents",
      label: "Documents",
      icon: FileText,
      path: "/dashboard/documents",
    },
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];

  return (
    <>
      {/* Mobile sidebar backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-30 w-64 bg-blue-900 text-white transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Mobile close button */}
        <button
          className="absolute top-4 right-4 md:hidden text-white"
          onClick={() => setOpen(false)}
        >
          <X size={24} />
        </button>

        {/* Logo */}
        <div className="p-4 border-b border-blue-800">
          <h2 className="text-xl font-bold">Customer Requests</h2>
          <p className="text-sm text-blue-300">Management System</p>
        </div>

        {/* Navigation */}
        <nav className="p-2">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.id}>
                {item.submenu ? (
                  <div>
                    <button
                      className={`flex items-center w-full p-2 rounded-md hover:bg-blue-800 ${
                        expandedMenus.includes(item.id) ? "bg-blue-800" : ""
                      }`}
                      onClick={() => toggleMenu(item.id)}
                    >
                      <item.icon className="w-5 h-5 mr-2" />
                      <span>{item.label}</span>
                      {expandedMenus.includes(item.id) ? (
                        <ChevronDown className="w-4 h-4 ml-auto" />
                      ) : (
                        <ChevronRight className="w-4 h-4 ml-auto" />
                      )}
                    </button>

                    {expandedMenus.includes(item.id) && (
                      <ul className="pl-6 mt-1 space-y-1">
                        {item.submenu.map((subitem) => (
                          <li key={subitem.id}>
                            <Link
                              to={subitem.path}
                              className={`flex items-center p-2 rounded-md hover:bg-blue-800 ${
                                isActive(subitem.path) ? "bg-blue-700" : ""
                              }`}
                              onClick={() => setOpen(false)}
                            >
                              <span>{subitem.label}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center p-2 rounded-md hover:bg-blue-800 ${
                      isActive(item.path) ? "bg-blue-700" : ""
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    <item.icon className="w-5 h-5 mr-2" />
                    <span>{item.label}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
