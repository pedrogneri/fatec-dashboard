import { Account } from 'fatec-api';
let myAccount;

export default async function (req, res) {
  if (req.method === 'POST') {
    const {user, password} = req.body;
    myAccount = new Account();
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
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(getAccount());
  }
}

export const getAccount = async () => {
  const name = await myAccount?.getName();
  const schoolGrade = await myAccount?.getSchoolGrade();
  const disciplines = schoolGrade ? JSON.parse(JSON.stringify(schoolGrade.semesters[0].disciplines)) : [];
 
  return { name, disciplines, error: null };
}
