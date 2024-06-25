import { useEffect, useState } from "react"
import { createTipoSemana, updateTipoSemana } from "../api/asistencia.api"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.withCredentials = true

const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
})

export function Profile({ currentUser, setCurrentUser }) {
    
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [ profile, setProfile ] = useState()

    const token = localStorage.getItem("accessToken")

    const navigate = useNavigate()
    const params = useParams()

    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            await updateTipoSemana(params.id, data)
        } else {
            await createTipoSemana(data)
        }
        navigate('/profile')
    })

    const onSubmit2 = handleSubmit(async data => {
        if (params.id) {
            await updateTipoSemana(params.id, data)
        } else {
            await createTipoSemana(data)
        }
        navigate('/profile')
    })

    const getUserInfo = async () => {
        let response = await client.get('/api/user', {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization':'Token ' + token
            }
        })
        setProfile(response.data)
    }

    useEffect(() => {
        if (currentUser) {
            getUserInfo()
        }
    }, [])

    console.log(profile)
    
    return (
        <>
            <section className="grid grid-cols-2 bg-white rounded-xl gap-4 p-10 mx-10">
                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl">Perfil de usuario</h1>
                    <h2 className="text-xl">Cambio de contraseña</h2>
                    <form className="flex flex-col" onSubmit={onSubmit}>
                        <label className="flex justify-start items-center gap-2" htmlFor="old_password">
                            <span className="text-lg">Contraseña anterior</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle text-blue-900 cursor-pointer" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                            </svg>
                            { errors.old_password && <li className="text-red-600">La contraseña anterior es requerida.</li> }
                        </label>
                        <input className="border-2 border-black rounded-md p-2" type="password" {...register('old_password', {required: true})} />

                        <label className="flex justify-start items-center gap-2" htmlFor="password">
                            <span className="text-lg">Contraseña nueva</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle text-blue-900 cursor-pointer" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                            </svg>
                            { errors.password && <li className="text-red-600">La contraseña nueva es requerida.</li> }
                        </label>
                        <input className="border-2 border-black rounded-md p-2" type="password" {...register('password', {required: true})} />

                        <label className="flex justify-start items-center gap-2" htmlFor="password2">
                            <span className="text-lg">Repite la contraseña nueva</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle text-blue-900 cursor-pointer" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                            </svg>
                            { errors.password2 && <li className="text-red-600">Repetir la contraseña nueva es requerido.</li> }
                        </label>
                        <input className="border-2 border-black rounded-md p-2" type="password" {...register('password2', {required: true})} />

                        <button type="submit" className="border-2 border-blue-900 bg-white text-blue-900 px-4 py-2 rounded-lg mt-6">Enviar</button>
                    </form>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-xl">Cambio de PIN de seguridad</h2>
                    <form className="flex flex-col" onSubmit={onSubmit2}>
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
            </section>
        </>
    )
}
