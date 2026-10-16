"use client";

import { useRef, useState } from "react";

const links = [
  ["#problem", "Асуудал"],
  ["#solution", "Шийдэл"],
  ["#standards", "Стандарт"],
  ["#experiment", "Туршилт"],
  ["#impact", "Тооцоолуур"],
  ["#thanks", "Талархал"],
];

export default function ResponsiveNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef(null);

  function closeOnEscape(event) {
    if (event.key === "Escape" && isOpen) {
      setIsOpen(false);
      toggleRef.current?.focus();
    }
  }

  return (
    <div className="site-navigation" onKeyDown={closeOnEscape}>
      <button
        ref={toggleRef}
        className="site-nav-toggle"
        type="button"
        aria-label={isOpen ? "Цэс хаах" : "Цэс нээх"}
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav
        className={`header-nav${isOpen ? " is-open" : ""}`}
        id="primary-navigation"
        aria-label="Үндсэн цэс"
      >
        {links.map(([href, label]) => (
          <a href={href} key={href} onClick={() => setIsOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
}
