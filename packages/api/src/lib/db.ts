/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/prefer-default-export */
import mongoose from 'mongoose';
import { DB_URL } from '../config';

export const connectDB = async () =>
  mongoose.connect(DB_URL).then(() => {
    console.log(`📦 Connected to ${DB_URL}`);
    return {
      close: () => mongoose.disconnect(),
    };
  });
