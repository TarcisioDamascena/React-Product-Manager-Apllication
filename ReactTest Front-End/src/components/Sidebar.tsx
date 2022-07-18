import { ChartLine, ClockCounterClockwise, Cube, Gear, Headset, User } from "phosphor-react";

export function Sidebar() {
    return (
        // Container da barra lateral
        <div className="flex flex-col items-center justify-start bg-blue-primary  max-w-[260px] p-2">
             {/* Container com informações do usario */}
            <div className="flex justify-center items-center flex-col mb-2 p-1">
                <h1 className="text-white font-semibold text-lg mb-2 py-2 px-4 text-center">Gerenciador de produtos</h1>
                <img
                    className="w-[100px] h-[100px] rounded-full mb-2 border-2 border-cyan-400 "
                    src="https://github.com/TarcisioDamascena.png"
                    alt="User avatar"
                />
                <p className="text-white font-semibold text-base text-center">
                    Tarcisio Damascena
                </p>
                <span className="text-gray-secondary font-semibold text-center">Front-End Dev</span>
                <button
                    className="button-generic"
                    onClick={() => { console.log('Editar') }}
                >
                    Editar Perfil
                </button>
            </div>
            
            {/* Container do menu lateral */}
            <div className="flex justify-center items-center flex-col  p-1">
                <div className="sidebar-ancor">
                    <Cube size={22} />
                    <a href="">Produto</a>
                </div>
                <div className="sidebar-ancor">
                    <Headset size={22} />
                    <a href="">Suporte</a>
                </div>
                <div className="sidebar-ancor">
                    <ChartLine size={22} />
                    <a href="">Vendas</a>
                </div>
                <div className="sidebar-ancor">
                    <ClockCounterClockwise size={22} />
                    <a href="">Histórico</a>
                </div>
                <div className="sidebar-ancor">
                    <User size={22} />
                    <a href="">Perfil</a>
                </div>
                <div className="sidebar-ancor">
                    <Gear size={22} />
                    <a href="">Configurações</a>
                </div>
            </div>
        </div>
    )
}