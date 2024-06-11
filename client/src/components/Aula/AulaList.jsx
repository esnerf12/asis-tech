import { useEffect, useState } from "react"
import { getAllAulas } from "../../api/asistencia.api"
import { AulaCard } from "./AulaCard"

export function AulaList() {
    
    const [ aula, setAula ] = useState()

    useEffect(() => {
        
        async function loadAulas() {
            const res = await getAllAulas()
            setAula(res.data)
        }
        loadAulas()
    }, [])

    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-4">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-blue-800 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Código de aula
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Acción
                            </th>
                        </tr>
                    </thead>
                    { aula && aula.map(aul => (
                        <AulaCard key={aul.id} aul={aul}></AulaCard>
                    ))}
                </table>
            </div>
        </>
    )
}
