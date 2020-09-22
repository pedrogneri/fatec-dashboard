import { login, myAccount } from 'api';

export default function (req, res) {
  const {user, password} = req.body;

  login(user, password);

  if (myAccount.isLogged){
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.json({ message: 'ok' })
  }
}
