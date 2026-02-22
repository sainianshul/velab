import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import AppBreadcrumb from "./components/AppBreadcrumb";

const AdminLayout = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    return (
        <div className="flex h-screen surface-ground">

            {/* Sidebar */}
            <Sidebar collapsed={sidebarCollapsed} />

            {/* Main */}
            <div className="flex flex-column flex-1 overflow-hidden">

                <Navbar
                    onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
                />

                {/* Content Area */}
                <main
                    className="flex-1 overflow-auto p-4"
                    style={{
                        background: "var(--surface-100)"
                    }}
                >
                    <div className="mb-3">
                        <AppBreadcrumb />
                    </div>

                    <div
                        className="p-4 border-round-xl"
                        style={{
                            background: "var(--surface-card)",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
                        }}
                    >

                        <Outlet />
                    </div>
                </main>

            </div>
        </div>
    );
};

export default AdminLayout;