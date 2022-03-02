import { FastifyPluginAsync } from 'fastify';
import fastifyCors from 'fastify-cors';
import { connectDB } from './lib/db';
import { evento_router } from './routers/evento_router';
import { main_router } from './routers/main_router';
import fastifyBlipp from 'fastify-blipp';

export const main_app: FastifyPluginAsync = async (app) => {
  connectDB(app);

  // ALL URL
  // app.register(fastifyCors, {
  //   // put your options here
  // });
  await app.register(fastifyBlipp);

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

  await app.register(main_router);
  await app.register(evento_router, { prefix: '/evento' });

  app.blipp();
};
