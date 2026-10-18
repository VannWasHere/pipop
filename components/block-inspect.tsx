"use client";

import { useEffect } from "react";

export function BlockInspect() {
  useEffect(() => {
    const blockMenu = (event: Event) => {
      event.preventDefault();
    };

    const isScreenshotKey = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      const windowsKey =
        event.metaKey ||
        event.getModifierState("Meta") ||
        event.getModifierState("OS");
      const winShiftS =
        windowsKey && event.shiftKey && (key === "s" || event.code === "KeyS");

      return (
        event.key === "PrintScreen" ||
        key === "printscreen" ||
        winShiftS ||
        (windowsKey && event.shiftKey && (key === "3" || key === "4" || key === "5"))
      );
    };

    const hideFromCapture = () => {
      document.body.style.visibility = "hidden";
      window.setTimeout(() => {
        document.body.style.visibility = "";
      }, 1200);
      void navigator.clipboard?.writeText("").catch(() => {});
    };

    const blockKeys = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      const withShift = event.shiftKey && (event.ctrlKey || event.metaKey);
      const blocked =
        event.key === "F12" ||
        (withShift && (key === "i" || key === "j" || key === "c")) ||
        ((event.ctrlKey || event.metaKey) && key === "u") ||
        isScreenshotKey(event);

      if (!blocked) return;

      event.preventDefault();
      event.stopPropagation();
      if (isScreenshotKey(event)) hideFromCapture();
    };

    document.addEventListener("contextmenu", blockMenu);
    window.addEventListener("keydown", blockKeys, true);
    window.addEventListener("keyup", blockKeys, true);
    document.addEventListener("dragstart", blockMenu);

    return () => {
      document.removeEventListener("contextmenu", blockMenu);
      window.removeEventListener("keydown", blockKeys, true);
      window.removeEventListener("keyup", blockKeys, true);
      document.removeEventListener("dragstart", blockMenu);
    };
  }, []);

  return null;
}
