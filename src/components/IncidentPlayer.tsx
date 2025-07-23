import React from 'react'

const IncidentPlayer = () => {
  return (
    <div className="w-2/3 p-6">
      <div className="bg-gray-800 rounded-xl overflow-hidden mb-6">
        <div className="bg-gray-700 h-96 flex items-center justify-center">
          <div className="text-center">
            <div className="bg-gray-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">⏵</span>
            </div>
            <p className="text-gray-400">Live camera feed</p>
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-bold">Stop First Camera A</h3>
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
              Unauthorized Access
            </span>
          </div>
          <p className="text-gray-400">14:35 + 14:37 or A Juli 2025</p>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3].map((camera) => (
          <div key={camera} className="bg-gray-800 rounded-xl overflow-hidden">
            <div className="bg-gray-700 h-32 flex items-center justify-center">
              <span className="text-gray-400">Camera {camera}</span>
            </div>
            <div className="p-3">
              <h4 className="font-semibold">Camera {camera}</h4>
              <p className="text-gray-400 text-sm">Live</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default IncidentPlayer