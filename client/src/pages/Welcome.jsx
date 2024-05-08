import AppGoogleStore  from '../assets/app-and-google-store.png'
import Universitarios  from '../assets/universitarios.png'

export function Welcome() {
    return (
        <>
            <section className="grid grid-cols-2 mx-5">
                <div className="flex flex-col p-10 gap-5">
                    <div className="flex justify-end">
                        <h1 className="text-9xl font-mono">ASISTECH</h1>
                    </div>
                    <div className="">
                        <p className="text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate officiis iure voluptates alias dolorum aperiam ab aspernatur est. Explicabo facere voluptatibus suscipit nisi cum vel magnam dignissimos repellat corrupti. Sit!</p>
                    </div>
                    <div className="flex">
                        <img className='w-96' src={ AppGoogleStore } alt="app-and-google-store" />
                    </div>
                </div>
                <div className="pt-28">
                    <img className="w-screen h-full" src={ Universitarios } alt="img-example" />
                </div>
            </section>
        </>
    )
}
