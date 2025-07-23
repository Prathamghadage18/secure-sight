'use client'

import React, { useEffect, useState } from 'react'
import IncidentPlayer from './IncidentPlayer'
import IncidentList from './IncidentList'

interface Incident {
  id: number
  type: string
  tsStart: string
  tsEnd: string
  thumbnailUrl: string
  resolved: boolean
  camera: {
    location: string
  }
}

const Dashboard = () => {
  const [incidents, setIncidents] = useState<Incident[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchIncidents = async () => {
      try {
        const response = await fetch('/api/incidents?resolved=false')
        const data = await response.json()
        setIncidents(data)
      } catch (error) {
        console.error('Failed to fetch incidents:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchIncidents()
  }, [])

  const handleResolveIncident = async (id: number) => {
    try {
      const response = await fetch(`/api/incidents/${id}/resolve`, {
        method: 'PATCH'
      })
      
      if (response.ok) {
        setIncidents(prev => prev.filter(incident => incident.id !== id))
      }
    } catch (error) {
      console.error('Failed to resolve incident:', error)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className="text-white text-xl">Loading dashboard...</div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <IncidentPlayer />
      <IncidentList 
        incidents={incidents} 
        onResolve={handleResolveIncident} 
      />
    </div>
  )
}

export default Dashboard
