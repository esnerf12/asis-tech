import { useState, useEffect } from "react"
import { createPlanificacion, deletePlanificacion, updatePlanificacion, getPlanificacion, getAllSecciones, getAllAsignaturas, getAllAulas, getAllHorarios, getAllProfesores } from "../../api/asistencia.api"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"


export function PlanificacionFormPage() {
    
    const [ secciones, setSecciones ] = useState()
    const [ asignaturas, setAsignaturas ] = useState()
    const [ aulas, setAulas ] = useState()
    const [ horarios, setHorarios ] = useState()
    const [ profesores, setProfesores ] = useState()
    
    const { register, handleSubmit, formState: { errors }, setValue } = useForm()

    const navigate = useNavigate()
    const params = useParams()

    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            await updatePlanificacion(params.id, data)
        } else {
            await createPlanificacion(data)
        }
        navigate('/planificacion')
    })

    useEffect(() => {
        async function loadPlanificacion() {
            if (params.id) {
                const res = await getPlanificacion(params.id)
                setValue('seccion_id', res.data.seccion_id)
                setValue('asignatura_id', res.data.asignatura_id)
                setValue('aula_id', res.data.aula_id)
                setValue('horario_id', res.data.horario_id)
                setValue('profesor_id', res.data.profesor_id)
                setValue('tipo_semana', res.data.tipo_semana)
            }
        }
        loadPlanificacion()
    }, [])

    useEffect(() => {
        async function loadSecciones() {
            const res = await getAllSecciones()
            setSecciones(res.data)
        }
        loadSecciones()
    }, [])

    useEffect(() => {
        async function loadAsignaturas() {
            const res = await getAllAsignaturas()
            setAsignaturas(res.data)
        }
        loadAsignaturas()
    }, [])

    useEffect(() => {
        async function loadAulas() {
            const res = await getAllAulas()
            setAulas(res.data)
        }
        loadAulas()
    }, [])

    useEffect(() => {
        async function loadHorarios() {
            const res = await getAllHorarios()
            setHorarios(res.data)
        }
        loadHorarios()
    }, [])

    useEffect(() => {
        async function loadProfesores() {
            const res = await getAllProfesores()
            setProfesores(res.data)
        }
        loadProfesores()
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
                        <span className="text-xl border-b-2 border-blue-800">Crear Planificación</span>
                    </label>
                    <label className="flex justify-start items-center gap-2" htmlFor="seccion_id">
                        <span className="text-lg">Sección</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle text-blue-900 cursor-pointer" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                        </svg>
                        { errors.seccion_id && <li className="text-red-600">La sección es requerida.</li> }
                    </label>
                    <select className="border-2 border-black rounded-md p-2" name="seccion_id" id="seccion_id" {...register('seccion_id', {required: true})}>
                        {
                            secciones && secciones.map(sec => (
                                <option key={sec.id} value={sec.id}>{sec.codigo_seccion}</option>
                            ))
                        }
                    </select>

                    <label className="flex justify-start items-center gap-2" htmlFor="asignatura_id">
                        <span className="text-lg">Asignatura</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle text-blue-900 cursor-pointer" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                        </svg>
                        { errors.asignatura_id && <li className="text-red-600">La asignatura es requerida.</li> }
                    </label>
                    <select className="border-2 border-black rounded-md p-2" name="asignatura_id" id="asignatura_id" {...register('asignatura_id', {required: true})}>
                        {
                            asignaturas && asignaturas.map(asig => (
                                <option key={asig.id} value={asig.id}>{asig.nombre}</option>
                            ))
                        }
                    </select>

                    <label className="flex justify-start items-center gap-2" htmlFor="aula_id">
                        <span className="text-lg">Asignatura</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle text-blue-900 cursor-pointer" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                        </svg>
                        { errors.aula_id && <li className="text-red-600">El aula es requerida.</li> }
                    </label>
                    <select className="border-2 border-black rounded-md p-2" name="aula_id" id="aula_id" {...register('aula_id', {required: true})}>
                        {
                            aulas && aulas.map(aul => (
                                <option key={aul.id} value={aul.id}>{aul.codigo_aula}</option>
                            ))
                        }
                    </select>

                    <label className="flex justify-start items-center gap-2" htmlFor="horario_id">
                        <span className="text-lg">Horario</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle text-blue-900 cursor-pointer" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                        </svg>
                        { errors.horario_id && <li className="text-red-600">El horario es requerido.</li> }
                    </label>
                    <select className="border-2 border-black rounded-md p-2" name="horario_id" id="horario_id" {...register('horario_id', {required: true})}>
                        {
                            horarios && horarios.map(hor => (
                                <option key={hor.id} value={hor.id}>{hor.tipo_id}</option>
                            ))
                        }
                    </select>

                    <label className="flex justify-start items-center gap-2" htmlFor="profesor_id">
                        <span className="text-lg">Profesor</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle text-blue-900 cursor-pointer" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                        </svg>
                        { errors.profesor_id && <li className="text-red-600">El profesor es requerido.</li> }
                    </label>
                    <select className="border-2 border-black rounded-md p-2" name="profesor_id" id="profesor_id" {...register('profesor_id', {required: true})}>
                        {
                            profesores && profesores.map(prof => (
                                <option key={prof.id} value={prof.id}>{prof.persona_id}</option>
                            ))
                        }
                    </select>

                    <label className="flex justify-start items-center gap-2" htmlFor="tipo_semana">
                        <span className="text-lg">Tipo de semana</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle text-blue-900 cursor-pointer" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                        </svg>
                        { errors.tipo_semana && <li className="text-red-600">El tipo de semana es requerido.</li> }
                    </label>
                    <input className="border-2 border-black rounded-md p-2" type="text" {...register('tipo_semana', {required: true})} />

                    <button type="submit" className="border-2 border-blue-900 bg-white text-blue-900 px-4 py-2 rounded-lg mt-6">Registrar</button>

                    { params.id && <button onClick={async() => {
                        const accepted = window.confirm('Estás seguro?')
                        if (accepted) {
                            await deletePlanificacion(params.id)
                            navigate('/planificacion')
                        }
                    }} className="border-2 border-red-900 bg-white text-red-900 px-4 py-2 rounded-lg my-6">Eliminar</button>}
                </form>
            </div>
        </>
    )
}
