"use client";

import { ThemeProvider } from "next-themes";
import * as React from "react";

export function Providers({ children }) {
  return (
    <ThemeProvider 
      attribute="class" // <-- Ini akan menambahkan class "dark" ke <html>
      defaultTheme="system" // <-- Tema default (akan mengikuti setting OS)
      enableSystem // <-- Mengaktifkan deteksi tema sistem
    >
      {children}
    </ThemeProvider>
  );
}