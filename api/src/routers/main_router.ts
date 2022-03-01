/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import { FastifyPluginAsync } from 'fastify';

export const main_router: FastifyPluginAsync = async (app) => {
  app.get('/', async () => ({ hello: 'world' }));
};
