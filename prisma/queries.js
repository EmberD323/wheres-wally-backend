const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


async function findAllCharacters() {
    const all =await prisma.coords.findMany()
    return all
}


module.exports = {
    findAllCharacters,
}