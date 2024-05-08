export function Card({ nombre, cantidad }) {
    return (
        <>
            <div className="flex flex-col w-[370px] bg-white rounded-2xl shadow-xl p-5">
                <div className="py-4">
                    <h2 className="text-3xl">{ nombre }</h2>
                </div>
                <div className="flex justify-end py-5">
                    <span className="text-lg">Cantidad: { cantidad }</span> 
                </div>
                <div>
                    <button className="bg-blue-400 w-full rounded-2xl text-white p-2">Ver más</button>
                </div>
            </div>
        </>
    )
}
