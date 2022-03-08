import { FastifyPluginAsync } from 'fastify';

export const main_router: FastifyPluginAsync = async (app) => {
  app.get('/', async () => ({
    SECRETOS_DE_ESTADO: ' 📦 información de la base de datos',
  }));
};
