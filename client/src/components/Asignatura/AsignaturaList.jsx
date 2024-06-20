import { useEffect, useState } from "react"
import { getAllAsignaturas } from "../../api/asistencia.api"
import { AsignaturaCard } from "./AsignaturaCard"

export function AsignaturaList({ searchTxt }) {
    
    const [ asignatura, setAsignatura ] = useState()

    useEffect(() => {
        async function loadAsignaturas() {
            const res = await getAllAsignaturas()
            setAsignatura(res.data)
        }
        loadAsignaturas()
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
                                Acción
                            </th>
                        </tr>
                    </thead>
                    { asignatura && asignatura.map(asig => (
                        <AsignaturaCard key={asig.id} asig={asig}></AsignaturaCard>  
                    ))}
                </table>
            </div>
        </>
    )
}
