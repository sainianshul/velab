import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "../core/theme/ThemeProvider";
import { PrimeReactProvider } from 'primereact/api';

export default function Providers() {
    return (
        <ThemeProvider>
            <PrimeReactProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </PrimeReactProvider>
        </ThemeProvider>
    );
}