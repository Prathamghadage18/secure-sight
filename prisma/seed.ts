import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // Create cameras
  const cameras = await Promise.all([
    prisma.camera.create({
      data: {
        name: 'Shop Floor A',
        location: 'Warehouse'
      }
    }),
    prisma.camera.create({
      data: {
        name: 'Vault',
        location: 'Building A'
      }
    }),
    prisma.camera.create({
      data: {
        name: 'Entrance',
        location: 'Main Gate'
      }
    })
  ])

  // Threat types
  const threatTypes = [
    'Unauthorised Access', 
    'Gun Threat', 
    'Face Recognised',
    'Sun Threat'
  ]

  // Create incidents
  const now = new Date()
  const incidents = []
  
  for (let i = 0; i < 15; i++) {
    const start = new Date(now)
    start.setHours(start.getHours() - Math.floor(Math.random() * 24))
    start.setMinutes(start.getMinutes() - Math.floor(Math.random() * 60))
    
    const end = new Date(start)
    end.setMinutes(end.getMinutes() + Math.floor(Math.random() * 10) + 1)
    
    const incident = await prisma.incident.create({
      data: {
        cameraId: cameras[Math.floor(Math.random() * cameras.length)].id,
        type: threatTypes[Math.floor(Math.random() * threatTypes.length)],
        tsStart: start,
        tsEnd: end,
        thumbnailUrl: `/thumbnails/placeholder${Math.floor(Math.random() * 3) + 1}.jpg`,
        resolved: i > 12 // Last 3 unresolved
      }
    })
    incidents.push(incident)
  }
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })