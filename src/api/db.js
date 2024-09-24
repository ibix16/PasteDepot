
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

const initializeDB = async () => {
  const db = await open({
    filename: './pastes.db',
    driver: sqlite3.Database
  });

  
  await db.exec(`
    CREATE TABLE IF NOT EXISTS pastes (
      id TEXT PRIMARY KEY,
      content TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  return db;
};

export default initializeDB;


/*
handles the connection to SQLite
*/