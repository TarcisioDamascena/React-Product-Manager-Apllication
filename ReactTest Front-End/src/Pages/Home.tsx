import { useEffect, useState } from "react";
import { Header } from "../Components/Header";
import { Modal } from "../Components/Modal";
import { ProductsTable } from "../Components/Productstable";
import { Sidebar } from "../Components/Sidebar";
import { api } from "../Libs/api";


export function Home() {

    const [products, setProducts] = useState([])
    useEffect(() => {
        GetProducts()
    }, [])

    const GetProducts = async () => {
        api.get("/").then((data) => {

            setProducts(data.data)
            console.log(data)

        }).catch((err) => {
            console.log(err)
        })
    }

    const LaunchProduct = async (submitData) => {

        api.post("/", {
            codigo: submitData.codigo,
            descricao: submitData.descricao,
            preco: submitData.preco,
            data_cadastro: submitData.data_cadastro,

        }).then((data) => {
            setLaunchProductModal(false)
            GetProducts()
            console.log(data.status, data.data);

        }).catch((e) => alert(e))
    }

    const UpdateProduct = async (submitData) => {

        api.patch("/", {
            codigo: submitData.codigo,
            descricao: submitData.descricao,
            preco: submitData.preco,
            data_cadastro: submitData.data_cadastro,

        }).then((data) => {
            setEditingProduct(false)
            GetProducts()
            console.log(data.status, data.data);

        }).catch((e) => alert(e))
    }

    const DeleteProduct = async (submitData) => {

        api.delete("/", {
            data: { codigo: submitData.codigo }
        }).then((data) => {
            GetProducts()
            console.log(data.status, data.data);

        }).catch((e) => alert(e))
    }


    const [launchProductModal, setLaunchProductModal] = useState(false)
    const [editingProduct, setEditingProduct] = useState({})

    return (
        <div className=" flex h-screen w-screen bg-blue-primary overflow-hidden">
            <div className="flex">
                <Sidebar />
            </div>
            <div className="w-full">
                <div className="flex">
                    <Header onClick={() => setLaunchProductModal(true)} />
                </div>
                <div className="w-full h-full bg-blue-secondary p-5 overflow-auto pb-10 scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-blue-primary">
                    {
                        products.map((item, index) => {
                            return <ProductsTable onEdit={() => setEditingProduct(item)} data={item} onDelete={() => DeleteProduct(item)} />
                        })
                    }

                    <Modal
                        open={launchProductModal}
                        onCancel={() => setLaunchProductModal(false)}
                        onSubmit={(data) => LaunchProduct(data)}
                        editingMode={false}
                    />

                    <Modal
                        open={Object.keys(editingProduct).length != 0}
                        onCancel={() => setEditingProduct({})}
                        onSubmit={(data) => UpdateProduct(data)}
                        editingMode={true}
                        data={editingProduct}
                    />

                </div>
            </div>
        </div>
    )
}