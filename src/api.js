import { Account } from 'fatec-api';
export let myAccount = { name: 'Pedro' };

export const login = (login, password) => {
  myAccount = new Account(login, password);
};
