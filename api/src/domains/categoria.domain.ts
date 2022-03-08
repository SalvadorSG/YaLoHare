import { Categoria} from "../models/categoria.model";

export const lista_calista_eventostegorias = async () => {
    const categorias = await Categoria.find().lean();
    return categorias;
}