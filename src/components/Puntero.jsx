import { useEffect, useState } from "react";
import "../styles/Puntero.css";

const FollowMouse = () => {
    //Estado para almacenar la posición del puntero
    const [position, setPosition] = useState({ x: 0, y: 0 })

    //Se ejecuta cuando el componente se monta y cuando sus dependencias cambian, en este caso, enable
    useEffect(() => {
        const handleMouseMove = (evento) => {
            //Se obtienen las coordenadas del puntero
            const { clientX, clientY } = evento
            //Se actualiza el estado con las coordenadas del puntero
            setPosition({ x: clientX , y: clientY })
        }
        //Se añade el evento pointermove al window
        window.addEventListener('pointermove', handleMouseMove)
        //Se retorna una función que se ejecutará cuando el componente se desmonte o cuando sus dependencias cambien
        //Esto es necesario para que no se acumulen los eventos y se consuma memoria
        return () => {
            window.removeEventListener('pointermove', handleMouseMove)
        }
    }), [position] //No es necesario añadir dependencias, ya que cada vez que se modifique el estado de position, se ejecutará el useEffect

    return (
        <>
            <div
                className={'sombraPuntero'}
                style={{
                    transform: `translate(${position.x}px, ${position.y}px)`
                }}
            ></div>
        </>
    )
}
export default FollowMouse