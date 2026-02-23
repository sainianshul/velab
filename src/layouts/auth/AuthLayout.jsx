// layouts/auth/AuthLayout.jsx

import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { useTheme } from "@/core/theme/ThemeProvider";

const AuthLayout = () => {
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex">

            {/* LEFT SIDE - BRANDING */}
            <div
                className="hidden md:flex flex-column justify-content-between p-6"
                style={{
                    width: "50%",
                    background: "linear-gradient(135deg, var(--primary-500), var(--primary-700))",
                    color: "white"
                }}
            >
                {/* Logo */}
                <h2
                    className="m-0 cursor-pointer"
                    onClick={() => navigate("/")}
                >
                    VelaB
                </h2>

                {/* Center Message */}
                <div>
                    <h1 className="text-4xl font-bold mb-3">
                        Build smarter.
                        <br />
                        Scale faster.
                    </h1>
                    <p className="opacity-90 line-height-3">
                        Enterprise-grade architecture and modern UI,
                        crafted for developers who want more.
                    </p>
                </div>

                {/* Bottom */}
                <div className="text-sm opacity-70">
                    © {new Date().getFullYear()} VelaB
                </div>
            </div>

            {/* RIGHT SIDE - FORM */}
            <div
                className="flex flex-column justify-content-center align-items-center p-6"
                style={{
                    width: "100%",
                    maxWidth: "600px",
                    margin: "auto"
                }}
            >
                {/* Top Right Controls */}
                <div className="absolute top-0 right-0 p-4">
                    <Button
                        icon={theme === "light" ? "pi pi-moon" : "pi pi-sun"}
                        rounded
                        text
                        onClick={toggleTheme}
                    />
                </div>

                <Outlet />
            </div>
        </div>
    );
};

export default AuthLayout;