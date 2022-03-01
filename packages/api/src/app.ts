/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */
import { FastifyPluginAsync } from 'fastify';
import fastifyCors from 'fastify-cors';
import { connectDB } from './lib/db';
import { evento_router } from './routers/evento_router';
import { main_router } from './routers/main_router';

export const main_app: FastifyPluginAsync = async (app) => {
  connectDB();

  // ALL URL
  // app.register(fastifyCors, {
  //   // put your options here
  // });

  app.register(fastifyCors, {
    origin: (origin, cb) => {
      if (/localhost/.test(origin)) {
        //  Request from localhost will pass
        cb(null, true);
        return;
      }
      // Generate an error on other origins, disabling access
      cb(null, false);
    },
  });

  app.register(main_router);
  app.register(evento_router, { prefix: '/ingredients' });
};
