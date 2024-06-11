import { useEffect, useState } from "react"
import { getAllAsistencias } from "../../api/asistencia.api"
import { AsistenciaCard } from "./AsistenciaCard"

export function AsistenciaList() {
    
    const [ asistencia, setAsistencia ] = useState()

    useEffect(() => {
        
        async function loadAsistencias() {
            const res = await getAllAsistencias()
            setAsistencia(res.data)
        }
        loadAsistencias()
    }, [])

    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-4">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-blue-800 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Clase
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Estudiante
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Acción
                            </th>
                        </tr>
                    </thead>
                    { asistencia && asistencia.map(asis => (
                        <AsistenciaCard key={asis.id} asis={asis}></AsistenciaCard>  
                    ))}
                </table>
            </div>
        </>
    )
}
