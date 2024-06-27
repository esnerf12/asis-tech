import Universidad  from '../assets/unexca.jpg'
import Estudiantes  from '../assets/estudiantes.jpg'

export function Unexca() {
    return (
        <>
            <div className="acercade-content relative md:flex">
                <div className="md:container text-justify md:p-9 md:m-8 p-6">
                    <h1 className="text-2xl border-b-4 border-orange-600 py-2 hover:animate-pulse">Nuestra universidad. (UNEXCA)</h1>
                    <p className="py-2">La Universidad Nacional Experimental de la Gran Caracas (UNEXCA), surge a partir de la fusión del Colegio Universitario de Caracas (CUC) y el Colegio Universitario Francisco de Miranda (Cufm).</p>
                    <p className="py-2">El 21 de noviembre de 2017, el presidente Nicolás Maduro, aprobó la creación de dicha institución, en una alocución realizada el día del estudiante universitario. </p>
                    <p className="py-2">El 27 de febrero de 2018, se publicó el Decreto Presidencial N° 3.293 en la Gaceta Oficial Extraordinaria N° 41.349, mediante el cual se estableció la creación de la Universidad Nacional Experimental de la Gran Caracas (UNEXCA).</p>
                    <p className='py-2'>Esta universidad se estableció en convenio con la Misión Alma Mater y tiene personalidad jurídica y patrimonio propio, independiente del Tesoro Nacional.</p>
                </div>
                <div className="md:container justify-center overflow-hidden">
                    <img className="mx-auto rounded-b-full rounded-l-full hover:scale-105 transition-all duration-500" src={Universidad} alt="img" />
                </div>
            </div>

            <div className="acercade-content relative md:flex">
                <div className="md:container justify-center overflow-hidden">
                    <img className="mx-auto rounded-r-full hover:scale-105 transition-all duration-500" src={Estudiantes} alt="img" />
                </div>
                <div className="md:container text-justify md:p-12 md:m-10 p-6">
                    <h1 className="text-2xl border-b-4 border-orange-600 py-2 hover:animate-pulse">Su infraestructura.</h1>
                    <p className="text-justify py-2"> Actualmente para la fecha dicha universidad cuenta con un universo de unos 6500 estudiantes diarios, distribuidos en distintos horarios de estudio (Mañana, Tarde y Noche), donde cada uno de estos estudiantes cuenta con acceso a recursos tecnológicos en función de su alcance económico y por ende de su poder adquisitivo.</p>
                    <p className="text-justify py-2"> La UNEXCA en su sede o núcleo Altagracia dispone de una cancha deportiva, anfiteatro, cantina y 45 aulas disponibles para que los estudiantes puedan recibir clases de manera presencial y donde 5 de estas aulas son laboratorios informáticos con al menos 20 PC’s de escritorios funcionales cada uno. </p>
                    <p className="text-justify py-2"> La misma institución cuenta con una plataforma tecnológica de mediana infraestructura con sistemas básicos para su funcionamiento y protección informática. </p>
                    <p className="text-justify py-2"> Se cuenta con agua, electricidad e internet, todos sujetos a las distintas anomalías en los servicios públicos que ya se consideran normales en la mayoría de comunidades del territorio nacional. </p>
                </div>
            </div>

            <div className="acercade-content relative md:flex mb-6 md:py-6 p-6">
                <div className="md:container justify-center overflow-hidden">
                    <h1 className="text-2xl border-b-4 border-orange-600 py-2 hover:animate-pulse">Localización.</h1>
                    <p className="text-justify py-2"> La UNEXCA sede Altagracia se encuentra ubicada en la misma dirección del antes llamado Colegio Universitario Francisco de Miranda, su dirección específica, Esquina Mijares, Avenida Oeste 3, Altagracia, Caracas 1010, 1010, Distrito Capital. </p>
                    <div className="md:container relative">
                        <img className="mb-4 rounded-r-full mt-16 hover:scale-105 transition-all duration-500" src={Universidad} alt="img" />
                    </div>
                </div>
                <div className="md:container justify-end overflow-hidden md:mx-9">
                    <div className="md:container relative">
                        <img className="mb-4 rounded-l-full hover:scale-105 transition-all duration-500" src={Universidad} alt="img" />
                    </div>
                </div>
            </div>
        </>
    )
}
