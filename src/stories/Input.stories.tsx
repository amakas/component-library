import React from "react";
import { Input } from "../components/Input/Input";

export default {
  title: "Components/Input",
  component: Input,
};

export const Default = {
  args: {
    type: "text",
    clearable: false,
  },
};
export const Clearable = {
  args: {
    type: "text",
    clearable: true,
  },
};
export const Password = {
  args: {
    type: "password",
    clearable: false,
  },
};
