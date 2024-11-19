const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  const coord1 = await prisma.coords.create({
    data: {
      x: 737,
      y: 365,
      character: 'Wally'
    },
  })
  const coord2 = await prisma.coords.create({
    data: {
      x: 919,
      y: 392,
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