const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


async function findAllCharacters() {
    const all =await prisma.coords.findMany()
    return all
}

async function createScore(name,time) {
    await prisma.scores.create({
        data: {
            name,
            seconds:time
        }
    })
    const all =await prisma.scores.findMany()

}

async function findAllScores() {
    const all =await prisma.scores.findMany()
    return all
}


module.exports = {
    findAllCharacters,
    createScore,
    findAllScores
}