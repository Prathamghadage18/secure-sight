import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(request: NextRequest) {
  const resolvedParam = request.nextUrl.searchParams.get('resolved')
  const resolved = resolvedParam ? resolvedParam === 'true' : false
  
  const incidents = await prisma.incident.findMany({
    where: { resolved },
    include: { camera: true },
    orderBy: { tsStart: 'desc' }
  })
  
  return NextResponse.json(incidents)
}