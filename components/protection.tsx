"use client";

import { useEffect } from "react";

export default function Protection() {
  useEffect(() => {
    const preventContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const preventDrag = (e: DragEvent) => {
      e.preventDefault();
    };

    const preventKeys = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();

      // Disable F12
      if (e.key === "F12") {
        e.preventDefault();
      }

      // Disable Ctrl+Shift+I/J/C
      if (
        e.ctrlKey &&
        e.shiftKey &&
        ["i", "j", "c"].includes(key)
      ) {
        e.preventDefault();
      }

      // Disable Ctrl+U
      if (e.ctrlKey && key === "u") {
        e.preventDefault();
      }

      // Disable Ctrl+S
      if (e.ctrlKey && key === "s") {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", preventContextMenu);
    document.addEventListener("dragstart", preventDrag);
    document.addEventListener("keydown", preventKeys);

    return () => {
      document.removeEventListener("contextmenu", preventContextMenu);
      document.removeEventListener("dragstart", preventDrag);
      document.removeEventListener("keydown", preventKeys);
    };
  }, []);

  return null;
}