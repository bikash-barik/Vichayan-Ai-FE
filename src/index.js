import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material";

import "./global.css";
import 'tailwindcss/tailwind.css';
import { ClerkProvider } from '@clerk/clerk-react';
import { SidebarProvider } from "./context/SidebarContext";

const muiTheme = createTheme();

const container = document.getElementById("root");
const root = createRoot(container);

const VITE_CLERK_PUBLISHABLE_KEY = process.env.VITE_CLERK_PUBLISHABLE_KEY || 'pk_test_ZHJpdmluZy1kYW5lLTkuY2xlcmsuYWNjb3VudHMuZGV2JA';

root.render(
  <BrowserRouter>
    <ClerkProvider publishableKey={VITE_CLERK_PUBLISHABLE_KEY}>
    <SidebarProvider>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </StyledEngineProvider>
      </SidebarProvider>
    </ClerkProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
