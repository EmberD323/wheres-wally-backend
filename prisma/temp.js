const { PrismaClient,Prisma } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  // const deleteAll = await prisma.coords.deleteMany({
  // })
  const coord1 = await prisma.coords.create({
    data: {
      x:  47.2845,
      y: 33.6794,
      character: 'Wally'
    },
  })
  const coord2 = await prisma.coords.create({
    data: {
      x: 69.86,
      y: 37.9008,
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