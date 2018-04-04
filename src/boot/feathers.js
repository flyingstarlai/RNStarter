import axios from 'axios';
import feathers from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client';
import authentication from '@feathersjs/authentication-client';
import { AsyncStorage } from 'react-native';

const host = rest('http://188.166.187.209:3030');

export const app = feathers()
  .configure(host.axios(axios))
  .configure(authentication({ storage: AsyncStorage }));

export const usersService = app.service('users');
