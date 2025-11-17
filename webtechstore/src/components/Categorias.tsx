interface CategoriaProps {
    nome: string;
}
export default function Categorias({ nome }: CategoriaProps) {
    return (
        <div className="bg-yellow rounded-xl py-1 px-2 text-sm cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out hover:bg-yellow-600 text-white font-medium">
            {nome}
        </div>
    );
}