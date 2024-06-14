import { useEffect, useState } from "react"
import { getAllSecciones } from "../../api/asistencia.api"
import { SeccionCard } from "./SeccionCard"

export function SeccionList() {
    
    const [ seccion, setSeccion ] = useState()

    useEffect(() => {
        async function loadSecciones() {
            const res = await getAllSecciones()
            setSeccion(res.data)
        }
        loadSecciones()
    }, [])

    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-4">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-blue-800 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Código de sección
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Acción
                            </th>
                        </tr>
                    </thead>
                    { seccion && seccion.map(sec => (
                        <SeccionCard key={sec.id} sec={sec}></SeccionCard>
                    ))}
                </table>
            </div>
        </>
    )
}
