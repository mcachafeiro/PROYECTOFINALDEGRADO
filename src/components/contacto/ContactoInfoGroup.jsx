import { ContactoInfo } from "./ContactoInfo"
import { TituloUbicacionVista } from "./TituloUbicacionVista"
import { CONTACTO } from "../../utils/consts.js"
import "../../styles/contacto/ContactoInfoGroup.css"

export function ContactoInfoGroup() {

    const [ tituloUbicacion, ...arrInfo ] = CONTACTO;
    
    return (
        <section className='contacto-info-group'>
            <TituloUbicacionVista titulo={tituloUbicacion} />
            {
                arrInfo.map((info, index) => {
                    const {titulo, descripcion} = info;
                    return (
                        <ContactoInfo key={index} titulo={titulo} descripcion={descripcion} />
                    )
                })
            }
        </section>
    )
}
