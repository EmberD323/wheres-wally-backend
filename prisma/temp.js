const { PrismaClient,Prisma } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  const deleteAll = await prisma.coords.deleteMany({
  })
  const coord1 = await prisma.coords.create({
    data: {
      x:  49.5559,
      y: 36.5242,
      character: 'Wally'
    },
  })
  const coord2 = await prisma.coords.create({
    data: {
      x: 71.03,
      y: 40.0114,
      character: 'Wenda'
    }
  })

    const all =await prisma.coords.findMany()
    console.log(all)
}


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })