import React, { useState } from "react";
import { SideBarMenu } from "../components/SideBarMenu/SideBarMenu";

export default {
  title: "Components/SideBarMenu",
  component: SideBarMenu,
};

export const InteractiveDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    { label: "Home", onClick: () => alert("Home clicked") },
    { label: "Profile", onClick: () => alert("Profile clicked") },
    {
      label: "Settings",
      subItems: [
        { label: "General", onClick: () => alert("General clicked") },
        { label: "Security", onClick: () => alert("Security clicked") },
      ],
    },
    {
      label: "More",
      subItems: [
        { label: "About", onClick: () => alert("About clicked") },
        { label: "Contact", onClick: () => alert("Contact clicked") },
      ],
    },
  ];

  return (
    <>
      <SideBarMenu
        isOpen={isOpen}
        items={items}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
      />
    </>
  );
};
