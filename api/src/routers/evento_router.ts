import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify';
import { iCategoria } from '../models/categoria.model';
import { Evento } from '../models/evento.model';
import { hasUser } from '../tools/hasUser';

type Myrequest = FastifyRequest<{
  Body: { nombre: string; fecha: Date; categoria: iCategoria['_id'] };
  Params: { id: string };
}>;

// export const evento_router: FastifyPluginAsync = async (app) => {
//   app.get('/', async (req) => {
//     const eventos = await Evento.find().lean();
//     return eventos;
//   });

export const evento_router: FastifyPluginAsync = async (app) => {
  // Nos da todos los eventos si estamos correctamente logueados
  app.get('/', async (req) => {
    const user = await hasUser(req);
    if (user) {
      const evento = await Evento.find().lean();
      return evento;
    }
    return [];
  });

  app.post('/', async (request: Myrequest, reply: FastifyReply) => {
    const { nombre, fecha, categoria } = request.body;
    const { id } = request.params;
    const evento = new Evento({ nombre, fecha, categoria });
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
