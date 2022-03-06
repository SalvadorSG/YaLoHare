import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify';
import { iCategoria } from '../models/categoria.model';
import { Evento } from '../models/evento.model';

type Myrequest = FastifyRequest<{
  Body: { nombre: string; fecha: Date, categoria: iCategoria['_id']};
  Params: { id: string };
}>;

export const evento_router: FastifyPluginAsync = async (app) => {
  
  app.get('/', async () => {
    const eventos = await Evento.find().lean();
    return eventos;
  });
  
  app.post('/', async (request: Myrequest, reply: FastifyReply) => {
    const { nombre, fecha } = request.body;
    const { id } = request.params;
    const evento = new Evento({ nombre, fecha, id });
    await evento.save();
    return evento;
  });
  
  // CRU(D): Delete
  app.get('/:id/delete', async (request: Myrequest, reply: FastifyReply) => {
    const { id } = request.params;
    await Evento.findByIdAndDelete(id);
    return { status: 'delete' };
  });
};
