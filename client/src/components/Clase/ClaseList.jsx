import { useEffect, useState } from "react"
import { getAllClases } from "../../api/asistencia.api"
import { ClaseCard } from "./ClaseCard"

export function ClaseList() {
    
    const [ clase, setClase ] = useState()

    useEffect(() => {
        
        async function loadClase() {
            const res = await getAllClases()
            setClase(res.data)
        }
        loadClase()
    }, [])

    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-4">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-blue-800 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nombre
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Hora de inicio
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Hora final
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Planificación
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Acción
                            </th>
                        </tr>
                    </thead>
                    { clase && clase.map(cla => (
                        <ClaseCard key={cla.id} cla={cla}></ClaseCard>
                    ))}
                </table>
            </div>
        </>
    )
}
