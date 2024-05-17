import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
            <form className="flex flex-col gap-2 bg-slate-200 mx-72 my-10 px-40 py-20" onSubmit={e => submitLogin(e)}>
                <div className="flex flex-col">
                    <label className="p-2" htmlFor="email">Correo electrónico</label>
                    <input className="border-2 border-black rounded-md p-2" type="text" placeholder="Ingresa el correo" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="flex flex-col">
                    <label className="p-2" htmlFor="email">Contraseña</label>
                    <input className="border-2 border-black rounded-md p-2" type="password" placeholder="Ingresa la contraseña" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="flex justify-center">
                    <button className="text-white text-center rounded-xl bg-blue-900 my-2 p-4">Ingresar</button>
                </div>
            </form>
        </>
    )
}
