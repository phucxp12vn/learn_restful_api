import { Request, Response } from 'express';

interface User {
  id: number;
  name: string;
}

const dummyDataUser: User[] = [
  { id: 1, name: 'ABC' },
  { id: 2, name: 'DEF' },
  { id: 3, name: 'GHJ' },
];

export const list = (req: Request, res: Response): void => {
  res.json(dummyDataUser);
};

export const get = (req: Request, res: Response): void => {
  const { id } = req.params;

  const user = dummyDataUser.find((user) => user.id === +id);

  if (!user) {
    res.status(404).json({ message: 'User not found!' });
  }

  res.json(user);
};

export const create = (req: Request, res: Response): void => {
  const { name } = req.body;

  const isExistedUser = dummyDataUser.find((user) => user.name === name);
  if (isExistedUser) {
    res.status(400).json({ message: 'User is existed!' });
  }

  const newUser: User = {
    id: dummyDataUser.length + 1,
    name,
  };
  dummyDataUser.push(newUser);

  res.status(201).json(newUser);
};

export const update = (req: Request, res: Response): void => {
  const { name } = req.body;

  const user = dummyDataUser.find((user) => user.id === +req.params.id);

  if (!user) {
    res.status(404).json({ message: 'User not found.' });
    return;
  }

  user.name = name;

  res.json({ message: 'User updated successfully.', user });
};

export const remove = (req: Request, res: Response): void => {
  const userIndex = dummyDataUser.findIndex((user) => user.id === +req.params.id);
  if (userIndex === -1) {
    res.status(404).json({ message: 'User not found.' });
    return;
  }

  dummyDataUser.splice(userIndex, 1);

  res.json({ message: 'User deleted successfully.' });
};
