import React, { useState } from "react";
import { Toast } from "../components/Toast/Toast";

export default {
  title: "Components/Toast",
  component: Toast,
};

export const Success = () => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <button className="show-button" onClick={() => setVisible(true)}>
        Show Success
      </button>
      {visible && (
        <Toast
          type="success"
          message="Data saved successfully!"
          onClose={() => setVisible(false)}
        />
      )}
    </>
  );
};
export const Error = () => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <button className="show-button" onClick={() => setVisible(true)}>
        Show Error
      </button>
      {visible && (
        <Toast
          type="error"
          message="Something went wrong!"
          onClose={() => setVisible(false)}
          duration={4000}
        />
      )}
    </>
  );
};

export const Info = () => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <button className="show-button" onClick={() => setVisible(true)}>
        Show Info
      </button>
      {visible && (
        <Toast
          type="info"
          message="Here's some important info."
          onClose={() => setVisible(false)}
        />
      )}
    </>
  );
};

export const Warning = () => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <button className="show-button" onClick={() => setVisible(true)}>
        Show Warning
      </button>
      {visible && (
        <Toast
          type="warning"
          message="Be careful with this action!"
          onClose={() => setVisible(false)}
          duration={5000}
        />
      )}
    </>
  );
};

export const Clearable = () => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <button className="show-button" onClick={() => setVisible(true)}>
        Show Clearable
      </button>
      {visible && (
        <Toast
          type="warning"
          message="You can close this manually!"
          onClose={() => setVisible(false)}
          duration={10000}
          clearable
        />
      )}
    </>
  );
};
