import { useEffect, useState } from "react"
import { getAllTipoSemanas } from "../../api/asistencia.api"
import { TipoSemanaCard } from "./TipoSemanaCard"

export function TipoSemanaList() {
    
    const [ tipoSemana, setTipoSemana ] = useState()

    useEffect(() => {
        async function loadTipoSemanas() {
            const res = await getAllTipoSemanas()
            setTipoSemana(res.data)
        }
        loadTipoSemanas()
    }, [])

    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-4">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-blue-800 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Tipo
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Acción
                            </th>
                        </tr>
                    </thead>
                    { tipoSemana && tipoSemana.map(tsem => (
                        <TipoSemanaCard key={tsem.id} tsem={tsem}></TipoSemanaCard>
                    ))}
                </table>
            </div>
        </>
    )
}
