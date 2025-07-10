import { PrismaClient } from "@/lib/generated/prisma";
import sampleData from "./sample-data";

async function main() {
  const prisma = new PrismaClient();
  await prisma.product.deleteMany();
<<<<<<< HEAD
  
=======
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verificationToken.deleteMany();
  await prisma.user.deleteMany();

>>>>>>> 5d287da8301694acd5694b0e22c6a76cd78a4080

  await prisma.product.createMany({data: sampleData.products});
  await prisma.user.createMany({data: sampleData.users});

  console.log('Database seeded successfully!');
}

main();