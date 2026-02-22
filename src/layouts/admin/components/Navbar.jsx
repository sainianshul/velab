import React, { useRef, useState } from "react";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { InputText } from "primereact/inputtext";
import { Menu } from "primereact/menu";
import { Badge } from "primereact/badge";
import { OverlayPanel } from "primereact/overlaypanel";
import { useTheme } from "../../../core/theme/ThemeProvider";

const Navbar = ({ onToggleSidebar }) => {
    const { toggleTheme, theme } = useTheme();
    const userMenuRef = useRef(null);
    const notificationRef = useRef(null);
    const appsRef = useRef(null);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    const userMenuItems = [
        { label: "Profile", icon: "pi pi-user" },
        { label: "Account Settings", icon: "pi pi-cog" },
        { label: "Billing", icon: "pi pi-wallet" },
        { separator: true },
        {
            label: "Logout",
            icon: "pi pi-sign-out",
            className: "text-red-500"
        }
    ];

    return (
        <header
            className="surface-card flex align-items-center justify-content-between px-4"
            style={{
                height: "64px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                zIndex: 100
            }}
        >

            {/* LEFT */}
            <div className="flex align-items-center gap-2">
                <Button
                    icon="pi pi-bars"
                    className="p-button-text"
                    onClick={onToggleSidebar}
                />
                <span className="font-semibold hidden md:block">Dashboard</span>
            </div>

            {/* CENTER SEARCH */}
            <div className="hidden lg:flex">
                <span className="p-input-icon-left">
                    <InputText placeholder="Search..." style={{ width: "300px" }} />
                </span>
            </div>

            {/* RIGHT */}
            <div className="flex align-items-center gap-3">

                {/* 🔔 NOTIFICATION (Fixed Badge Alignment) */}
                <div className="relative">
                    <Button
                        icon="pi pi-bell"
                        className="p-button-text"
                        onClick={(e) => notificationRef.current.toggle(e)}
                    />
                    <Badge
                        value="5"
                        severity="danger"
                        style={{
                            position: "absolute",
                            top: "2px",
                            right: "2px"
                        }}
                    />
                </div>

                <OverlayPanel ref={notificationRef}>
                    <div className="flex flex-column gap-2 p-3" style={{ width: "280px" }}>
                        <div className="font-semibold mb-2">Notifications</div>
                        <div className="flex align-items-center gap-2">
                            <i className="pi pi-shopping-cart text-green-500" />
                            <span>New Order Placed</span>
                        </div>
                        <div className="flex align-items-center gap-2">
                            <i className="pi pi-user text-blue-500" />
                            <span>User Registered</span>
                        </div>
                        <div className="flex align-items-center gap-2">
                            <i className="pi pi-server text-orange-500" />
                            <span>Server Restarted</span>
                        </div>
                    </div>
                </OverlayPanel>

                {/* 🟦 GOOGLE STYLE APP GRID */}
                <Button
                    icon="pi pi-th-large"
                    className="p-button-text"
                    onClick={(e) => appsRef.current.toggle(e)}
                />

                <OverlayPanel ref={appsRef} showCloseIcon>
                    <div
                        className="grid p-3"
                        style={{ width: "360px" }}
                    >
                        {[
                            { label: "Analytics", icon: "pi pi-chart-line", color: "#6366F1" },
                            { label: "Users", icon: "pi pi-users", color: "#10B981" },
                            { label: "Orders", icon: "pi pi-shopping-cart", color: "#F59E0B" },
                            { label: "Products", icon: "pi pi-box", color: "#EF4444" },
                            { label: "Reports", icon: "pi pi-file", color: "#8B5CF6" },
                            { label: "Support", icon: "pi pi-headphones", color: "#14B8A6" }
                        ].map((app, index) => (
                            <div
                                key={index}
                                className="col-4 flex flex-column align-items-center justify-content-center p-3 cursor-pointer border-round hover:surface-hover"
                            >
                                <div
                                    className="flex align-items-center justify-content-center border-round"
                                    style={{
                                        width: "48px",
                                        height: "48px",
                                        backgroundColor: app.color,
                                        color: "#fff"
                                    }}
                                >
                                    <i className={app.icon} />
                                </div>
                                <span className="text-sm mt-2">{app.label}</span>
                            </div>
                        ))}
                    </div>
                </OverlayPanel>

                {/* FULLSCREEN */}
                <Button
                    icon={isFullscreen ? "pi pi-window-minimize" : "pi pi-window-maximize"}
                    className="p-button-text"
                    onClick={toggleFullscreen}
                />

                {/* THEME */}
                <Button
                    icon={theme === "light" ? "pi pi-moon" : "pi pi-sun"}
                    className="p-button-text"
                    onClick={toggleTheme}
                />

                {/* USER */}
                <Avatar
                    icon="pi pi-user"
                    shape="circle"
                    className="cursor-pointer"
                    onClick={(e) => userMenuRef.current.toggle(e)}
                />
                <Menu model={userMenuItems} popup ref={userMenuRef} />
            </div>
        </header>
    );
};

export default Navbar;