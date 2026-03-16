// src/layouts/public/PublicLayout.jsx

import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Button } from "primereact/button";
import { Menubar } from "primereact/menubar";
import { useTheme } from "@/core/theme/ThemeProvider";

const PublicLayout = () => {
    const { theme, toggleTheme } = useTheme();

    const items = [
        { label: "Features", icon: "pi pi-star" },
        { label: "Pricing", icon: "pi pi-credit-card" },
        { label: "About", icon: "pi pi-info-circle" }
    ];

    const end = (
        <div className="flex align-items-center gap-3">
            <Button
                icon={theme === "light" ? "pi pi-moon" : "pi pi-sun"}
                rounded
                text
                onClick={toggleTheme}
            />
            <Link to="/auth/login">
                <Button label="Login" text />
            </Link>
            <Link to="/auth/register">
                <Button label="Get Started" />
            </Link>
        </div>
    );

    return (
        <div className="min-h-screen flex flex-column">

            {/* NAVBAR */}
            <Menubar
                model={items}
                end={end}
                className="px-5 py-3 border-none shadow-2"
            />

            {/* PAGE CONTENT */}
            <main className="flex-grow-1">
                <Outlet />
            </main>

            {/* FOOTER */}
            <footer className="surface-100 px-5 py-5">
                <div className="grid">
                    <div className="col-12 md:col-4">
                        <h3>MyApp</h3>
                        <p className="text-color-secondary">
                            Modern SaaS template powered by PrimeReact.
                        </p>
                    </div>

                    <div className="col-12 md:col-4">
                        <h4>Company</h4>
                        <ul className="list-none p-0 m-0">
                            <li className="mb-2">About</li>
                            <li className="mb-2">Careers</li>
                            <li className="mb-2">Contact</li>
                        </ul>
                    </div>

                    <div className="col-12 md:col-4">
                        <h4>Legal</h4>
                        <ul className="list-none p-0 m-0">
                            <li className="mb-2">Privacy Policy</li>
                            <li className="mb-2">Terms of Service</li>
                        </ul>
                    </div>
                </div>

                <div className="text-center mt-5 text-sm text-color-secondary">
                    © {new Date().getFullYear()} MyApp. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default PublicLayout;