import { Account } from 'fatec-api';
let myAccount = new Account();

export default async function (req, res) {
  if (req.method === 'POST') {
    const {user, password} = req.body;
    myAccount.username = user;
    myAccount.password = password;

    myAccount.login().then(() => {
      res.status(200).json({ message: 'ok' });
    }).catch(() => {
      res.status(401).json({ error: 'Usuário ou senha incorretos' });
    });
  } else {
    try {
      if (!myAccount.isLogged()) {
        res.status(401).json({ error: 'Você precisa estar logado' });
      } else {
        const name = await myAccount?.getName();
        const schoolGrade = await myAccount?.getSchoolGrade();
        const disciplines = schoolGrade ? JSON.parse(JSON.stringify(schoolGrade.semesters[0].disciplines)) : [];
  
        res.status(200).json({ name, disciplines, error: null });
      }
    } catch(err) {
      res.status(500).json({ error: err });
    }
  }
}
