import { useEffect, useState } from "react"
import { getAllEstudiantes } from "../../api/asistencia.api"
import { EstudianteCard } from "./EstudianteCard"

export function EstudianteList() {
    
    const [ estudiante, setEstudiante ] = useState()

    useEffect(() => {
        async function loadEstudiante() {
            const res = await getAllEstudiantes()
            setEstudiante(res.data)
        }
        loadEstudiante()
    }, [])

    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-4">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-blue-800 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Persona
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Sección
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Usuario
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Acción
                            </th>
                        </tr>
                    </thead>
                    { estudiante && estudiante.map(est => (
                        <EstudianteCard key={est.id} est={est}></EstudianteCard>
                    ))}
                </table>
            </div>
        </>
    )
}
