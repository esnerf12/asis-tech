import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Character3DRemoveBg  from '../assets/CharacterRemoveBg.png'

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

export function Login({ setCurrentUser }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate()
    
    function submitLogin(e) {
        e.preventDefault();
        client.post(
          "/api/login",
          {
            email: email,
            password: password
          }
        ).then(function(res) {
          setCurrentUser(true);
          navigate('/home')
        });
    }
    
    return (
        <>
          <section className="grid grid-cols-2 px-20 my-10">
              <form className="flex flex-col bg-white rounded-l-2xl h-full font-mono px-16 py-20" onSubmit={e => submitLogin(e)}>
                  <h1 className="select-none text-4xl py-6">Ingreso</h1>
                  <div className="flex flex-col">
                      <label className="select-none py-2" htmlFor="email">Correo electrónico</label>
                      <div className="flex items-center bg-blue-400 rounded-l-xl">
                        <div className="px-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                          </svg>
                        </div>
                        <input className="w-full border-2 border-black p-2" type="text" placeholder="Ingresa el correo" value={email} onChange={e => setEmail(e.target.value)} required />
                      </div>
                  </div>
                  <div className="flex flex-col">
                      <label className="select-none py-2" htmlFor="email">Contraseña</label>
                      <div className="flex items-center bg-blue-400 rounded-l-xl">
                        <div className="px-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-asterisk" viewBox="0 0 16 16">
                            <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1"/>
                          </svg>
                        </div>
                        <input className="w-full border-2 border-black p-2" type="password" placeholder="Ingresa la contraseña" value={password} onChange={e => setPassword(e.target.value)} required />
                      </div>
                  </div>
                  <div className="flex justify-center pt-2">
                      <button className="w-full text-center bg-blue-400 my-2 p-4 hover:bg-slate-400 transition ease-in-out delay-150 hover:scale-105 hover:-translate-y-1 duration-300">Ingresar</button>
                  </div>
                  <div className="text-center">
                    <span className="select-none">¿Aún no te registras? <Link className="border-b-2 border-blue-400 hover:border-slate-400 hover:text-slate-400" to="/register">Regístrate</Link></span>
                  </div>
              </form>
              <div className="flex bg-white justify-end rounded-r-2xl">
                <img className="z-10 h-[560px] w-full rounded-r-2xl" src={Character3DRemoveBg} alt="character_3d" />
                <div className="absolute bg-blue-400 w-[360px] h-[560px] rounded-r-2xl"></div>
              </div>
          </section>
        </>
    )
}
