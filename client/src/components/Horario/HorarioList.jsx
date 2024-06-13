import { useEffect, useState } from "react"
import { getAllHorarios } from "../../api/asistencia.api"
import { HorarioCard } from "./HorarioCard"

export function HorarioList() {
    
    const [ horario, setHorario ] = useState()

    useEffect(() => {
        async function loadHorario() {
            const res = await getAllHorarios()
            setHorario(res.data)
        }
        loadHorario()
    }, [])

    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-4">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-blue-800 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Tipo de horario
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Horario inicial
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Horario final
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Acción
                            </th>
                        </tr>
                    </thead>
                    { horario && horario.map(hor => (
                        <HorarioCard key={hor.id} hor={hor}></HorarioCard>
                    ))}
                </table>
            </div>
        </>
    )
}
