import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">MANDAZOK</h1>
        <div className="flex space-x-6">
          {['Dashboard', 'Cameras', 'Scenes', 'Incidents', 'Users'].map((item) => (
            <a key={item} href="#" className="hover:text-blue-300">
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="font-semibold">Notnamed Ajibic</p>
            <p className="text-sm text-gray-400">ajibic@maniface.com</p>
          </div>
          <div className="bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center">
            NA
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar