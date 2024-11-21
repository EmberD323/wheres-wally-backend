const { PrismaClient,Prisma } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {

  const deleteAll = await prisma.coords.deleteMany({
  })
  const coord1 = await prisma.coords.create({
    data: {
      x:  49.5559,
      y: 36.0938,
      character: 'Wally'
    },
  })
  const coord2 = await prisma.coords.create({
    data: {
      x: 71.5807,
      y: 43.4987,
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