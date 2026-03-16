import React from "react";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-column align-items-center justify-content-center text-center p-6"
            style={{ minHeight: "60vh" }}>

            <h1 className="text-7xl font-bold text-primary mb-3">404</h1>
            <h2 className="text-3xl mb-3">Page Not Found</h2>
            <p className="text-color-secondary mb-5">
                The page you are looking for does not exist.
            </p>
            <Button
                label="Go Home"
                icon="pi pi-home"
                onClick={() => navigate("/")}
            />
        </div>
    );
}