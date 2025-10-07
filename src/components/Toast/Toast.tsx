import React, { useEffect } from "react";
import "./Toast.css";
type ToastProps = {
  message?: string;
  type?: "success" | "error" | "warning" | "info";
  duration?: number;
  onClose: () => void;
  clearable?: boolean;
};
export const Toast = ({
  message,
  type = "info",
  duration = 3000,
  onClose,
  clearable = false,
}: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => onClose(), duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);
  return (
    <div className={`toast toast-${type}`}>
      {message}
      {clearable && (
        <button type="button" onClick={onClose}>
          X
        </button>
      )}
    </div>
  );
};
