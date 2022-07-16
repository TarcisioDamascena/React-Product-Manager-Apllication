import { SignOut } from "phosphor-react";

export function Header() {
    return (
        <div className="w-full h-fit bg-gray-800 flex flex-row">
            <div className="flex flex-1 max-w-[1100px] mx-2 my-4 items-center justify-start">
                <h1 className="text-xl text-white font-semibold shadow-md">
                    Gerenciador de produtos
                </h1>
            </div>
            <div className="flex max-w-[300px] items-center justify-center">
                <img
                    className="w-[36px] h-[36px] rounded-full mx-2 my-2"
                    src="https://github.com/TarcisioDamascena.png"
                    alt="User avatar"
                />
                <p className="text-sm text-white font-semibold mx-2 my-4 items-center">
                    Tarcisio Damascena
                </p>
                <button
                    className="flex text-xs w-14 h-6 text-white mx-2 my-4 px-2 items-center justify-between shadow-md rounded-2xl border border-slate-500 hover:border-cyan-400 bg-slate-500 hover:bg-slate-900 ">
                    Sair
                    <SignOut size={16} />
                </button>
            </div>
        </div>
    )
}