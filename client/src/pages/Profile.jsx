import { useEffect, useState } from "react"
import { ChangePassword } from "./ChangePassword"
import { ChangePin } from "./ChangePin"
import axios from 'axios'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.withCredentials = true

const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
})

export function Profile({ currentUser, setCurrentUser }) {
    
    const [ profile, setProfile ] = useState()

    const token = localStorage.getItem("accessToken")

    const getUserInfo = async () => {
        let response = await client.get('/api/user', {
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            }
        })
        setProfile(response.data)
    }

    useEffect(() => {
        if (currentUser) {
            getUserInfo()
        }
    }, [])
    
    return (
        <>
            <section className="grid grid-cols-2 bg-white rounded-xl gap-4 p-10 mx-10">
                <div className="flex flex-col gap-4 px-8 py-6">
                    <h1 className="text-3xl">Perfil de usuario</h1>
                    <h2 className="text-xl">Datos del usuario</h2>
                    <form className="flex flex-col gap-1">
                        <label className="flex justify-start items-center gap-2" htmlFor="email">
                            <span className="text-lg">Correo electrónico</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle text-blue-900 cursor-pointer" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                            </svg>
                        </label>
                        <input className="border-2 border-black rounded-md p-2" value={profile && profile.user.email} onChange={ e => setProfile({'email': e.target.value})} type="email" readOnly/>

                        <label className="flex justify-start items-center gap-2" htmlFor="username">
                            <span className="text-lg">Nombre de usuario</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle text-blue-900 cursor-pointer" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                            </svg>
                        </label>
                        <input className="border-2 border-black rounded-md p-2" value={profile && profile.user.username} onChange={ e => setProfile({'username': e.target.value}) } type="text" readOnly/>
                    </form>
                </div>
                <ChangePassword currentUserId={profile && profile.user.user_id} token={token}></ChangePassword>
                <div></div>
                <ChangePin currentUserId={profile && profile.user.user_id} token={token}></ChangePin>
            </section>
        </>
    )
}
