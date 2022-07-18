import { useEffect, useState } from "react"

interface modalProps {
    open: boolean,
    onSubmit: Function,
    onCancel: Function,
    data?: {
        codigo?: number,
        descricao?: string,
        preco?: number,
        data_cadastro?: string
    }
}

export function Modal(props: modalProps) {

    const [code, setCode] = useState(props.data?.codigo)
    const [description, setDescription] = useState(props.data?.descricao)
    const [price, setPrice] = useState(props.data?.preco)
    const [date, setDate] = useState(props.data?.data_cadastro)

    const [submitData, setSubmitData] = useState({})

    useEffect(() => {
        if(props.data != undefined){

            setCode(props.data?.codigo)
            setDescription(props.data?.descricao)
            setPrice(props.data?.preco)
            setDate(props.data?.data_cadastro)
        }
    }, [props.data])

    useEffect(() => {
        let _submitData = {
            codigo: code,
            descricao: description,
            preco: price,
            data_cadastro: date,
        }
        setSubmitData(_submitData)

    }, [code, description, price, date,])


    return (

        <div>
            {props.open ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm ">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl border border-blue-400 rounded-md">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-blue-primary outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blue-secondary rounded-t">
                                    <h3 className="text-3xl font-semibold text-gray-primary">
                                        Cadastrar Produto
                                    </h3>
                                </div>
                                <div className="relative p-6 flex-auto bg-blue-secondary">
                                    <form
                                        className="flex items-start ml-3 p-5 justify-center flex-col w-full min-w-[700px] "
                                    >
                                        <label
                                            htmlFor="Código de barras"
                                            className="text-gray-primary font-semibold text-lg"
                                        >
                                            Código do produto
                                        </label>
                                        <input
                                            type="tel"
                                            inputMode="numeric"
                                            className="modal-input"
                                            placeholder="####-####-####-####"
                                            value={code}
                                            onChange={event => setCode(parseInt(event.target.value))}
                                        />
                                        <label
                                            htmlFor="Descrição do produto"
                                            className="text-gray-primary font-semibold text-lg"
                                        >
                                            Descrição do produto
                                        </label>
                                        <input
                                            type="text"
                                            className="modal-input"
                                            value={description}
                                            placeholder="Caixa de leite:"
                                            onChange={event => setDescription(event.target.value)}
                                        />
                                        <label
                                            htmlFor="Preço"
                                            className="text-gray-primary font-semibold text-lg"
                                        >
                                            Preço do produto:
                                        </label>
                                        <input
                                            type="tel"
                                            className="modal-input"
                                            value={price}
                                            placeholder="99,99 R$:"
                                            onChange={event => setPrice(parseFloat(event.target.value))}
                                        />
                                        <label
                                            htmlFor="Data"
                                            className="text-gray-primary font-semibold text-lg"
                                        >
                                            Data
                                        </label>
                                        <input
                                            type="date"
                                            className="modal-input"
                                            value={date}
                                            placeholder="00/00/0000:"
                                            onChange={event => setDate(event.target.value)}
                                        />
                                    </form>
                                </div>
                                <div className="flex items-center justify-between p-6 border-t border-solid border-blue-secondary rounded-b">
                                    <button
                                        className=" text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => props.onCancel()}
                                    >
                                        Fechar
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => props.onSubmit(submitData)}
                                    >
                                        Adicionar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </div>
    )
}