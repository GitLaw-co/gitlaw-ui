import "../src/styles/globals.css";
import type { GlobalProvider } from "@ladle/react";

export const Provider: GlobalProvider = ({
  children,
  storyMeta,
}) => {
  const layout = storyMeta?.layout ?? "centered";

  if (layout === "fullscreen") {
    return <>{children}</>;
  }

  // "centered" or "padded"
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: layout === "centered" ? "100vh" : undefined,
        padding: "1rem",
      }}
    >
      {children}
    </div>
  );
};
