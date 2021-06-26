import { Response, Request } from 'express';
import createUser from './services/createUser';

export function helloWorld (request: Request, response: Response) {
  const user = createUser({ 
    name: 'Willian',
    email: 'willian.s.praciano@gmail.com',
    password: '123456',
		techs: [
			'Node.js',
			'ReactJS',
			'React Native',
			{ title: 'JavaScript', experience: 60 },
		],
  });

  console.log(user);

  return response.json({ message: 'Hello World'});

}