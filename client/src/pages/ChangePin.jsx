import { useState } from "react"
import { updateUserPin } from "../api/asistencia.api"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

export function ChangePin({ currentUserId, token }) {
    
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [ error, setError ] = useState()
    const [ success, setSuccess ] = useState()

    const navigate = useNavigate()

    const onSubmit = handleSubmit(async data => {
        if (currentUserId) {
            try {
                await updateUserPin(currentUserId, data, token)
                setSuccess('El PIN se ha actualizado con exito.')
                setError(false)
            } catch(e) {
                const error = e.response.data
                const newError = error.pin ? error.pin[0] : error.old_pin.old_pin
                setError(newError)
                setSuccess(false)
            }
        }
        navigate('/profile')
    })
    
    return (
        <>
            <div className="flex flex-col gap-4 px-8 py-6">
                <h2 className="text-xl">Cambio de PIN de seguridad</h2>
                <form className="flex flex-col gap-1" onSubmit={onSubmit}>
                    <div className="flex justify-center items-center bg-orange-300">
                        { error && <span>{error}</span> }
                    </div>
                    <div className="flex justify-center items-center bg-green-300">
                        { success && <span>{success}</span> }
                    </div>
                    <label className="flex justify-start items-center gap-2" htmlFor="old_pin">
                        <span className="text-lg">PIN anterior</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle text-blue-900 cursor-pointer" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                        </svg>
                        { errors.old_pin && <li className="text-red-600">El pin anterior es requerido.</li> }
                    </label>
                    <input className="border-2 border-black rounded-md p-2" type="password" {...register('old_pin', {required: true})} />

                    <label className="flex justify-start items-center gap-2" htmlFor="pin">
                        <span className="text-lg">PIN nuevo</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle text-blue-900 cursor-pointer" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                        </svg>
                        { errors.pin && <li className="text-red-600">El pin nuevo es requerido.</li> }
                    </label>
                    <input className="border-2 border-black rounded-md p-2" type="password" {...register('pin', {required: true})} />

                    <label className="flex justify-start items-center gap-2" htmlFor="pin2">
                        <span className="text-lg">Repite el pin nuevo</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle text-blue-900 cursor-pointer" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                        </svg>
                        { errors.pin2 && <li className="text-red-600">Repetir el pin nuevo es requerido.</li> }
                    </label>
                    <input className="border-2 border-black rounded-md p-2" type="password" {...register('pin2', {required: true})} />

                    <button type="submit" className="border-2 border-blue-900 bg-white text-blue-900 px-4 py-2 rounded-lg mt-6">Enviar</button>
                </form>
            </div>
        </>
    )
}