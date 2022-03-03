import React, {useState} from "react";
import { DatePicker } from "@material-ui/pickers";

export const Fecha = () => {
    const [fechaSeleccionada, cambiarFechaSeleccionada] = useState(new Date())
    return (
        <div className="contenedor">
            <div className="grupo">
                <DatePicker value={fechaSeleccionada} onChange={cambiarFechaSeleccionada}/>
            </div>
        </div>
    )
}