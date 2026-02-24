import App from "./App";
import { ThemeProvider } from "@/core/theme/ThemeProvider";
import { PrimeReactProvider } from "primereact/api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient(); // 🔥 create once

export default function Providers() {
    return (
        <ThemeProvider>
            <PrimeReactProvider>
                <QueryClientProvider client={queryClient}>
                    <App />
                </QueryClientProvider>
            </PrimeReactProvider>
        </ThemeProvider>
    );
}