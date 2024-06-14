import { useEffect, useState } from "react"
import { getAllTipoHorarios } from "../../api/asistencia.api"
import { TipoHorarioCard } from "./TipoHorarioCard"

export function TipoHorarioList() {
    
    const [ tipoHorario, setTipoHorario ] = useState()

    useEffect(() => {
        async function loadTipoHorarios() {
            const res = await getAllTipoHorarios()
            setTipoHorario(res.data)
        }
        loadTipoHorarios()
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
                    { tipoHorario && tipoHorario.map(thor => (
                        <TipoHorarioCard key={thor.id} thor={thor}></TipoHorarioCard>
                    ))}
                </table>
            </div>
        </>
    )
}
