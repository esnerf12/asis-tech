import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/asistech-logo.png'
import axios from 'axios'
import { useEffect, useState } from 'react'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.withCredentials = true

const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
})

export function Navigation({ currentUser, setCurrentUser }) {

    const [ colorOptions, setColorOptions ] = useState("bg-blue-400")
    
    const colors = [
        {
            "id": 1,
            "nombre": "azul",
            "color": "bg-blue-400",
        },
        {
            "id": 2,
            "nombre": "naranja",
            "color": "bg-orange-400",
        },
        {
            "id": 3,
            "nombre": "rojo",
            "color": "bg-red-400",
        },
    ]
    
    const navigate = useNavigate()

    function submitLogout(e) {
        e.preventDefault();
        client.post(
            "/api/logout",
            {withCredentials: true}
        ).then(function(res) {
            localStorage.removeItem("accessToken");
            setCurrentUser(false);
            navigate('/login')
        });
    }

    function handleColorOptions(e) {
        const newColor = e.target.value
        setColorOptions(newColor)
    }

    return (
        <>
            <nav className="grid grid-flow-col font-mono gap-8 m-5">
                <div className={'grid grid-cols-2 bg-blue-400 rounded-3xl shadow-xl px-10 py-3'}>
                    <Link to="/">
                        <img className="w-48 h-16 rounded-3xl" src={Logo} alt="Asistech logo design by AsistechTeam" />
                    </Link>
                    <div className='flex justify-end items-center gap-10'>
                        <select onChange={handleColorOptions} className='border-2 border-black rounded-full w-10 h-10' name="color_selector" id="color_selector">
                            {
                                colors && colors.map(e => {
                                    return <option className={e.color} key={e.id} value={e.color}>{e.nombre}</option>
                                })
                            }
                        </select>
                        { currentUser && (
                            <Link to={"/profile"} className="flex justify-end items-center">
                                <img className="w-10 rounded-full" src="https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" alt="icon" />
                            </Link>
                        )}
                    </div>
                </div>
                <div className="grid grid-cols-2 bg-slate-100 rounded-3xl shadow-xl px-5 py-3">
                    <div className="flex justify-center items-center gap-8">
                        { currentUser && (
                            <Link to="/home" className="flex justify-center items-center gap-1 px-5 py-4 rounded-2xl bg-slate-200">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
                                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
                                    <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
                                </svg>
                                <span className="font-bold">Inicio</span>
                            </Link>
                        )}
                        <Link to="/unexca" className="flex justify-center items-center gap-1 px-5 py-4 rounded-2xl bg-slate-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-building-fill-check" viewBox="0 0 16 16">
                                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514"/>
                                <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7.256A4.5 4.5 0 0 0 12.5 8a4.5 4.5 0 0 0-3.59 1.787A.5.5 0 0 0 9 9.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .39-.187A4.5 4.5 0 0 0 8.027 12H6.5a.5.5 0 0 0-.5.5V16H3a1 1 0 0 1-1-1zm2 1.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5m3 0v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5m3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5M7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5M4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
                            </svg>
                            <span className="font-bold">UNEXCA</span>
                        </Link>
                        <Link to="/acercade" className="flex justify-center items-center gap-1 px-5 py-4 rounded-2xl bg-slate-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                            </svg>
                            <span className="font-bold">Acercade</span>
                        </Link>
                    </div>
                    <div className="flex justify-end items-center gap-4">
                        { !currentUser ? (
                            <>
                                <Link to="/login" className="flex justify-center items-center gap-1 px-5 py-4 rounded-2xl bg-slate-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0z"/>
                                        <path fillRule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
                                    </svg>
                                    <span>Ingresar</span>
                                </Link>
                                <Link to="/register" className="flex justify-center items-center gap-1 px-5 py-4 rounded-2xl bg-blue-400">
                                    <span>Registrarse</span>
                                </Link>
                            </>
                        ) : (
                            <form onSubmit={e => submitLogout(e)}>
                                <button className='flex justify-center items-center gap-1 px-5 py-4 rounded-2xl bg-slate-200'>
                                    <span>Salir</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-bar-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8m-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5"/>
                                    </svg>
                                </button>
                            </form>
                        ) } 
                    </div>
                </div>
            </nav>
        </>
    )
}
