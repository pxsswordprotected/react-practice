import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FrameworkMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Framework");

  const frameworks = ["React", "Vue", "Svelte", "Angular"];

  const handleSelect = (framework) => {
    setSelected(framework);
    setIsOpen(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      {/* Embedded Styles for the Animation "Recipe" */}
      <style>{`
        .dropdown-menu {
          /* Principle 3: Origin Awareness */
          transform-origin: top center;

          /* Principle 4: Performance (only animate transform/opacity) */
          opacity: 0;
          transform: scaleY(0.95);
          pointer-events: none; /* Prevent clicking when hidden */

          /* Principle 2 & 7: Speed & Consistency */
          /* Using the "Smooth Ease-Out" curve from your notes */
          transition:
            opacity 200ms cubic-bezier(0.16, 1, 0.3, 1),
            transform 200ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .dropdown-menu.open {
          opacity: 1;
          transform: scaleY(1);
          pointer-events: auto;
        }

        /* Principle 6: Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .dropdown-menu {
            transition: none;
          }
        }

        /* Optimization: CSS Hover instead of JS State */
        .menu-item:hover {
          background-color: #DEDEDE;
          border-radius: 4px;
        }
      `}</style>

      <div
        className="relative"
        style={{
          minWidth: "124px",
          fontFamily: "Inter, sans-serif",
          fontSize: "14px",
          color: "#0D0D0D",
        }}
      >
        {/* Header Button */}
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
            /* Pattern 2: Button Press Feedback could be added here */
            transition: "background-color 150ms ease",
          }}
        >
          <span>{selected}</span>
          {/* Small animation for the icon itself */}
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
            top: "46px" /* Added slight gap */,
            zIndex: 10,
            backgroundColor: "#F9F9F9",
            border: "1px solid rgba(13, 13, 13, 0.1)",
            borderRadius: "8px",
            padding: "8px 12px",
          }}
        >
          {frameworks.map((framework, index) => (
            <button
              key={framework}
              onClick={() => handleSelect(framework)}
              className="w-full text-left transition-colors duration-50 menu-item"
              style={{
                padding: "8px 6px",
                marginBottom: index < frameworks.length - 1 ? "4px" : "0",
                backgroundColor: "transparent",
              }}
            >
              {framework}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
