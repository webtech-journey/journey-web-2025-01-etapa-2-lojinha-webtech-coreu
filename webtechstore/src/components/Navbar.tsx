"use client";

import React, { useState } from "react";
import { Heart, ShoppingCart, User, List, X } from "phosphor-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const pathname = usePathname();
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavLink = ({
    href,
    children,
    mobile = false,
  }: {
    href: string;
    children: React.ReactNode;
    mobile?: boolean;
  }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        onClick={mobile ? () => setIsMenuOpen(false) : undefined}
        className={`${
          mobile
            ? "block px-4 py-3 text-base font-medium hover:bg-background/5"
            : "px-4 py-2 text-sm font-medium"
        } transition-colors hover:text-foreground ${
          isActive ? "text-foreground" : "text-muted-foreground"
        }`}
      >
        <span className="relative inline-block">
          {children}
          {isActive && !mobile && (
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-yellow-500" />
          )}
          {isActive && mobile && (
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-500" />
          )}
        </span>
      </Link>
    );
  };

  return (
    <nav className="w-full border-b border-border">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center mt-3">
          <img
            src={
              theme === "dark"
                ? "/images/Logo-dark.png"
                : "/images/Logo-light.png"
            }
            alt="Webtech Store"
            className="object-cover my-1 w-40 sm:w-44 md:w-48"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-1">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/produtos">Produtos</NavLink>
          <NavLink href="/sobre">Sobre Nós</NavLink>
        </div>

        <div className="flex items-center">
          {/* Ícones visíveis apenas no desktop */}
          <Link
            href="/favoritos"
            className="hidden md:flex items-center gap-2 px-3 py-1 rounded-md hover:bg-background/5"
          >
            <Heart size={18} />
          </Link>

          <Link
            href="/carrinho"
            className="hidden md:flex items-center gap-2 px-3 py-1 rounded-md hover:bg-background/5"
          >
            <ShoppingCart size={18} />
          </Link>

          <Link
            href="/login"
            className="hidden md:flex items-center gap-2 px-3 py-1 rounded-md hover:bg-background/5"
          >
            <User size={18} />
          </Link>

        <div className="mx-1">
            <ThemeToggle />
        </div>

          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center gap-2 px-3 py-1 rounded-md hover:bg-background/5 ml-1"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={18} /> : <List size={18} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-2 space-y-1 text-sm">
            <NavLink href="/" mobile>
              Home
            </NavLink>
            <NavLink href="/produtos" mobile>
              Produtos
            </NavLink>
            <NavLink href="/sobre" mobile>
              Sobre Nós
            </NavLink>
          </div>

          <div className="border-t border-border/50 px-4 py-3">
            <div className="flex justify-center gap-6">
              <Link
                href="/favoritos"
                onClick={() => setIsMenuOpen(false)}
                className="flex flex-col items-center gap-1 hover:text-foreground transition-colors"
              >
                <Heart size={20} />
                <span className="text-xs">Favoritos</span>
              </Link>

              <Link
                href="/carrinho"
                onClick={() => setIsMenuOpen(false)}
                className="flex flex-col items-center gap-1 hover:text-foreground transition-colors"
              >
                <ShoppingCart size={20} />
                <span className="text-xs">Carrinho</span>
              </Link>

              <Link
                href="/login"
                onClick={() => setIsMenuOpen(false)}
                className="flex flex-col items-center gap-1 hover:text-foreground transition-colors"
              >
                <User size={20} />
                <span className="text-xs">Conta</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
