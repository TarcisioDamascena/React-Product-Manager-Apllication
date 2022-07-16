import { Header } from "../components/Header";
import { ProductsTable } from "../components/Productstable";
import { Sidebar } from "../components/Sidebar";

export function Home() {
    return (
        <div className="flex  min-h-screen overflow-hidden bg-slate-900">
            <Sidebar />
            <div className="w-full">
                <Header />
                <ProductsTable />
            </div>

        </div>
    )
}