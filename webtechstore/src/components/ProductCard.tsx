"use client";
import { ShoppingCart } from "phosphor-react";

interface ProductCardProps {
  nome: string;
  preco: string;
  imagem: string;
}

export default function ProductCard({ nome, preco, imagem }: ProductCardProps) {
  return (
    <div className="p-6 cursor-pointer sm:p-1 ">
      <div className="aspect-square mb-2 overflow-hidden">
        <img
          src={imagem}
          alt={nome}
          className="w-full h-full object-cover hover:scale-105 transition-transform"
        />
      </div>

    <div className="relative">
        <div className="space-y-2 pr-12">
            <h3 className="font-medium sm:text-base text-foreground truncate">{nome}</h3>
            <span className="text-xs sm:text-sm font-semibold text-primary">R$ {preco}</span>
        </div>

        <button
            aria-label="Adicionar ao carrinho"
            className="absolute bottom-0 right-1 w-8 h-8 cursor-pointer flex items-center justify-center bg-yellow-50 rounded-md text-yellow hover:bg-yellow-100 transition-colors dark:bg-theme-bg"
        >
            <ShoppingCart size={16} />
        </button>
    </div>
    </div>
  );
}
