import Button from "@mui/material/Button";
import { ArrowRight } from "lucide-react";
import React from "react";

export function AuthActionButton({
  icon: Icon,
  children,
  onClick,
  variant = "primary",
  className = "",
  disabled = false,
}: {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary" | "tertiary";
  className?: string;
  disabled?: boolean;
}) {
  const color =
    variant === "primary"
      ? "primary"
      : variant === "secondary"
      ? "secondary"
      : "inherit";
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      variant={variant === "tertiary" ? "text" : "contained"}
      color={color as any}
      className={className}
      fullWidth
      endIcon={
        variant !== "tertiary" ? (
          <ArrowRight className="w-4 h-4 opacity-70" />
        ) : undefined
      }
      startIcon={<Icon className="w-5 h-5" />}
      sx={{
        borderRadius: 3,
        py: 2,
        px: 3,
        fontWeight: 600,
        textTransform: "none",
        ...(variant === "primary" && {
          background: "linear-gradient(to right, #2563eb, #1d4ed8)",
          color: "#fff",
        }),
        ...(variant === "secondary" && {
          background: "#fff",
          color: "#2563eb",
          border: "2px solid #bfdbfe",
        }),
        ...(variant === "tertiary" && {
          color: "#2563eb",
        }),
      }}
    >
      {children}
    </Button>
  );
}
