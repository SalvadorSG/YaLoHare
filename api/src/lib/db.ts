import mongoose from 'mongoose';
import { DB_URL } from '../config';
import { FastifyInstance } from 'fastify';

export const connectDB = async (app: FastifyInstance) =>
  mongoose.connect(DB_URL).then(() => {
    app.log.info(`📦 Connected to ${DB_URL}`);
    return {
      close: () => mongoose.disconnect(),
    };
  });
