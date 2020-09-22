import { Account } from 'fatec-api';
export let myAccount;

export const login = (login, password) => {
  myAccount = new Account(login, password);
};
