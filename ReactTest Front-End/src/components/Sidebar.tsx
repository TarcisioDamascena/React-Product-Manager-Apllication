import { ChartLine, ClockCounterClockwise, Cube, Gear, Headset, User } from "phosphor-react";

export function Sidebar() {
    return (
        <div className="flex bg-gray-700 w-full max-w-[210px] h-screen overflow-hidden px-2 py-4">
            <ul>
                <li className="li-primary">
                    <Cube size={22} />
                    Produtos
                </li>
                <li className="li-primary">
                    <Headset size={22} />
                    Suporte
                </li>
                <li className="li-primary">
                    <Gear size={22} />
                    Configurações
                </li>
                <li className="li-primary">
                    <User size={22} />
                    Perfil
                </li>
                <li className="li-primary">
                    <ChartLine size={22} />
                    Vendas
                </li>
                <li className="li-primary">
                    <ClockCounterClockwise size={22} />
                    Histórico
                </li>
            </ul>
        </div>
    )
}