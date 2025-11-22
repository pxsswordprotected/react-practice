import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// need to address clicking inside of menu can close out of it

export default function FrameworkMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Framework");
  const dropdownRef = useRef(null);

  const frameworks = ["React", "Vue", "Svelte", "Angular"];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const handleSelect = (framework) => {
    setSelected(framework);
    setIsOpen(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <style>{`
          .dropdown-menu {
            transform-origin: top center;
            opacity: 0;
            transform: scaleY(0.95);
            pointer-events: none;
            transition:
              opacity 200ms cubic-bezier(0.16, 1, 0.3, 1),
              transform 200ms cubic-bezier(0.16, 1, 0.3, 1);
          }

          .dropdown-menu.open {
            opacity: 1;
            transform: scaleY(1);
            pointer-events: auto;
          }

          /* --- THE MENU ITEMS (The "Micro-interaction") --- */
          .menu-item {
            /* Base state*/
            transform: translateX(0px);

            transition:
              transform 150ms cubic-bezier(0.34, 1.56, 0.64, 1),
              background-color 150ms ease-out;
          }

          .menu-item:hover {
            /*moves slightly right when hovered */
            transform: translateX(2px);
            background-color: #EAEAEA;
            border-radius: 6px;
          }
          /*  this is for the selected item in the menu */
          .menu-item.selected:hover {
            transform: none;
            background-color: transparent;
            cursor: default;
          }

          @media (prefers-reduced-motion: reduce) {
            .dropdown-menu, .menu-item {
              transition: none;
              transform: none;
            }
          }
        `}</style>

      <div
        className="relative"
        ref={dropdownRef}
        style={{
          minWidth: "124px",
          fontFamily: "Inter, sans-serif",
          fontSize: "14px",
          color: "#0D0D0D",
        }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full"
          style={{
            height: "38px",
            padding: "0 12px",
            gap: "8px",
            backgroundColor: "#F9F9F9",
            border: "1px solid rgba(13, 13, 13, 0.1)",
            borderRadius: "8px",
            transition: "background-color 150ms ease",
          }}
        >
          <span>{selected}</span>
          <div
            style={{
              transition: "transform 200ms cubic-bezier(0.16, 1, 0.3, 1)",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <ChevronDown size={16} strokeWidth={2} />
          </div>
        </button>

        {/* Dropdown Items */}
        <div
          className={`absolute w-full shadow-sm dropdown-menu ${isOpen ? "open" : ""}`}
          style={{
            top: "46px",
            zIndex: 10,
            backgroundColor: "#F9F9F9",
            border: "1px solid rgba(13, 13, 13, 0.1)",
            borderRadius: "8px",
            padding: "8px 12px",
          }}
        >
          {frameworks.map((framework, index) => {
            const isSelected = selected === framework;
            return (
              <button
                key={framework}
                onClick={() => handleSelect(framework)}
                className={`w-full text-left menu-item ${isSelected ? "selected" : ""}`}
                style={{
                  padding: "8px 6px",
                  marginBottom: index < frameworks.length - 1 ? "4px" : "0",
                  color: selected === framework ? "#0D0D0D" : "#666666",
                  fontWeight: selected === framework ? "600" : "400",
                }}
              >
                {framework}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
