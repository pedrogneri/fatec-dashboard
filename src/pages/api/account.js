import { Account } from 'fatec-api';
let myAccount = new Account();

export default async function (req, res) {
  if (req.method === 'POST') {
    const {user, password} = req.body;
    myAccount.username = user;
    myAccount.password = password;

    myAccount.login().then(() => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({ message: 'ok' });
    }).catch((err) => {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({ message: err });
    });
  } else {
    try {
      const name = await myAccount?.getName();
      const schoolGrade = await myAccount?.getSchoolGrade();
      const disciplines = schoolGrade ? JSON.parse(JSON.stringify(schoolGrade.semesters[0].disciplines)) : [];
    
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({ name, disciplines, error: null });
    } catch(err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({ name: null, disciplines: [], error: err });
    }
  }
}
