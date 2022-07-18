import { useEffect, useState } from "react";
import { Header } from "../Components/Header";
import { Modal } from "../Components/Modal";
import { ProductsTable } from "../Components/Productstable";
import { Sidebar } from "../Components/Sidebar";
import { api } from "../Libs/api";


export function Home() {

    const [products, setProducts] = useState([])
    useEffect(() => {
        api.get("/").then((data) => {
            setProducts(data.data)
            console.log(data)
        })
        
    }, [])

    const [editingProduct, setEditingProduct] = useState({})

    return (
        <div className=" flex h-screen w-screen bg-blue-primary overflow-hidden">
            <div className="flex">
                <Sidebar />
            </div>
            <div className="w-full">
                <div className="flex">
                    <Header />
                </div>
                <div className="w-full h-full bg-blue-secondary p-5 overflow-auto pb-10 ">
                    {
                        products.map((item, index) => {
                            return <ProductsTable onEdit={() => setEditingProduct(item)} data={item} />
                        })
                    }
                    {true ? (
                        <Modal
                            open={Object.keys(editingProduct).length != 0}
                            onCancel={() => setEditingProduct({})}
                            onSubmit={() => setEditingProduct({})}
                            data={editingProduct}
                        />
                    ) : null}
                </div>
            </div>
        </div>
    )
}