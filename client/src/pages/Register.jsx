import axios from "axios"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Character3DRemoveBg  from '../assets/CharacterDeskoptRemoveBg.png'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.withCredentials = true

const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
})

export function Register({ setCurrentUser }) {
    
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [pin, setPin] = useState('');

    const navigate = useNavigate()

    function submitRegistration(e) {
        e.preventDefault();
        client.post(
          "/api/register",
          {
            email: email,
            username: username,
            password: password,
            pin: pin
          }
        ).then(function(res) {
          client.post(
            "/api/login",
            {
              email: email,
              password: password,
              pin: pin
            }
          ).then(function(res) {
            localStorage.setItem("accessToken", res.data.token)
            setCurrentUser(true);
            navigate('/home')
          });
        });
    }
    
    return (
        <>
          <section className="grid grid-cols-2 px-20 my-10">
            <div className="flex bg-white rounded-l-2xl">
              <img className="z-10 h-[560px] w-full rounded-r-2xl" src={Character3DRemoveBg} alt="character_3d" />
              <div className="absolute bg-blue-400 w-[360px] h-[640px] rounded-l-2xl"></div>
            </div>
            <form className="flex flex-col bg-white rounded-r-2xl h-full font-mono px-16 py-16" onSubmit={e => submitRegistration(e)}>
                <h1 className="select-none text-4xl py-4 text-end">Registro</h1>
                <div className="flex flex-col">
                  <label className="select-none py-2" htmlFor="email">Correo electrónico</label>
                  <div className="flex items-center bg-blue-400 rounded-r-xl">
                    <input className="w-full border-2 border-black p-2" type="text" placeholder="Ingresa el correo" value={email} onChange={e => setEmail(e.target.value)} required />
                    <div className="px-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="select-none py-2" htmlFor="username">Nombre de usuario</label>
                  <div className="flex items-center bg-blue-400 rounded-r-xl">
                    <input className="w-full border-2 border-black p-2" type="text" placeholder="Ingresa el nombre de usuario" value={username} onChange={e => setUsername(e.target.value)} required />
                    <div className="px-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="select-none py-2" htmlFor="password">Contraseña</label>
                  <div className="flex items-center bg-blue-400 rounded-r-xl">
                    <input className="w-full border-2 border-black p-2" type="password" placeholder="Ingresa la contraseña" value={password} onChange={e => setPassword(e.target.value)} required />
                    <div className="px-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-asterisk" viewBox="0 0 16 16">
                        <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="select-none py-2" htmlFor="pin">PIN</label>
                  <div className="flex items-center bg-blue-400 rounded-r-xl">
                    <input className="w-full border-2 border-black p-2" type="password" placeholder="Ingresa el PIN de seguridad" value={pin} onChange={e => setPin(e.target.value)} required />
                    <div className="px-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-asterisk" viewBox="0 0 16 16">
                        <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center pt-2">
                  <button className="w-full text-center bg-blue-400 my-2 p-4 hover:bg-slate-400 transition ease-in-out delay-150 hover:scale-105 hover:-translate-y-1 duration-300">Registrar</button>
                </div>
                <div className="text-center">
                  <span className="select-none">¿Ya tienes usuario? <Link className="border-b-2 border-blue-400 hover:border-slate-400 hover:text-slate-400" to="/login">Ingresa</Link></span>
                </div>
            </form>
          </section>
        </>
    )
}
