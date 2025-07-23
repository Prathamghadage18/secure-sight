import React, { useState } from 'react'

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

interface IncidentListProps {
  incidents: Incident[]
  onResolve: (id: number) => void
}

const IncidentList: React.FC<IncidentListProps> = ({ incidents, onResolve }) => {
  const [resolving, setResolving] = useState<number | null>(null)
  
  const getIcon = (type: string) => {
    switch(type) {
      case 'Unauthorised Access': return '🔓'
      case 'Gun Threat': return '🔫'
      case 'Sun Threat': return '☀️'
      case 'Face Recognised': return '👤'
      default: return '⚠️'
    }
  }
  
  const getColor = (type: string) => {
    switch(type) {
      case 'Unauthorised Access': return 'bg-security-red'
      case 'Gun Threat': return 'bg-security-red'
      case 'Sun Threat': return 'bg-security-yellow'
      case 'Face Recognised': return 'bg-security-green'
      default: return 'bg-gray-500'
    }
  }

  const handleResolve = async (id: number) => {
    setResolving(id)
    try {
      await onResolve(id)
    } catch (error) {
      console.error('Failed to resolve incident:', error)
    }
    setResolving(null)
  }

  return (
    <div className="w-1/3 bg-gray-900 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">15 Unresolved Incidents</h2>
        <div className="flex items-center text-gray-400 mb-4">
          <span className="h-2 w-2 bg-red-500 rounded-full mr-2"></span>
          Active incidents
        </div>
      </div>
      
      <div className="space-y-4">
        {incidents.map((incident) => (
          <div 
            key={incident.id}
            className={`bg-gray-800 rounded-lg p-4 flex items-center transition-opacity ${
              resolving === incident.id ? 'opacity-50' : ''
            }`}
          >
            <div className={`${getColor(incident.type)} w-12 h-12 rounded-lg flex items-center justify-center mr-4`}>
              <span className="text-xl">{getIcon(incident.type)}</span>
            </div>
            
            <div className="flex-1">
              <h3 className="font-semibold">{incident.type}</h3>
              <p className="text-gray-400 text-sm">{incident.camera.location}</p>
              <p className="text-gray-400 text-sm">
                {new Date(incident.tsStart).toLocaleTimeString()} - {new Date(incident.tsEnd).toLocaleTimeString()}
              </p>
            </div>
            
            <button
              onClick={() => handleResolve(incident.id)}
              disabled={resolving === incident.id}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              {resolving === incident.id ? 'Resolving...' : 'Resolve'}
            </button>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">16 Resolved Incidents</h3>
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
              <div className="text-gray-400">Result {i + 1}</div>
              <span className="text-green-500">✓ Resolved</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default IncidentList