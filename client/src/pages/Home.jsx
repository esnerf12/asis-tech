import { Card } from "../components/Card" 

export function Home(){
    return (
        <>
            <div className='flex flex-wrap gap-5 mx-5 my-10'>
                <Card nombre={'Planificaciones'} cantidad={10}></Card>
                <Card nombre={'Horarios'} cantidad={2}></Card>
                <Card nombre={'Asignaturas'} cantidad={10}></Card>
                <Card nombre={'Secciones'} cantidad={10}></Card>
            </div>
        </>
    )
}
