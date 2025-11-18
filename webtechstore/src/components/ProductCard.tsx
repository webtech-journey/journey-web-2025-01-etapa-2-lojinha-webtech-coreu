"use client";
import { ShoppingCart } from "phosphor-react";
import { useCarrinho } from "./CarrinhoContext";
import { useState } from "react";
import Toast from "./Toast";

interface ProductCardProps {
  id?: number;
  nome: string;
  preco: string;
  imagem: string;
  categoria?: string;
}

export default function ProductCard({
  id = Math.random(),
  nome,
  preco,
  imagem,
  categoria,
}: ProductCardProps) {
  const { adicionarItem } = useCarrinho();
  const [showToast, setShowToast] = useState(false);

  const handleAdicionarCarrinho = () => {
    adicionarItem({
      id,
      nome,
      preco,
      imagem,
      categoria,
    });
    setShowToast(true);
  };
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
          <h3 className="font-medium sm:text-base text-foreground truncate">
            {nome}
          </h3>
          <span className="text-xs sm:text-sm font-semibold text-primary">
            R$ {preco}
          </span>
        </div>

        <button
          onClick={handleAdicionarCarrinho}
          aria-label="Adicionar ao carrinho"
          className="absolute bottom-0 right-1 w-8 h-8 cursor-pointer flex items-center justify-center bg-yellow-50 rounded-md text-yellow hover:bg-yellow-100 transition-colors dark:bg-theme-bg"
        >
          <ShoppingCart size={16} />
        </button>
      </div>

      {showToast && (
        <Toast
          message={`${nome} adicionado ao carrinho!`}
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
}
