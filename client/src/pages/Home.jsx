import { Card } from "../components/Card" 

export function Home(){
    return (
        <>
            <section className='flex flex-wrap gap-5 mx-5 my-10'>
                <Card nombre={'Planificaciones'} cantidad={10} link={'/planificacion'}></Card>
                <Card nombre={'Horarios'} cantidad={2} link={'/horario'}></Card>
                <Card nombre={'Asignaturas'} cantidad={10} link={'/asignatura'}></Card>
                <Card nombre={'Secciones'} cantidad={10} link={'/seccion'}></Card>
            </section>
        </>
    )
}
