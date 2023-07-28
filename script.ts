const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // Prisma queries here
  const newUser = await prisma.user.create({
    data: {
      firstName: "Bobby",
      lastName: "Lee",
      age: 54,
    },
  });
  console.log(newUser);
}

main()
  .catch((e) => {
    console.log("Error!" + e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
