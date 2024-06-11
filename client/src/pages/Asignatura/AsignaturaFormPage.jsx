import { useState, useEffect } from "react"
import { createAsignatura, deleteAsignatura, updateAsignatura, getAsignatura } from "../../api/asistencia.api"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"


export function AsignaturaFormPage() {
    
    const { register, handleSubmit, formState: { errors }, setValue } = useForm()

    const navigate = useNavigate()
    const params = useParams()

    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            await updateAsignatura(params.id, data)
        } else {
            await createAsignatura(data)
        }
        navigate('/asignatura')
    })

    useEffect(() => {
        async function loadAsignatura() {
            if (params.id) {
                const res = await getAsignatura(params.id)
                setValue('nombre', res.data.nombre)
            }
        }
        loadAsignatura()
    }, [])
    
    return (
        <>
            <div className="">
                <form className="flex flex-col gap-2 px-80 py-2" onSubmit={onSubmit}>
                    <label className="flex justify-center items-center gap-2 py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-badge" viewBox="0 0 16 16">
                            <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                            <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492z"/>
                        </svg>
                        <span className="text-xl border-b-2 border-blue-800">Crear asignatura</span>
                    </label>
                    <label className="flex justify-start items-center gap-2" htmlFor="nombre">
                        <span className="text-lg">Nombre</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle text-blue-900 cursor-pointer" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                        </svg>
                        { errors.cedula && <li className="text-red-600">El nombre es requerido.</li> }
                    </label>
                    <input className="border-2 border-black rounded-md p-2" type="text" {...register('nombre', {required: true})} />

                    <button type="submit" className="border-2 border-blue-900 bg-white text-blue-900 px-4 py-2 rounded-lg mt-6">Registrar</button>

                    { params.id && <button onClick={async() => {
                        const accepted = window.confirm('Estás seguro?')
                        if (accepted) {
                            await deleteAsignatura(params.id)
                            navigate('/asignatura')
                        }
                    }} className="border-2 border-red-900 bg-white text-red-900 px-4 py-2 rounded-lg my-6">Eliminar</button>}
                </form>
            </div>
        </>
    )
}
