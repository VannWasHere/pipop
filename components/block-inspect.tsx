"use client";

import { useEffect } from "react";

export function BlockInspect() {
  useEffect(() => {
    const blockMenu = (event: Event) => {
      event.preventDefault();
    };

    const blockKeys = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      const withShift = event.shiftKey && (event.ctrlKey || event.metaKey);
      const blocked =
        event.key === "F12" ||
        (withShift && (key === "i" || key === "j" || key === "c")) ||
        ((event.ctrlKey || event.metaKey) && key === "u");

      if (blocked) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    document.addEventListener("contextmenu", blockMenu);
    document.addEventListener("keydown", blockKeys, true);
    document.addEventListener("dragstart", blockMenu);

    return () => {
      document.removeEventListener("contextmenu", blockMenu);
      document.removeEventListener("keydown", blockKeys, true);
      document.removeEventListener("dragstart", blockMenu);
    };
  }, []);

  return null;
}
