import AccesDenied from '../assets/acces_denied.png'

export function SinAcceso() {
    return (
        <>
            <section className="grid grid-flow-col gap-10 justify-center items-center bg-white rounded-2xl p-10 mx-10">
                <div className='select-none'>
                    <h1 className='text-7xl text-orange-400 py-4'>Opsss.</h1>
                    <span className='text-xl'><strong className='text-blue-700'>No tienes acceso a este servicio.</strong> Para solicitarlo comunicate con los administradores de ASISTECH.</span>
                </div>
                <div className='flex justify-center items-center select-none'>
                    <img className='w-96 py-5' src={AccesDenied} alt="access_denied" />
                </div>
            </section>
        </>
    )
}
