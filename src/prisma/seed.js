const { PrismaClient } = require('@prisma/client')
var faker= require('faker');

const prisma = new PrismaClient()

const main = async () => {
  let x = 0
  while(x < 5){
    await prisma.post.create({
      data:{
        id: x,
        title: faker.commerce.productName(),
        completed: false
      }
    })
    x++;
  }
}

main().catch(e => {
  console.log(e);
  process.exit(1)
}).finally(()=>{
  prisma.$disconnect()
})