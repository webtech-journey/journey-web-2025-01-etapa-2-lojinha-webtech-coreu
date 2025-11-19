"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "phosphor-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      aria-label="Voltar ao topo"
      onClick={handleClick}
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full shadow-lg text-white transition-opacity duration-200 ${
        visible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } bg-yellow-400 hover:bg-yellow-500`}
    >
      <ArrowUp size={20} weight="bold" />
    </button>
  );
}
