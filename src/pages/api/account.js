import { login, myAccount } from 'api';

export default async function (req, res) {
  if (req.method === 'POST') {
    const {user, password} = req.body;
    login(user, password);
    sleep(600);

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.json({ message: 'ok' })
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(getAccount());
  }
}

export const getAccount = async () => {
  if(!myAccount) {
    return { name: '', disciplines: [], error: 'Not logged' };
  }

  const name = await myAccount.getName();
  const schoolGrade = await myAccount.getSchoolGrade();
  const disciplines = JSON.parse(JSON.stringify(schoolGrade.semesters[0].disciplines));
 
  return { name, disciplines, error: null };
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}