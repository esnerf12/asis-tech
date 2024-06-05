import axios from 'axios'

const planificacionApi = axios.create({
    baseURL: 'http://localhost:8000/api/v1/planificacion'
})

const asignaturaApi = axios.create({
    baseURL: 'http://localhost:8000/api/v1/asignatura'
})

const horarioApi = axios.create({
    baseURL: 'http://localhost:8000/api/v1/horario'
})

const tipoHorarioApi = axios.create({
    baseURL: 'http://localhost:8000/api/v1/tipo_horario'
})

const aulaApi = axios.create({
    baseURL: 'http://localhost:8000/api/v1/aula'
})

const seccionApi = axios.create({
    baseURL: 'http://localhost:8000/api/v1/seccion'
})

const claseApi = axios.create({
    baseURL: 'http://localhost:8000/api/v1/clase'
})

const asistenciaApi = axios.create({
    baseURL: 'http://localhost:8000/api/v1/asistencia'
})

const estudianteApi = axios.create({
    baseURL: 'http://localhost:8000/api/v1/estudiante'
})

/* Planificacion endpoints */
export const getAllPlanificaciones = () => planificacionApi.get('/')
export const createPlanificacion = (planificacion) => planificacionApi.post('/', planificacion)
export const deletePlanificacion = (id) => planificacionApi.delete(`${id}`)
export const updatePlanificacion = (id, planificacion) => planificacionApi.put(`/${id}/`, planificacion)
export const getPlanificacion = (id) => planificacionApi.get(`/${id}`)

/* Asignatura endpoints */
export const getAllAsignaturas = () => asignaturaApi.get('/')
export const createAsignatura = (asignatura) => asignaturaApi.post('/', asignatura)
export const deleteAsignatura = (id) => asignaturaApi.delete(`${id}`)
export const updateAsignatura = (id, asignatura) => asignaturaApi.put(`/${id}/`, asignatura)
export const getAsignatura = (id) => asignaturaApi.get(`/${id}`)

/* Horario endpoints */
export const getAllHorarios = () => horarioApi.get('/')
export const createHorario = (horario) => horarioApi.post('/', horario)
export const deleteHorario = (id) => horarioApi.delete(`${id}`)
export const updateHorario = (id, horario) => horarioApi.put(`/${id}/`, horario)
export const getHorario = (id) => horarioApi.get(`/${id}`)

/* Tipo Horario endpoints */
export const getAllTipoHorarios = () => tipoHorarioApi.get('/')
export const createTipoHorario = (tipo_horario) => tipoHorarioApi.post('/', tipo_horario)
export const deleteTipoHorario = (id) => tipoHorarioApi.delete(`${id}`)
export const updateTipoHorario = (id, tipo_horario) => tipoHorarioApi.put(`/${id}/`, tipo_horario)
export const getTipoHorario = (id) => tipoHorarioApi.get(`/${id}`)

/* Aula endpoints */
export const getAllAulas = () => aulaApi.get('/')
export const createAula = (aula) => aulaApi.post('/', aula)
export const deleteAula = (id) => aulaApi.delete(`${id}`)
export const updateAula = (id, aula) => aulaApi.put(`/${id}/`, aula)
export const getAula = (id) => aulaApi.get(`/${id}`)

/* Seccion endpoints */
export const getAllSecciones = () => seccionApi.get('/')
export const createSeccion = (seccion) => seccionApi.post('/', seccion)
export const deleteSeccion = (id) => seccionApi.delete(`${id}`)
export const updateSeccion = (id, seccion) => seccionApi.put(`/${id}/`, seccion)
export const getSeccion = (id) => seccionApi.get(`/${id}`)

/* Clase endpoints */
export const getAllClases = () => claseApi.get('/')
export const createClase = (clase) => claseApi.post('/', clase)
export const deleteClase = (id) => claseApi.delete(`${id}`)
export const updateClase = (id, clase) => claseApi.put(`/${id}/`, clase)
export const getClase = (id) => claseApi.get(`/${id}`)

/* Asistencia endpoints */
export const getAllAsistencias = () => asistenciaApi.get('/')
export const createAsistencia = (asistencia) => asistenciaApi.post('/', asistencia)
export const deleteAsistencia = (id) => asistenciaApi.delete(`${id}`)
export const updateAsistencia = (id, asistencia) => asistenciaApi.put(`/${id}/`, asistencia)
export const getAsistencia = (id) => asistenciaApi.get(`/${id}`)

/* Estudiante endpoints */
export const getAllEstudiantes = () => estudianteApi.get('/')
export const createEstudiante = (estudiante) => estudianteApi.post('/', estudiante)
export const deleteEstudiante = (id) => estudianteApi.delete(`${id}`)
export const updateEstudiante = (id, estudiante) => estudianteApi.put(`/${id}/`, estudiante)
export const getEstudiante = (id) => estudianteApi.get(`/${id}`)
