export function Header() {
    return (
        <div className="flex bg-gray-800 w-full h-screen flex-col">
            <div className="w-full h-fit bg-gray-900 flex items-center justify-center">
                <p className="text-xl text-white my-4 mx-2 text-center">
                    Gerenciador de produtos
                </p>
            </div>

            <div className="flex">
                <div className="flex bg-gray-700 w-52 h-screen px-2 py-4 ">
                    <ul>
                        <li className="li-primary">Produtos</li>
                        <li className="li-primary">Suporte</li>
                        <li className="li-primary">Configurações</li>
                        <li className="li-primary">Sair</li>
                    </ul>
                </div>
                <div className="flex flex-1 w-full h-22 justify-start items-start ">
                    <ul className="flex flex-row justify-start items-start">
                        <li className="li-secondary">Código</li>
                        <li className="li-secondary">Descrição</li>
                        <li className="li-secondary">Preço</li>
                        <li className="li-secondary">Data de cadastro</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}