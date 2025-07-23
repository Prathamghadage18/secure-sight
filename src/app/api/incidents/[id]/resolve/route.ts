import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id)
  
  try {
    const incident = await prisma.incident.update({
      where: { id },
      data: { resolved: true },
      include: { camera: true }
    })
    
    return NextResponse.json(incident)
  } catch (error) {
    return NextResponse.json(
      { error: 'Incident not found' },
      { status: 404 }
    )
  }
}