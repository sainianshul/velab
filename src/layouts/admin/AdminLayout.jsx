import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import "./styles/layout.css";

const AdminLayout = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div className={`admin-layout ${sidebarCollapsed ? "collapsed" : ""}`}>

            <Sidebar
                collapsed={sidebarCollapsed}
                mobileOpen={mobileOpen}
                onCloseMobile={() => setMobileOpen(false)}
            />

            <div className="admin-main">
                <Navbar
                    onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
                    onMobileMenu={() => setMobileOpen(true)}
                />

                <div className="admin-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;