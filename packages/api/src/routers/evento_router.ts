/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify';
import { Evento } from '../models/evento.model';

type Myrequest = FastifyRequest<{
  Body: { nombre: string; fecha: Date};
  Params: { id: string };
}>;

export const evento_router: FastifyPluginAsync = async (app) => {
  app.get('/', async () => {
    const eventos = await Evento.find().lean();
    return eventos;
  });
  app.post('/', async (request: Myrequest, reply: FastifyReply) => {
    const { nombre, fecha } = request.body;
    const evento = new Evento({ nombre, fecha });
    await evento.save();
    return evento;
  });
  app.get('/:id/delete', async (request: Myrequest, reply: FastifyReply) => {
    const { id } = request.params;
    await Evento.findByIdAndDelete(id);
    return { status: 'delete' };
  });
};
