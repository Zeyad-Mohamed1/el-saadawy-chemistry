import { PrismaClient, Prisma } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput = {
  firstName: 'admin',
  lastName: 'admin',
  studentNumber: '01284256801',
  parentNumber: '01284256801',
  governorate: 'القاهرة',
  yearOfStudy: '2025',
  password: bcrypt.hashSync('R@r01284256801', 10),
  isAdmin: true,
};

export async function main() {
  try {
    const user = await prisma.user.findUnique({
      where: {
        studentNumber: '1234567890',
      },
    });

    if (user) {
      console.log('User already exists');
    } else {
      await prisma.user.create({
        data: userData,
      });
      console.log('Seed completed successfully');
    }
  } catch (error) {
    console.error('Error during seeding:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
