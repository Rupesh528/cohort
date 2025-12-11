// import {prisma} from '@prisma/client'
import { prisma } from './lib/prisma.js'


async function main(){
    await prisma.post.create({
        data:{
            title:"this is somehitng",
            content:"wtf is going on here",
            author:{
                connect:{
                    id:1
                }
            }
        }
    })
}

main()
  .then(async () => {
    console.log("done");
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })