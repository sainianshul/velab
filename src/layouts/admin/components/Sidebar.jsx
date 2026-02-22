import React from "react";
import { Ripple } from "primereact/ripple";
import { NavLink } from "react-router-dom";

const Sidebar = ({ collapsed, mobileOpen }) => {
    return (
        <aside
            className={`admin-sidebar 
        ${collapsed ? "collapsed" : ""} 
        ${mobileOpen ? "mobile-open" : ""}`}
        >
            <div className="sidebar-header">
                <span className={`logo-text ${collapsed ? "hide-text" : ""}`}>
                    VelaB
                </span>
            </div>

            <ul className="sidebar-menu">
                <li>
                    <NavLink to="/admin/dashboard" className="menu-item p-ripple">
                        <i className="pi pi-home"></i>
                        <span className={`menu-text ${collapsed ? "hide-text" : ""}`}>
                            Dashboard
                        </span>
                        <Ripple />
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/admin/users" className="menu-item p-ripple">
                        <i className="pi pi-users"></i>
                        <span className={`menu-text ${collapsed ? "hide-text" : ""}`}>
                            Users
                        </span>
                        <Ripple />
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/admin/settings" className="menu-item p-ripple">
                        <i className="pi pi-cog"></i>
                        <span className={`menu-text ${collapsed ? "hide-text" : ""}`}>
                            Settings
                        </span>
                        <Ripple />
                    </NavLink>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;