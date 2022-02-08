import { prisma } from '../../lib/prisma';

interface ICreateUser {
  name: string;
  email: string;
  image: string;
}

export async function createUser(user: ICreateUser) {
  await prisma.user.create({
    data: user,
  });
}

export async function userExistsByEmail(email?: string): Promise<boolean> {
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });
  return !!user;
}
