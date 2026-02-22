import React, { useState } from "react";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { InputText } from "primereact/inputtext";

const Navbar = ({ onToggleSidebar }) => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    const toggleTheme = () => {
        const current = document.documentElement.getAttribute("data-theme");
        document.documentElement.setAttribute(
            "data-theme",
            current === "dark" ? "light" : "dark"
        );
    };

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    return (
        <header className="admin-navbar">
            <div className="left-section">
                <Button
                    icon="pi pi-bars"
                    className="p-button-text"
                    onClick={onToggleSidebar}
                />
            </div>

            <div className="center-section">
                <span className="p-input-icon-left">
                    <InputText placeholder="Search..." className="global-search" />
                </span>
            </div>

            <div className="right-section">
                <Button
                    icon="pi pi-moon"
                    className="p-button-text"
                    onClick={toggleTheme}
                />

                <Button
                    icon={isFullscreen ? "pi pi-window-minimize" : "pi pi-window-maximize"}
                    className="p-button-text"
                    onClick={toggleFullscreen}
                />

                <Avatar
                    icon="pi pi-user"
                    shape="circle"
                    style={{ backgroundColor: "var(--color-primary)", color: "#fff" }}
                />
            </div>
        </header>
    );
};

export default Navbar;