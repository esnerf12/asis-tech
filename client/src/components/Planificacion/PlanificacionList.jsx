import { useEffect, useState } from "react"
import { getAllPlanificaciones } from "../../api/asistencia.api"
import { PlanificacionCard } from "./PlanificacionCard"

export function PlanificacionList() {
    
    const [ planificacion, setPlanificacion ] = useState()

    useEffect(() => {
        async function loadPlanificacion() {
            const res = await getAllPlanificaciones()
            setPlanificacion(res.data)
        }
        loadPlanificacion()
    }, [])

    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-4">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-blue-800 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Sección
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Asignatura
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Aula
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Horario
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Profesor
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Tipo de semana
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Acción
                            </th>
                        </tr>
                    </thead>
                    { planificacion && planificacion.map(pla => (
                        <PlanificacionCard key={pla.id} pla={pla}></PlanificacionCard>
                    ))}
                </table>
            </div>
        </>
    )
}
