import { useEffect, useState } from "react"
import { getAllAsignaturas } from "../../api/asistencia.api"
import { AsignaturaCard } from "./AsignaturaCard"

export function AsignaturaList() {
    
    const [ asignatura, setAsignatura ] = useState()
    const [ searchTxt, setSearchTxt ] = useState()

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
                <div className="flex items-center w-80 bg-blue-400 rounded-l-xl my-2">
                    <div className="px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    </div>
                    <input className="w-80 p-2" type="search" placeholder="Buscar..." onChange={e => setSearchTxt(e.target.value)}/>
                </div>
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
                    { asignatura && asignatura.filter((item) => {
                        return searchTxt && searchTxt.toLowerCase() ? item.nombre.toLowerCase().includes(searchTxt) : item
                    }).map(asig => (
                        <AsignaturaCard key={asig.id} asig={asig}></AsignaturaCard>  
                    ))
                    }
                </table>
            </div>
        </>
    )
}
