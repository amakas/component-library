import React, { useState } from "react";
import "./Input.css";
type InputProps = {
  type?: "text" | "password" | "number";
  clearable?: boolean;
};
export const Input = ({ type = "text", clearable }: InputProps) => {
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  let inputType = type;
  if (type === "password") {
    inputType = showPassword ? "text" : "password";
  }
  return (
    <div className="main">
      <input
        className="input"
        type={inputType}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {type === "password" && (
        <button
          type="button"
          className="eye-button"
          title={showPassword && value ? "Hide" : "Show"}
          onClick={() => setShowPassword(!showPassword)}
          disabled={value ? false : true}
        >
          {" "}
          {showPassword && value ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      )}
      {clearable && (
        <button
          type="button"
          className="clear-button"
          disabled={value ? false : true}
          title="Clear"
          onClick={() => setValue("")}
        >
          X
        </button>
      )}
    </div>
  );
};

const EyeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const EyeOffIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    width={16}
    height={16}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
    />
  </svg>
);
