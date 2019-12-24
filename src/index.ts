import express from 'express';
import { Client } from 'pg';

async function postgresConnectionTest() {
  const client = new Client();

  let retries = 5;

  while (retries) {
    try {
      await client.connect();
      break;
    } catch (err) {
      console.log(err);
      console.log(`an error ocured trying to connect, ${retries} retries left`);
      retries--;
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
  }

  const res = await client.query('SELECT NOW()');

  console.log('now: ', res.rows[0].now);

  await client.end();
}

postgresConnectionTest();

const app = express();

app.get('/', (_, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('=================================');
  console.log('App listen on port 3000');
});
