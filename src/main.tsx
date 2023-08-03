import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import DataProvider from "./context_data/DataProvider.tsx";
import ThemeProvider from "./context_data/ThemeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <DataProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </DataProvider>
    </React.StrictMode>
);
