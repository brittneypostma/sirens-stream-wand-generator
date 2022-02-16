import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export async function get() {
  const wands = await prisma.wand.findMany({
    // where: {
    //   core: {
    //     endsWith: 'feather'
    //   }
    // }
  })

  return {
    status: 200,
    body: {
      data: wands
    }
  }
}

export async function post(event) {
  const body = await event.request.json()
  const createdWand = await prisma.wand.create({
    data: body
  })

  return {
    status: 200,
    body: {
      data: createdWand,
      message: 'created successfully'
    }
  }
}