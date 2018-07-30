import 'reflect-metadata';
import { createConnection } from 'typeorm';

export default async function initializeDBConnection() {
  try {
    await createConnection();
  } catch (error) {
    console.error(error);
  }
}