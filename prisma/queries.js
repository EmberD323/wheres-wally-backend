const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


async function findAllCharacters() {
    const all =await prisma.coords.findMany()
    return all
}
async function findCharacter(x,y) {
    const character =await prisma.coords.findMany({
        where: {
          x: {
            gt:x-12.5,
            lt:x+12.5
          },
          y: {
            gt:y-12.5,
            lt:y+12.5
          },
        },
      })
    return character[0]
}

module.exports = {
    findAllCharacters,
    findCharacter
}