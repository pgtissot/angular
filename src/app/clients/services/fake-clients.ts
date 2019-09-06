import { Client } from 'src/app/shared/models/client';

export const fakeClientsCollection: Client[] = [
  new Client({
    id: 'lkjsdf',
    name: 'Machin Bidule',
    email: 'mb@qqpat.com'
  }),
  new Client({
    id: 'sdfs',
    name: 'Truc Zorglub',
    email: 'tz@ailleurs.com'
  }),
];
