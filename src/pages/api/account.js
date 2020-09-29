import { Account } from 'fatec-api';
let myAccount = new Account();

export default async function (req, res) {
  return new Promise(resolve => {
    const {user, password} = req.body;
    myAccount.username = user;
    myAccount.password = password;

    myAccount.login().then(() => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({ message: 'ok' });
      return resolve();
    }).catch((err) => {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({ message: err });
      return resolve();
    });
  })
}

export const getAccount = async () => {
  const name = await myAccount?.getName();
  const schoolGrade = await myAccount?.getSchoolGrade();
  const disciplines = schoolGrade ? JSON.parse(JSON.stringify(schoolGrade.semesters[0].disciplines)) : [];
 
  return { name, disciplines, error: null };
}
