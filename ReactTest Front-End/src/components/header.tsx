import { useState } from "react"
import { api } from "../Libs/api"
import { Modal } from "./Modal"

interface propsHeader {
    onClick: Function
}

export function Header(props: propsHeader) {

    const [code, setCode] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [date, setDate] = useState('')

    const [openModal, setOpenModal] = useState(false);

    const submit = async (submitData) => {

        api.post("/", {
            codigo: submitData.codigo,
            descricao: submitData.descricao,
            preco: submitData.preco,
            data_cadastro: submitData.data_cadastro,

        }).then((data) => {
            setOpenModal(false)
            console.log(data.status, data.data);
            
        }).catch((e) => alert(e))
    }

    return (
        <div className="w-full h-fit min-h-[30px] bg-blue-primary flex flex-row items-center justify-between ">
            <div className="flex flex-1 max-w-[1100px] mx-2 my-4 items-center justify-start ">
                <input
                    type="text"
                    placeholder="Buscar"
                    className="appearance-none bg-transparent text-gray-primary w-full max-w-[500px] border-b border-gray-500 mr-3 py-1 px-2 leading-tight focus:outline-none "
                />
            </div>

            <div className="flex max-w-[300px] mx-2 items-center justify-center">
                <>
                    <button
                        className="button-generic"
                        type="button"
                        onClick={() => props.onClick()}
                    >
                        Adicionar
                    </button>

                    <Modal
                        open={openModal}
                        onCancel={() => setOpenModal(false)}
                        onSubmit={(data) => { setOpenModal(false); submit(data) }}
                    />

                </>

            </div>

        </div>
    )
}