import React, { useEffect, useRef } from "react";
import "./SideBarMenu.css";
type MenuItem = {
  label: string;
  onClick?: () => void;
  subItems?: MenuItem[];
};
type SideBarMenuProps = {
  isOpen?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  items?: MenuItem[];
};
export const SideBarMenu = ({
  isOpen = false,
  onClose,
  items,
  onOpen,
}: SideBarMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const handleClickOut = (e: MouseEvent) => {
      if (
        menuRef.current &&
        e.target instanceof Node &&
        !menuRef.current.contains(e.target) &&
        burgerRef.current &&
        !burgerRef.current.contains(e.target)
      ) {
        onClose && onClose();
      }
    };
    document.addEventListener("click", handleClickOut);
    return () => document.removeEventListener("click", handleClickOut);
  }, []);
  return (
    <div>
      <button
        ref={burgerRef}
        type="button"
        className={isOpen ? "burger open" : "burger "}
        onClick={() => (isOpen ? onClose && onClose() : onOpen && onOpen())}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <div
        ref={menuRef}
        className={isOpen ? "sidebar open" : "sidebar closing"}
      >
        <p className="title"> Menu</p>
        <hr />
        <ul>
          {items?.map((item, index) => {
            return (
              <li
                className="menu-item"
                key={index}
                onClick={() => item.onClick && item.onClick()}
              >
                <div className="menu-label">{item.label}</div>
                {item.subItems && (
                  <ul className="sub-menu">
                    {item.subItems.map((sub, subindex) => {
                      return (
                        <li
                          className="sub-item"
                          key={subindex}
                          onClick={(e) => {
                            e.stopPropagation();
                            sub.onClick && sub.onClick();
                          }}
                        >
                          {" "}
                          <div className="sub-label">{sub.label}</div>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
