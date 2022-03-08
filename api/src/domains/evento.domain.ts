import { FilterQuery } from "mongoose";
import { Evento} from "../models/evento.model";

export type EventosQuery = {
    categoria_id?: String;
}

export const lista_eventos = async () => {
    const eventos = Evento.find().lean();
    return eventos;
}

export const get_eventos = async (params: EventosQuery = {}) => {

    let query: FilterQuery<Evento> = {}

    if (params.categoria_id){
        query.categoria = params.categoria_id;
    }

    const eventos = await Evento.find(query).lean();
    return eventos;
}